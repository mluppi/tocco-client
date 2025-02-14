import PropTypes from 'prop-types'
import React from 'react'

import {StyledMenuChildrenWrapper} from './StyledComponents'

const MenuChildrenWrapper = ({isOpen, canCollapse, children}) => (
  <StyledMenuChildrenWrapper isOpen={!canCollapse || isOpen}>
    {(!canCollapse || isOpen) && children}
  </StyledMenuChildrenWrapper>
)

MenuChildrenWrapper.propTypes = {
  menuTreePath: PropTypes.string.isRequired,
  canCollapse: PropTypes.bool.isRequired,
  children: PropTypes.any,
  isOpen: PropTypes.bool
}

export default MenuChildrenWrapper
