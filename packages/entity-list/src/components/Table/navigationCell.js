import React from 'react'
import PropTypes from 'prop-types'
import {Icon} from 'tocco-ui'

import NavigationCellHeader from './NavigationCellHeader'

const CellRenderer = ({rowData, navigationStrategy, parent}) =>
  <span
    onClick={e => e.stopPropagation()}
    data-cy="list-navigation-arrow"
  >
    <navigationStrategy.DetailLinkRelative
      entityKey={rowData.__key}
      {...(parent && parent.relationName && {relation: parent.relationName})}
    >
      <Icon icon="arrow-right"/>
    </navigationStrategy.DetailLinkRelative>
  </span>

CellRenderer.propTypes = {
  rowData: PropTypes.shape({
    __key: PropTypes.string.isRequired
  }).isRequired,
  navigationStrategy: PropTypes.shape({
    DetailLinkRelative: PropTypes.func.isRequired
  }).isRequired,
  parent: PropTypes.shape({
    relationName: PropTypes.string
  })
}

export const navigationCell = (navigationStrategy, parent) => ({
  id: 'navigation-column',
  fixedPosition: true,
  width: 30,
  resizable: false,
  dynamic: false,
  HeaderRenderer: NavigationCellHeader,
  CellRenderer: props => <CellRenderer {...props} navigationStrategy={navigationStrategy} parent={parent}/>
})
