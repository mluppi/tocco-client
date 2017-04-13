import {consoleLogger} from 'tocco-util'
import _get from 'lodash/get'

const fromDefinitionTypeMap = {
  'ch.tocco.nice2.model.form.components.simple.DateField': 'date',
  'ch.tocco.nice2.model.form.components.simple.TextField': 'string',
  'ch.tocco.nice2.model.form.components.simple.BirthDateField': 'birthdate',
  'ch.tocco.nice2.model.form.components.simple.DocumentField': 'document',
  'ch.tocco.nice2.model.form.components.simple.DurationField': '',
  'ch.tocco.nice2.model.form.components.simple.TimeField': '',
  'ch.tocco.nice2.model.form.components.simple.DatetimeField': 'datetime',
  'ch.tocco.nice2.model.form.components.simple.PulldownDateField': 'date',
  'ch.tocco.nice2.model.form.components.simple.UploadField': 'document',
  'ch.tocco.nice2.model.form.components.simple.NamedUploadField': 'document',
  'ch.tocco.nice2.model.form.components.simple.ImageField': 'document',
  'ch.tocco.nice2.model.form.components.simple.TextArea': 'text',
  'ch.tocco.nice2.model.form.components.simple.EmailField': 'email',
  'ch.tocco.nice2.model.form.components.simple.UrlField': 'url',
  'ch.tocco.nice2.model.form.components.simple.UuidField': 'string',
  'ch.tocco.nice2.model.form.components.simple.Checkbox': 'boolean',
  'ch.tocco.nice2.model.form.components.simple.PathField': '',
  'ch.tocco.nice2.model.form.components.simple.HtmlField': 'text',
  'ch.tocco.nice2.model.form.components.simple.CodeField': 'text',
  'ch.tocco.nice2.model.form.components.simple.NumberField': 'number',
  'ch.tocco.nice2.model.form.components.simple.ConstantField': '',
  'ch.tocco.nice2.model.form.components.simple.MultiSelectBox': 'multi-select',
  'ch.tocco.nice2.model.form.components.simple.SingleSelectBox': 'single-select',
  'ch.tocco.nice2.model.form.components.simple.RemoteField': 'remote',
  'ch.tocco.nice2.model.form.components.simple.MultiRemoteField': 'multi-remote',
  'ch.tocco.nice2.model.form.components.simple.PasswordField': '',
  'ch.tocco.nice2.model.form.components.simple.CreatePasswordField': '',
  'ch.tocco.nice2.model.form.components.simple.RangeField': '',
  'ch.tocco.nice2.model.form.components.simple.DisplayField': '',
  'ch.tocco.nice2.model.form.components.simple.DisplayExpressionFieldFacade': '',
  'ch.tocco.nice2.model.form.components.simple.MoneyAmountField': 'number',
  'ch.tocco.nice2.model.form.components.simple.PercentField': 'number',
  'ch.tocco.nice2.model.form.components.simple.DataAmountField': 'number',
  'ch.tocco.nice2.model.form.components.simple.CustomDataField': '',
  'ch.tocco.nice2.model.form.components.simple.PhoneField': 'phone',
  'ch.tocco.nice2.model.form.components.table.Table': '',
  'ch.tocco.nice2.model.form.components.table.Column': '',
  'ch.tocco.nice2.model.form.components.action.Action': '',
  'ch.tocco.nice2.model.form.components.action.ActionSeparator': '',
  'ch.tocco.nice2.model.form.components.Form': '',
  'ch.tocco.nice2.model.form.components.Template': '',
  'ch.tocco.nice2.model.form.components.layout.HorizontalBox': '',
  'ch.tocco.nice2.model.form.components.layout.VerticalBox': '',
  'ch.tocco.nice2.model.form.components.navigation.IteratorComponent': '',
  'ch.tocco.nice2.model.form.components.simple.DescriptionField': '',
  'ch.tocco.nice2.model.form.components.composite.LocationField': '',
  'ch.tocco.nice2.model.form.components.simple.LoginField': 'string'
}

const getOptions = (formField, modelField, util) => {
  const options = {}
  switch (formField.type) {
    case 'ch.tocco.nice2.model.form.components.simple.MultiSelectBox':
    case 'ch.tocco.nice2.model.form.components.simple.SingleSelectBox':
      if (util.relationEntities) {
        const fieldStore = util.relationEntities[modelField.targetEntity]
        options.store = fieldStore ? fieldStore.data : []
      }
      break
    case 'ch.tocco.nice2.model.form.components.simple.RemoteField':
    case 'ch.tocco.nice2.model.form.components.simple.MultiRemoteField':
      options.options = _get(util, 'remoteEntities.' + formField.name + '.entities', [])
      options.isLoading = _get(util, 'remoteEntities.' + formField.name + '.loading', false)
      options.fetchOptions = searchTerm => util.loadRemoteEntity(formField.name, modelField.targetEntity, searchTerm)

      options.onValueClick = value => {
        // eslint-disable-next-line no-console
        console.log('click value', value)
      }

      if (util.intl) {
        options.searchPromptText = util.intl.formatMessage({id: 'client.component.remoteselect.searchPromptText'})
        options.clearValueText = util.intl.formatMessage({id: 'client.component.remoteselect.clearValueText'})
        options.clearAllText = util.intl.formatMessage({id: 'client.component.remoteselect.clearAllText'})
      }
      break
  }

  return options
}

const getEvents = (field, modelField, util) => {
  const events = {}
  switch (field.type) {
    case 'ch.tocco.nice2.model.form.components.simple.MultiSelectBox':
    case 'ch.tocco.nice2.model.form.components.simple.SingleSelectBox':
      if (util.loadRelationEntity) {
        events.onFocus = () => {
          util.loadRelationEntity(modelField.targetEntity)
        }
      }
      break
    case 'ch.tocco.nice2.model.form.components.simple.RemoteField':
    case 'ch.tocco.nice2.model.form.components.simple.MultiRemoteField':
      if (util.loadRemoteEntity) {
        events.onFocus = () => {
          util.loadRemoteEntity(field.name, modelField.targetEntity, '')
        }
      }
  }

  return events
}

export const getEditableValueProps = (formField, modelField, util) => {
  const type = fromDefinitionTypeMap[formField.type]
  if (!type) {
    consoleLogger.logError(`FormField: No type found for type ${formField.type}`)
  }

  const options = getOptions(formField, modelField, util)
  const events = getEvents(formField, modelField, util)

  return {
    type,
    options,
    events
  }
}
