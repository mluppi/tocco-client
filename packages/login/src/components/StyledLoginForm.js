import styled from 'styled-components'
import {
  StyledInputCss,
  StyledEditableWrapperCss,
  Button
} from 'tocco-ui'
import {StyledButton} from 'tocco-ui/src/Button'
import {StyledButtonGroup} from 'tocco-ui/src/ButtonGroup'
import {theme} from 'tocco-ui/src/utilStyles'

export const StyledLoginFormInput = styled.input`
  @keyframes onAutoFillStart { from {} }

  && {
    transition: background-color 50000s, color 50000s, filter 50000s;
     &:-webkit-autofill {
      animation-duration: 50000s;
      animation-name: onAutoFillStart;
     }
  }
  
  ${StyledInputCss}
`

export const StyledLoginFormInputWrapper = styled.div`
  && {
    ${StyledEditableWrapperCss}
  }
`

export const StyledLoginButton = styled(Button)`
  &&&& {
    margin-right: 0;
  }
`

export const StyledPasswordButton = styled(Button)`
  &&& {
    margin-right: 0;
    background-color: transparent;
    color: ${theme.color('signal.danger.text')};
    
    &:hover {
    background-color: transparent;
    }
  }
`

export const StyledLoginFormWrapper = styled.div`  
  ${StyledButtonGroup} {
    margin-top: 1.8rem;
    width: auto;
    flex-direction: column;

    ${StyledButton} {
      flex-grow: 1;

      > span {
        width: 100%;
        padding: 1rem 0 1rem 0;
      }
    }
  }
`
