import PropTypes from 'prop-types'
import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {usePopper} from 'react-popper'

import {StyledArrow, StyledBox, StyledBoxWrapper} from './StyledPopover'

const placements = {
  TOP: 'top',
  BOTTOM: 'bottom',
  RIGHT: 'right'
}

const Popover = ({children, content, isPlainHtml, rimless, placement}) => {
  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const [arrowElement, setArrowElement] = useState(null)
  const [showToolTip, setShowToolTip] = useState(false)

  const handleMouseEnter = () => {
    setShowToolTip(true)
  }

  const handleMouseLeave = () => {
    setShowToolTip(false)
  }

  const modifiers = [
    {
      name: 'offset',
      options: {
        offset: [0, 8]
      }
    },
    {
      name: 'preventOverflow',
      options: {
        padding: 10
      }
    },
    {
      name: 'arrow',
      options: {
        element: arrowElement
      }
    }
  ]

  const {styles, attributes} = usePopper(referenceElement, popperElement, {placement, modifiers})

  return (
    <>
      <span ref={setReferenceElement} onMouseOut={handleMouseLeave} onMouseOver={handleMouseEnter}>
        {children}
      </span>

      {showToolTip &&
        content &&
        ReactDOM.createPortal(
          <StyledBoxWrapper ref={setPopperElement} style={styles.popper} rimless={rimless} {...attributes.popper}>
            <StyledBox isPlainHtml={isPlainHtml}>{content}</StyledBox>
            <StyledArrow ref={setArrowElement} data-placement={placement} style={styles.arrow} />
          </StyledBoxWrapper>,
          document.body
        )}
    </>
  )
}

Popover.defaultProps = {
  isPlainHtml: true,
  rimless: false,
  placement: placements.TOP
}

Popover.propTypes = {
  /**
   * Content in the popover.
   */
  content: PropTypes.node,
  /**
   * Reference to the popover.
   */
  children: PropTypes.node,
  /**
   * Remove space between content and border if useful (e.g. content is an image only). Default is {false}.
   */
  rimless: PropTypes.bool,
  /**
   * Add typographic styles for nested content. If content is already completely
   * styled disable this option (e.g. styled-components). Default is {true}.
   */
  isPlainHtml: PropTypes.bool,
  /**
   * Content of the popover
   */
  placement: PropTypes.oneOf(Object.values(placements))
}

export default Popover
