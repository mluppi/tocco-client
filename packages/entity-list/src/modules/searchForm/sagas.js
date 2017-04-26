import {delay} from 'redux-saga'
import _uniq from 'lodash/uniq'
import {call, put, fork, select, takeLatest, take} from 'redux-saga/effects'
import * as actions from './actions'
import {fetchForm, searchFormTransformer} from '../../util/api/forms'
import {fetchEntities, selectEntitiesTransformer} from '../../util/api/entities'
import {INITIALIZED} from '../entityList/actions'

export const searchFormSelector = state => state.searchForm
export const inputSelector = state => state.input
export const entityListSelector = state => state.entityList

export default function* sagas() {
  yield [
    fork(takeLatest, actions.INITIALIZE, initialize),
    fork(takeLatest, actions.SET_SEARCH_INPUT, setSearchTerm),
    fork(takeLatest, actions.RESET, setSearchTerm),
    fork(takeLatest, actions.LOAD_RELATION_ENTITY, loadRelationEntity)
  ]
}

export function* loadSearchForm(formDefinition, formBase) {
  if (formDefinition.length === 0) {
    formDefinition = yield call(fetchForm, formBase + '_search', searchFormTransformer)
    yield put(actions.setFormDefinition(formDefinition))
  }

  return formDefinition
}

export function* loadPreselectedRelationEntities(formDefinition, entityModel, searchInputs) {
  const relationFields = formDefinition.filter(searchField => [
    'ch.tocco.nice2.model.form.components.simple.MultiSelectBox',
    'ch.tocco.nice2.model.form.components.simple.SingleSelectBox']
       .includes(searchField.type)).map(field => field.name)

  const relationFieldsWithValue = relationFields.filter(relationField => {
    const value = searchInputs[relationField]
    return (value instanceof Array && value.length > 0) || (!(value instanceof Array) && value)
  })
  const targetEntities = _uniq(
   relationFieldsWithValue.map(relationField => (entityModel[relationField].targetEntity))
  )

  yield targetEntities.map(targetEntity => put(actions.loadRelationEntity(targetEntity)))
}

export function* getEntityModel() {
  let entityBrowser = yield select(entityListSelector)
  if (!entityBrowser.initialized) {
    yield take(INITIALIZED)
  }

  entityBrowser = yield select(entityListSelector)

  return entityBrowser.entityModel
}

export function* initialize() {
  let {formDefinition, searchInputs} = yield select(searchFormSelector)
  const {formBase} = yield select(inputSelector)
  const entityModel = yield call(getEntityModel)
  formDefinition = yield call(loadSearchForm, formDefinition, formBase)
  yield call(loadPreselectedRelationEntities, formDefinition, entityModel, searchInputs)
}

export function* setSearchTerm() {
  yield call(delay, 400)
  const {searchValues} = yield select(searchFormSelector)
  yield put(actions.searchTermChange(searchValues))
}

export function* loadRelationEntity({payload}) {
  const {entityName} = payload
  const {relationEntities} = yield select(searchFormSelector)
  if (!relationEntities[entityName] || !relationEntities[entityName].loaded) {
    const entities = yield call(fetchEntities, entityName, {}, selectEntitiesTransformer)
    yield put(actions.setRelationEntity(entityName, entities, true))
    yield put(actions.setRelationEntityLoaded(entityName))
  }
}
