import {takeEvery, takeLatest} from 'redux-saga'
import {call, put, fork, select, spawn} from 'redux-saga/effects'
import * as actions from './actions'
import {fetchRequest} from './fetches'

export const entityBrowserSelector = state => state.entityBrowser

export default function* sagas() {
  yield [
    fork(takeLatest, actions.INITIALIZE_TABLE, initializeEntityBrowser),
    fork(takeLatest, actions.CHANGE_PAGE, changePage),
    fork(takeEvery, actions.REQUEST_RECORDS, requestRecords),
    fork(takeEvery, actions.SET_ORDER_BY, resetDataSet),
    fork(takeEvery, actions.SET_SEARCH_TERM, resetDataSet),
    fork(takeEvery, actions.RESET_DATA_SET, resetDataSet)
  ]
}

export function* changePage({payload}) {
  const {page} = payload
  yield put(actions.setCurrentPage(page))
  yield put(actions.requestRecords(page))
}

export function* fetchRecordsAndAddToStore(page) {
  const entityBrowser = yield select(entityBrowserSelector)
  const {entityName, orderBy, limit, recordStore, searchTerm} = entityBrowser

  if (!recordStore[page]) {
    const records = yield call(fetchRecords, entityName, page, orderBy, limit, searchTerm)
    yield put(actions.addRecordsToStore(page, records))
  }
}

export function* requestRecords({payload}) {
  const {page} = payload

  yield put(actions.setRecordRequestInProgress(true))

  const entityBrowser = yield select(entityBrowserSelector)
  let {recordStore} = entityBrowser

  if (!recordStore[page]) {
    yield call(fetchRecordsAndAddToStore, page)
  }

  yield call(displayRecord, page)
  yield put(actions.setRecordRequestInProgress(false))

  yield spawn(fetchRecordsAndAddToStore, page + 1)
}

export function* displayRecord(page) {
  const entityBrowser = yield select(entityBrowserSelector)
  const records = entityBrowser.recordStore[page]
  yield put(actions.setRecords(records))
}

export function* initializeEntityBrowser() {
  const entityBrowser = yield select(entityBrowserSelector)
  const {entityName} = entityBrowser

  const searchFormDefinition = yield call(getSearchFormDefinition, entityName)
  const columnDefinition = yield call(requestColumnDefinition, entityName)
  yield put(actions.setSearchFormDefinition(searchFormDefinition))
  yield put(actions.setColumnDefinition(columnDefinition))

  yield call(resetDataSet)
}

export function* resetDataSet() {
  yield put(actions.setRecords([]))
  const entityBrowser = yield select(entityBrowserSelector)
  const {entityName} = entityBrowser
  const recordCount = yield call(fetchRecordCount, entityName)
  yield put(actions.setRecordCount(recordCount))
  yield put(actions.clearRecordStore())

  yield call(changePage, {payload: {page: 1}})
}

export function fetchRecords(entityName, page, orderBy, limit, searchTerm) {
  const params = {
    '_sort': Object.keys(orderBy).length === 2 ? `${orderBy.name} ${orderBy.direction}` : undefined,
    '_limit': limit,
    '_offset': (page - 1) * limit,
    '_search': searchTerm
  }

  return fetchRequest(`entities/${entityName}`, params)
    .then(resp => resp.json())
    .then(json => json.data.map(e => e.fields))
}

export function fetchRecordCount(entityName) {
  return fetchRequest(`entities/${entityName}/count`)
    .then(resp => resp.json())
    .then(json => json.count)
}

export function fetchForm(formName, formType) {
  return fetchRequest(`forms/${formName}`)
    .then(resp => resp.json())
    .then(json => {
      const {form} = json
      return form.children.find(child => child.name === formType)
    })
}

export function* requestColumnDefinition(entityName) {
  const table = yield call(fetchForm, entityName + '_list', 'table')

  const columns = table.children.filter(column => column.displayType !== 'HIDDEN')

  return columns.map(c => ({
    label: c.label,
    value: c.children
      .filter(child =>
        child.type !== 'ch.tocco.nice2.model.form.components.action.Action'
        && !child.name.startsWith('custom:'))
      .map(child => child.name)
  }))
}

export function fetchSearchForm(formName) {
  return fetchRequest(`forms/${formName}`)
    .then(resp => resp.json())
    .then(json => {
      const {form} = json
      return form.children[0].children
    })
}

export function* getSearchFormDefinition(entityName) {
  const fields = yield call(fetchSearchForm, entityName + '_search')
  return fields.map(f => ({
    name: f.name,
    type: f.type,
    displayType: f.displayType,
    label: f.label,
    useLabel: f.useLabel
  }))
}
