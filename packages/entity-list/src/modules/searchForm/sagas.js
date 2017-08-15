import {call, put, fork, select, takeLatest, take, all} from 'redux-saga/effects'
import * as actions from './actions'
import {fetchForm, searchFormTransformer} from '../../util/api/forms'
import {getInitialFromValues} from '../../util/searchForm'
import {fetchEntities, selectEntitiesTransformer} from '../../util/api/entities'
import {SET_INITIALIZED as LIST_SET_INITIALIZED} from '../entityList/actions'
import {
  startSubmit,
  stopSubmit,
  getFormValues,
  actionTypes,
  initialize as initializeForm,
  reset
} from 'redux-form'

import _clone from 'lodash/clone'

import {validateSearchFields} from '../../util/searchFormValidation'
import {getSearchInputsForRequest} from '../../util/searchInputs'

export const searchFormSelector = state => state.searchForm
export const entityListSelector = state => state.entityList
export const searchValuesSelector = getFormValues('searchForm')

export default function* sagas() {
  yield all([
    fork(takeLatest, actions.INITIALIZE, initialize),
    fork(takeLatest, actions.SET_PRESELECTED_SEARCH_FIELDS, setPreselectedSearchFields),
    fork(takeLatest, actions.LOAD_RELATION_ENTITY, loadRelationEntity),
    fork(takeLatest, actionTypes.CHANGE, submitSearchFrom),
    fork(takeLatest, actions.SUBMIT_SEARCH_FORM, submitSearchFrom),
    fork(takeLatest, actions.RESET_SEARCH, resetSearch)
  ])
}

export function* submitSearchFrom() {
  const FORM_ID = 'searchForm'
  yield put(startSubmit(FORM_ID))
  const values = yield select(getFormValues(FORM_ID))
  const {formDefinition} = yield select(searchFormSelector)
  const errors = yield call(validateSearchFields, values, formDefinition)
  yield put(stopSubmit(FORM_ID, errors))

  if (Object.keys(errors).length === 0) {
    yield put(actions.executeSearch())
  }
}

export function* loadSearchForm(formDefinition, searchFormName) {
  if (!formDefinition.children) {
    formDefinition = yield call(fetchForm, searchFormName, searchFormTransformer)
    yield put(actions.setFormDefinition(formDefinition))
  }

  return formDefinition
}

export function* setPreselectedSearchFields({payload}) {
  const {preselectedSearchFields} = payload

  const entityModel = yield call(getEntityModel)
  const formValues = yield call(getInitialFromValues, preselectedSearchFields, entityModel, loadRelationEntity)
  yield put(initializeForm('searchForm', formValues))
  yield put(actions.setValuesInitialized(true))
}

export function* getEntityModel() {
  let entityList = yield select(entityListSelector)
  if (!entityList.initialized) {
    yield take(LIST_SET_INITIALIZED)
  }

  entityList = yield select(entityListSelector)

  return entityList.entityModel
}

export function* initialize() {
  const {formDefinition, searchFormName, initialized} = yield select(searchFormSelector)
  if (!initialized) {
    yield call(loadSearchForm, formDefinition, searchFormName)
    yield put(actions.setInitialized())
  }
}

export function* loadRelationEntity({payload}) {
  const {entityName} = payload
  const {relationEntities} = yield select(searchFormSelector)
  if (!relationEntities[entityName] || !relationEntities[entityName].loaded) {
    const entities = yield call(fetchEntities, entityName, {}, selectEntitiesTransformer)
    yield put(actions.setRelationEntity(entityName, entities, true))
    yield put(actions.setRelationEntityLoaded(entityName))
    return entities
  }
  return relationEntities[entityName].data
}

export function* resetSearch() {
  yield put(reset('searchForm'))
  yield call(submitSearchFrom)
}

export function* getSearchInputs() {
  const {valuesInitialized} = yield select(searchFormSelector)

  if (!valuesInitialized) {
    yield take(actions.SET_VALUES_INITIALIZED)
  }

  const searchInputs = yield select(searchValuesSelector)

  const clonedSearchInputs = _clone(searchInputs)
  const {entityModel} = yield select(entityListSelector)

  if (searchInputs && searchInputs.txtFulltext) {
    clonedSearchInputs._search = searchInputs.txtFulltext
    delete clonedSearchInputs.txtFulltext
  }

  const result = yield call(getSearchInputsForRequest, clonedSearchInputs, entityModel)
  return result
}
