import React from 'react'
import {EditableValue} from 'tocco-ui'
import _get from 'lodash/get'
import _mapKeys from 'lodash/mapKeys'

const settings = {
  REMOTE_SEARCH_RESULT_LIMIT: 50,
  REMOTE_SUGGESTION_LIMIT: 10,
  REMOTE_SUGGESTION_ORDER_FIELD: 'update_timestamp',
  SELECT_LIMIT: 10000
}

export const valueOverwriter = {
  'coordinate': value => value.value,
  'location': (type, formField, formName, props, utils) => {
    const locationMapping = formField.locationMapping || {}
    props.onChange = locationObject => {
      for (const key in locationMapping) {
        if (locationObject[key]) {
          utils.changeFieldValue(formName, locationMapping[key], locationObject[key])
        }
      }
    }

    let formValues = {}

    const formState = utils.formState
    if (formState && formState.detailForm) {
      formValues = formState.detailForm.values
    }

    const locationMappingValues = Object.values(locationMapping)

    const filteredLocationData = Object.keys(formValues)
      .filter(key => locationMappingValues.includes(key))
      .reduce((obj, key) => {
        obj[key] = formValues[key]
        return obj
      }, {})

    const renamedLocationData = _mapKeys(filteredLocationData, (value, key) => {
      return key.replace(/_\S/, '')
    })

    props.value = renamedLocationData
  }
}

export default type =>
  (formField, modelField, formName, data, events, utils) => {
    const options = getOptions(type, formField, modelField, utils, formName)

    if (valueOverwriter[type]) {
      valueOverwriter[type](type, formField, formName, data, utils)
    }

    if (valueOverwriter[type]) {
      data.value = valueOverwriter[type](data.value)
    }
    return <EditableValue type={type} events={events} {...data} options={options}/>
  }

const getOptions = (type, formField, modelField, utils, formName) => {
  const options = {}

  switch (type) {
    case 'single-select':
    case 'multi-select':
      options.options = _get(utils, ['relationEntities', formField.id, 'data'], [])
      options.isLoading = _get(utils, ['relationEntities', formField.id, 'isLoading'], false)
      options.tooltips = _get(utils.tooltips, modelField.targetEntity, null)
      options.loadTooltip = id => utils.loadTooltip(modelField.targetEntity, id)

      if (utils.intl) {
        options.noResultsText = utils.intl.formatMessage({id: 'client.component.remoteselect.noResultsText'})
      }

      options.fetchOptions = () => utils.loadRelationEntities(formField.id, modelField.targetEntity, {
        forceReload: false,
        limit: settings.SELECT_LIMIT
      })

      break
    case 'remote':
    case 'multi-remote':
      options.options = _get(utils, ['relationEntities', formField.id, 'data'], [])
      options.moreOptionsAvailable = _get(utils, ['relationEntities', formField.id, 'moreEntitiesAvailable'], false)
      options.isLoading = _get(utils, ['relationEntities', formField.id, 'isLoading'], false)

      options.fetchOptions = () => utils.loadRelationEntities(formField.id, modelField.targetEntity, {
        forceReload: true,
        limit: settings.REMOTE_SUGGESTION_LIMIT,
        sorting: [{field: settings.REMOTE_SUGGESTION_ORDER_FIELD, order: 'desc'}],
        formBase: formField.formBase
      })
      options.searchOptions = searchTerm => utils.loadRelationEntities(formField.id, modelField.targetEntity, {
        searchTerm,
        limit: settings.REMOTE_SEARCH_RESULT_LIMIT,
        forceReload: true,
        formBase: formField.formBase
      })

      options.openAdvancedSearch = value => utils.openAdvancedSearch(formName, formField, modelField, value)
      options.tooltips = _get(utils.tooltips, modelField.targetEntity, null)
      options.loadTooltip = id => utils.loadTooltip(modelField.targetEntity, id)

      if (utils.intl) {
        options.noResultsText = utils.intl.formatMessage({id: 'client.component.remoteselect.noResultsText'})
        options.moreOptionsAvailableText = utils.intl.formatMessage(
          {id: 'client.component.remoteselect.moreOptionsAvailableText'})
      }
      break
    case 'search-filter':
      options.isMulti = formField.multiple
      options.options = _get(utils.searchFilters, formField.model, null)
      options.fetchOptions = () => utils.loadSearchFilters(formField.model, formField.group)

      if (utils.intl) {
        options.noResultsText = utils.intl.formatMessage({id: 'client.component.searchfilter.noResultsText'})
      }
      break
    case 'document':
      options.upload = document => {
        utils.uploadDocument(formName, formField.id, document)
        options.uploadText = utils.intl.formatMessage({id: 'client.component.upload.upload'})
      }
      options.uploadingText = utils.intl.formatMessage({id: 'client.component.upload.uploading'})
      options.downloadText = utils.intl.formatMessage({id: 'client.component.upload.downloadTitle'})
      options.deleteText = utils.intl.formatMessage({id: 'client.component.upload.deleteTitle'})
      break
    case 'phone':
      options.customPhoneRegex = modelField.customPhoneRegex
      options.defaultCountry = modelField.defaultCountry
      break
    case 'duration':
      if (utils.intl) {
        options.hoursLabel = utils.intl.formatMessage({id: 'client.component.duration.hoursLabel'})
        options.minutesLabel = utils.intl.formatMessage({id: 'client.component.duration.minutesLabel'})
      }
      break
    case 'number':
    case 'decimal':
    case 'moneyamount':
      options.prePointDigits = _get(modelField, 'validation.decimalDigits.prePointDigits', null)
      options.postPointDigits = _get(modelField, 'validation.decimalDigits.postPointDigits', null)
      options.minValue = _get(modelField, 'validation.numberRange.fromIncluding', null)
      options.maxValue = _get(modelField, 'validation.numberRange.toIncluding', null)
      break
    case 'integer':
      options.prePointDigits = _get(modelField, 'validation.decimalDigits.prePointDigits', null)
      options.minValue = _get(modelField, 'validation.numberRange.fromIncluding', null)
      options.maxValue = _get(modelField, 'validation.numberRange.toIncluding', null)
      break
    case 'location':
      options.fetchSuggestions = searchTerm => utils.loadLocationsSuggestions(formField.id, searchTerm)
      options.isLoading = _get(utils, ['locations', formField.id, 'isLoading'], false)
      options.suggestions = _get(utils, ['locations', formField.id, 'suggestions'], null)
  }

  return options
}
