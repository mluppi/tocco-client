import PropTypes from 'prop-types'
import React from 'react'
import {injectIntl} from 'react-intl'
import EntityListApp from 'tocco-entity-list/src/main'
import {AdminLink as StyledLink} from 'tocco-ui'

import {StyledInfoBoxContentWrapper} from './StyledComponents'

const DetailLinkRelativeWithoutIntl = ({entityKey, entityModel, children, intl}) => {
  const msg = id => intl.formatMessage({id})

  return (
    <StyledLink
      aria-label={msg('client.component.navigationStrategy.detailLinkRelative')}
      to={`/e/${entityModel}/${entityKey}`}
    >
      {children}
    </StyledLink>
  )
}

const DetailLinkRelative = injectIntl(DetailLinkRelativeWithoutIntl)

DetailLinkRelativeWithoutIntl.propTypes = {
  entityKey: PropTypes.string.isRequired,
  entityModel: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  intl: PropTypes.object.isRequired
}

const InfoBoxSearchFilterContent = ({id, content, navigationStrategy, emitAction}) => {
  const {searchFilterUniqueId, entityName, scope, limit} = content

  const handleRowClick = ({id}) => {
    navigationStrategy.openDetail(entityName, id, false)
  }

  return (
    <StyledInfoBoxContentWrapper scrollable>
      <EntityListApp
        id={id}
        limit={limit}
        entityName={entityName}
        formName={entityName}
        searchFilters={[searchFilterUniqueId]}
        scope={scope}
        showActions={false}
        onRowClick={handleRowClick}
        searchFormType="fulltext"
        searchFormPosition="top"
        selectionStyle="none"
        sortable
        disableSelectionController
        emitAction={emitAction}
        navigationStrategy={{...navigationStrategy, DetailLinkRelative}}
        showLink={true}
        scrollBehaviour="inline"
        tableMinHeight="240px"
      />
    </StyledInfoBoxContentWrapper>
  )
}

InfoBoxSearchFilterContent.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  emitAction: PropTypes.func.isRequired,
  navigationStrategy: PropTypes.object
}

export default InfoBoxSearchFilterContent
