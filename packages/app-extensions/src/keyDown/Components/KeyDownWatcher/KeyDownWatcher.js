import PropTypes from 'prop-types'
import React, {useCallback, useEffect} from 'react'
import styled from 'styled-components'

import {getMatchingConfig} from '../../utils'

const StyledDiv = styled.div`
  display: contents;

  :focus {
    outline: none;
  }
`

const KeyDownWatcher = ({config, children, keyDownHandler}) => {
  const handleKeyDown = useCallback(
    (event, global) => {
      const matchingConfig = getMatchingConfig(config, event, global)
      if (matchingConfig) {
        event.preventDefault()
        event.stopPropagation()
      }
      keyDownHandler(matchingConfig)
    },
    [config, keyDownHandler]
  )

  const onKeyDown = event => handleKeyDown(event)

  const onDocumentKeyDown = useCallback(event => handleKeyDown(event, true), [handleKeyDown])

  useEffect(() => {
    document.addEventListener('keydown', onDocumentKeyDown)

    return () => {
      document.removeEventListener('keydown', onDocumentKeyDown)
    }
  }, [onDocumentKeyDown])

  return (
    <StyledDiv tabIndex="0" onKeyDown={onKeyDown}>
      {children}
    </StyledDiv>
  )
}

KeyDownWatcher.propTypes = {
  children: PropTypes.node,
  config: PropTypes.array.isRequired,
  keyDownHandler: PropTypes.func.isRequired
}

export default KeyDownWatcher
