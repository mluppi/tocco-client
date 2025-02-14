import PropTypes from 'prop-types'
import React from 'react'
import {FormattedMessage, injectIntl} from 'react-intl'

import ButtonGroup from '../ButtonGroup'
import Typography from '../Typography'
import {StyledPagination, StyledPaginationButton} from './StyledComponents'

/**
 * Controlled Pagination component
 */
const Pagination = ({totalCount, recordsPerPage, currentPage, onPageChange, intl}) => {
  const totalPages = Math.ceil(totalCount / recordsPerPage)
  const start = Math.min((currentPage - 1) * recordsPerPage + 1, totalCount)
  const to = Math.min(currentPage * recordsPerPage, totalCount)

  const msg = id => intl.formatMessage({id})

  return (
    <StyledPagination>
      <ButtonGroup>
        <StyledPaginationButton
          disabled={currentPage === 1}
          label={msg('client.component.pagination.firstPageTitle')}
          iconOnly
          icon="chevron-double-left"
          onClick={() => onPageChange(1)}
        />
        <StyledPaginationButton
          disabled={currentPage === 1}
          label={msg('client.component.pagination.prePageTitle')}
          iconOnly
          icon="chevron-left"
          onClick={() => onPageChange(currentPage - 1)}
        />
        <StyledPaginationButton
          disabled={currentPage >= totalPages}
          label={msg('client.component.pagination.nextPageTitle')}
          iconOnly
          icon="chevron-right"
          onClick={() => onPageChange(currentPage + 1)}
        />
        <StyledPaginationButton
          disabled={currentPage >= totalPages}
          label={msg('client.component.pagination.lastPageTitle')}
          iconOnly
          icon="chevron-double-right"
          onClick={() => onPageChange(totalPages)}
        />
      </ButtonGroup>

      {totalCount > 0 && (
        <Typography.Span>
          <FormattedMessage
            id="client.component.pagination.text"
            values={{
              start,
              to,
              total: totalCount
            }}
          />
        </Typography.Span>
      )}
    </StyledPagination>
  )
}

Pagination.propTypes = {
  intl: PropTypes.object.isRequired,
  /**
   * Currently displayed page
   */
  currentPage: PropTypes.number.isRequired,
  /**
   * Total of records available
   */
  totalCount: PropTypes.number,
  /**
   * Limit for a page
   */
  recordsPerPage: PropTypes.number.isRequired,
  /**
   * Callback on page change with provided button, returns new page as single argument
   */
  onPageChange: PropTypes.func.isRequired
}

export default injectIntl(Pagination)
