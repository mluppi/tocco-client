import _get from 'lodash/get'
import _join from 'lodash/join'
import {rest} from 'tocco-app-extensions'

import {call} from 'redux-saga/effects'

export function* getPreselectedValues(preselectedSearchFields, entityModel, loadRelationEntity, searchFormVisible) {
  const formValues = {}
  for (const preselectedSearchField of preselectedSearchFields) {
    const fieldName = preselectedSearchField.id
    const value = preselectedSearchField.value

    let transformedValue = value

    if (entityModel[fieldName] && entityModel[fieldName].type === 'relation') {
      if (!preselectedSearchField.hidden && searchFormVisible) {
        const targetEntity = entityModel[fieldName].targetEntity
        const query = `IN(pk,${_join(value, ',')})`
        transformedValue = yield call(rest.fetchEntities, targetEntity, {query, fields: ['pk']})
      } else {
        transformedValue = Array.isArray(value) ? value.map(v => ({key: v})) : {key: value}
      }
    }

    formValues[fieldName] = transformedValue
  }

  return formValues
}

export const NOT_FOUND_DISPLAY = '??'
export const getDisplay = (key, entities) => _get(entities.find(e => e.key === key), 'display', NOT_FOUND_DISPLAY)
