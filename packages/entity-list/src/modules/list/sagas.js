import {call, put, fork, select, spawn, takeEvery, takeLatest} from 'redux-saga/effects'
import * as actions from './actions'
import * as searchFormActions from '../searchForm/actions'
import {getSearchInputsForRequest} from '../../util/searchInputs'
import {fetchForm, columnDefinitionTransformer, getFieldsOfColumnDefinition} from '../../util/api/forms'
import {fetchEntityCount, fetchEntities, entitiesListTransformer} from '../../util/api/entities'
import _clone from 'lodash/clone'

export const inputSelector = state => state.input
export const listSelector = state => state.list
export const searchFormSelector = state => state.searchForm

export default function* sagas() {
  yield [
    fork(takeLatest, actions.INITIALIZE, initialize),
    fork(takeLatest, actions.CHANGE_PAGE, changePage),
    fork(takeLatest, searchFormActions.SEARCH_TERM_CHANGE, resetDataSet),
    fork(takeEvery, actions.SET_ORDER_BY, resetDataSet),
    fork(takeEvery, actions.RESET_DATA_SET, resetDataSet),
    fork(takeLatest, actions.REFRESH, refresh)
  ]
}

export function* getEntityModel() {
  const input = yield select(inputSelector)
  return input.entityModel
}

export function* initialize() {
  yield put(actions.setInProgress(true))
  yield put(searchFormActions.initialize())
  const {formBase} = yield select(inputSelector)
  const listView = yield select(listSelector)
  const {columnDefinition} = listView

  yield call(loadColumnDefinition, columnDefinition, formBase)
  yield call(resetDataSet)
  yield put(actions.setInProgress(false))
}

export function* refresh() {
  yield put(actions.setInProgress(true))
  const list = yield select(listSelector)
  const {currentPage} = list
  yield put(actions.clearEntityStore())
  yield call(requestEntities, currentPage)
  yield put(actions.setInProgress(false))
}

export function* changePage({payload}) {
  const {page} = payload
  yield put(actions.setInProgress(true))
  yield put(actions.setCurrentPage(page))
  yield call(requestEntities, page)
  yield put(actions.setInProgress(false))
}

export function* getSearchInputs() {
  let {searchInputs} = yield select(searchFormSelector)
  searchInputs = yield call(_clone, searchInputs)

  const entityModel = yield call(getEntityModel)

  if (searchInputs && searchInputs.txtFulltext) {
    searchInputs._search = searchInputs.txtFulltext
    delete searchInputs.txtFulltext
  }

  const result = yield call(getSearchInputsForRequest, searchInputs, entityModel)
  return result
}

export function* fetchEntitiesAndAddToStore(page) {
  const input = yield select(inputSelector)
  const {entityName, formBase} = input
  const list = yield select(listSelector)
  const {entityStore} = list

  if (!entityStore[page]) {
    const {orderBy, limit, columnDefinition} = list
    const {searchFilters} = input
    const formName = `${formBase}_list`

    const searchInputs = yield call(getSearchInputs)
    const fields = getFieldsOfColumnDefinition(columnDefinition)
    const fetchParams = {
      page,
      orderBy,
      limit,
      fields,
      searchFilters,
      searchInputs,
      formName
    }
    const entities = yield call(fetchEntities, entityName, fetchParams, entitiesListTransformer)
    yield put(actions.addEntitiesToStore(page, entities))
  }
}

export function* requestEntities(page) {
  const list = yield select(listSelector)
  let {entityStore} = list

  if (!entityStore[page]) {
    yield call(fetchEntitiesAndAddToStore, page)
  }

  yield call(displayEntity, page)

  if ((list.limit * page) < list.entityCount) {
    yield spawn(fetchEntitiesAndAddToStore, page + 1)
  }
}

export function* displayEntity(page) {
  const list = yield select(listSelector)
  const entities = list.entityStore[page]
  yield put(actions.setEntities(entities))
}

export function* loadColumnDefinition(columnDefinition, formBase) {
  if (columnDefinition.length === 0) {
    columnDefinition = yield call(fetchForm, `${formBase}_list`, columnDefinitionTransformer)
    yield put(actions.setColumnDefinition(columnDefinition))
  }
}

export function* resetDataSet() {
  yield put(actions.setInProgress(true))
  const input = yield select(inputSelector)
  const {entityName, searchFilters, formBase} = input
  const formName = `${formBase}_list`
  const searchInputs = yield call(getSearchInputs)
  const fetchParams = {
    searchFilters,
    searchInputs,
    formName
  }
  const entityCount = yield call(fetchEntityCount, entityName, fetchParams)
  yield put(actions.setEntityCount(entityCount))
  yield put(actions.clearEntityStore())

  yield call(changePage, {payload: {page: 1}})
  yield put(actions.setInProgress(false))
}
