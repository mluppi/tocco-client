import PropTypes from 'prop-types'
import React from 'react'
import {Helmet} from 'react-helmet'

import {AdminLink as StyledLink} from '../AdminLink'
import Icon from '../Icon'
import Typography from '../Typography'
import {StyledBreadcrumbs, StyledBreadcrumbsLink, StyledBreadcrumbsTitle} from './StyledBreadcrumbs'

const getTitle = breadcrumbsInfo =>
  breadcrumbsInfo
    .slice(breadcrumbsInfo.length - 2)
    .map(breadcrumb => breadcrumb.title || breadcrumb.display)
    .reverse()
    .join(' - ')

const Breadcrumbs = ({pathPrefix, breadcrumbsInfo, currentView, backgroundColor, onClick, linkComp: LinkComp}) => {
  const breadcrumbs = [...(breadcrumbsInfo || []), ...(currentView ? [currentView] : [])]

  if (breadcrumbs.length === 0) {
    return null
  }

  const handleClick = breadcrumbsItem => () => {
    if (onClick) {
      onClick(breadcrumbsItem)
    }
  }

  return (
    <StyledBreadcrumbs backgroundColor={backgroundColor}>
      <Helmet defer={false}>
        <title>{getTitle(breadcrumbs)}</title>
      </Helmet>
      <div>
        {' '}
        {breadcrumbs
          .map((b, idx) => {
            const display = b.display || ''
            const Comp = idx === breadcrumbs.length - 1 ? StyledBreadcrumbsTitle : StyledBreadcrumbsLink
            return (
              <Typography.Span key={`breadcrumbItem-${idx}`}>
                <Comp
                  neutral
                  {...(idx === breadcrumbs.length - 1 && {active: 'true'})}
                  {...(typeof b.path !== 'undefined' ? {to: `${pathPrefix}/${b.path}`} : {})}
                  onClick={handleClick(b)}
                  component={LinkComp ? <LinkComp /> : <StyledLink />}
                >
                  {b.type === 'list' && <Icon icon="list" />}
                  {b.type === 'error' && <Icon icon="exclamation-circle" />}
                  {display}
                </Comp>
              </Typography.Span>
            )
          })
          .reduce((prev, curr, idx) => [
            prev,
            <Typography.Span key={'icon' + idx}>
              {' '}
              <Icon icon="chevron-right" />{' '}
            </Typography.Span>,
            curr
          ])}
      </div>
    </StyledBreadcrumbs>
  )
}

Breadcrumbs.defaultProps = {
  pathPrefix: ''
}

Breadcrumbs.propTypes = {
  pathPrefix: PropTypes.string,
  match: PropTypes.object,
  breadcrumbsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      display: PropTypes.string,
      title: PropTypes.string,
      path: PropTypes.string,
      type: PropTypes.string
    })
  ),
  currentView: PropTypes.shape({
    display: PropTypes.string,
    title: PropTypes.string
  }),
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  linkComp: PropTypes.any
}

export default Breadcrumbs
