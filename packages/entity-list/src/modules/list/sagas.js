import {call, put, fork, select, spawn, takeEvery, takeLatest, all} from 'redux-saga/effects'
import * as actions from './actions'
import * as searchFormActions from '../searchForm/actions'
import {getSearchInputsForRequest} from '../../util/searchInputs'
import {fetchForm, columnDefinitionTransformer, getFieldsOfColumnDefinition} from '../../util/api/forms'
import {fetchEntityCount, fetchEntities, entitiesListTransformer, fetchModel} from '../../util/api/entities'
import _clone from 'lodash/clone'
import _isEmpty from 'lodash/isEmpty'
import {getFormValues, reset} from 'redux-form'

export const inputSelector = state => state.input
export const entityListSelector = state => state.entityList
export const listSelector = state => state.list
export const searchValuesSelector = getFormValues('searchForm')

export default function* sagas() {
  yield all([
    fork(takeLatest, actions.INITIALIZE, initialize),
    fork(takeLatest, actions.CHANGE_PAGE, changePage),
    fork(takeLatest, searchFormActions.EXECUTE_SEARCH, resetDataSet),
    fork(takeLatest, searchFormActions.RESET_SEARCH, resetSearch),
    fork(takeEvery, actions.SET_ORDER_BY, resetDataSet),
    fork(takeEvery, actions.RESET_DATA_SET, resetDataSet),
    fork(takeLatest, actions.REFRESH, refresh)
  ])
}

export function* initialize() {
  yield put(actions.setInProgress(true))
  const {entityName} = yield select(entityListSelector)
  const {formBase} = yield select(inputSelector)
  const listView = yield select(listSelector)
  const {columnDefinition, entityModel} = listView

  yield all([
    call(loadEntityModel, entityName, entityModel),
    call(loadColumnDefinition, columnDefinition, formBase)
  ])

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
  const searchInputs = yield select(searchValuesSelector)

  const clonedSearchInputs = _clone(searchInputs)
  const {entityModel} = yield select(listSelector)

  if (searchInputs && searchInputs.txtFulltext) {
    clonedSearchInputs._search = searchInputs.txtFulltext
    delete clonedSearchInputs.txtFulltext
  }

  const result = yield call(getSearchInputsForRequest, clonedSearchInputs, entityModel)
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
  const {entityStore} = list

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

export function* loadEntityModel(entityName, entityModel) {
  if (_isEmpty(entityModel)) {
    const loadedModel = yield call(fetchModel, entityName)
    yield put(actions.setEntityModel(loadedModel))
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

export function* resetSearch() {
  yield put(reset('searchForm'))
  yield call(resetDataSet)
}
