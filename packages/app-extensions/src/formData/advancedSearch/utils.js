import React from 'react'

import AdvancedSearchContainer from './AdvancedSearchContainer'

export const getSelection = (value, multi) => (value ? (multi ? value.map(v => v.key) : [value.key]) : [])

export const getValue = (entities, multi) =>
  multi
    ? entities
    : entities.length > 0
    ? {
        key: entities[0].key,
        display: entities[0].display
      }
    : null

export const getAdvancedSearchComponent =
  (
    listApp,
    entity,
    formName,
    listFormDefinition,
    selection,
    onSelectionChange,
    onOkClick,
    fieldId,
    multi,
    constriction
  ) =>
  () =>
    (
      <AdvancedSearchContainer
        ListApp={listApp}
        entityName={entity}
        formName={formName}
        listFormDefinition={listFormDefinition}
        selection={selection}
        onSelectionChange={onSelectionChange}
        onOkClick={onOkClick}
        field={fieldId}
        multi={multi}
        constriction={constriction}
      />
    )
