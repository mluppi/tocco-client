import _startsWith from 'lodash/startsWith'
import {request} from 'tocco-util/src/rest'

const NO_FIELD_TYPES = [
  'ch.tocco.nice2.model.form.components.simple.DescriptionField',
  'ch.tocco.nice2.model.form.components.simple.DisplayExpressionField'
]

export const getFieldsOfDetailForm = formDefinition => {
  return getFieldsOfChildren(formDefinition.children)
}

const getFieldsOfChildren = children => {
  const result = []

  const subIterationTypes = [
    'ch.tocco.nice2.model.form.components.navigation.IteratorComponent',
    'ch.tocco.nice2.model.form.components.table.Table'
  ]

  for (let i = 0; i < children.length; i++) {
    if (children[i].children) {
      const childType = children[i].type
      if (!subIterationTypes.includes(childType)) {
        result.push(...getFieldsOfChildren(children[i].children))
      }
    }

    const fieldType = children[i].type
    if (_startsWith(fieldType, 'ch.tocco.nice2.model.form.components.simple') && !NO_FIELD_TYPES.includes(fieldType)) {
      result.push(children[i].name)
    }
  }

  return result
}

const defaultFormTransformer = json => (json.form)

export function fetchForm(formName, transformer = defaultFormTransformer) {
  return request(`forms/${formName}`)
    .then(resp => resp.body)
    .then(json => transformer(json))
}

export const columnDefinitionTransformer = json => {
  const {form} = json

  const tableType = 'ch.tocco.nice2.model.form.components.table.Table'
  const columns = form.children.find(child => child.type === tableType)
    .children.filter(column => column.displayType !== 'HIDDEN')

  const isDisplayableType = child => {
    return child.type !== 'ch.tocco.nice2.model.form.components.action.Action'
      && !child.name.startsWith('custom:')
  }

  return columns.map(c => ({
    label: c.label,
    values: c.children.filter(isDisplayableType).map(child => ({name: child.name, type: child.type}))
  }))
}

export const searchFormTransformer = json => {
  const {form} = json
  const fields = form.children[0].children

  return fields
    .filter(f => f.displayType !== 'HIDDEN')
    .map(f => ({
      name: f.name,
      type: f.type,
      displayType: f.displayType,
      label: f.label,
      useLabel: f.useLabel
    }))
}

export const getFieldsOfColumnDefinition = columnDefinition => {
  let fields = []

  columnDefinition
    .filter(column => !column.values.some(field => NO_FIELD_TYPES.includes(field.type)))
    .forEach(column => {
      fields = fields.concat(column.values.map(field => field.name))
    })

  return fields
}
