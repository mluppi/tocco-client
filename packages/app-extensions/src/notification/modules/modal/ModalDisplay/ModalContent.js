import React, {useState, useRef, useLayoutEffect} from 'react'
import PropTypes from 'prop-types'
import {Typography} from 'tocco-ui'

import Content from '../../../components/Content'
import {
  StyledModalContent,
  StyledModalWrapper,
  StyledTitleWrapper,
  StyledCloseButton,
  GlobalTetherStyle
} from './StyledComponents'

const ModalContent = ({
  closable,
  message,
  title,
  close,
  id,
  component: Component
}) => {
  const [isClosing, setIsClosing] = useState(false)
  const ref = useRef(null)

  const handleCloseClick = () => {
    setIsClosing(true)
    close(id)
  }

  useLayoutEffect(() => {
    if (ref.current) {
      // prevent mobile keyboard from pushing the modal up
      setTimeout(() => window.scrollTo(0, 0), 10)
    }
  }, [ref])

  return (
    <>
      <GlobalTetherStyle/>
      <StyledModalWrapper>
        <StyledModalContent isClosing={isClosing} ref={ref}>
          {closable && <StyledCloseButton onClick={handleCloseClick} type="button">
            ✕
          </StyledCloseButton>}
          <div>
            {title && <StyledTitleWrapper>
              <Typography.H1>
                <Content>{title}</Content>
              </Typography.H1>
            </StyledTitleWrapper>}
            {message && <Typography.Span><Content>{message}</Content></Typography.Span>}
            <Component close={handleCloseClick}/>
          </div>
        </StyledModalContent>
      </StyledModalWrapper>
    </>
  )
}

ModalContent.propTypes = {
  id: PropTypes.any.isRequired,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  close: PropTypes.func.isRequired,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  message: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  closable: PropTypes.bool
}

export default ModalContent
