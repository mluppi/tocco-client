import _get from 'lodash/get'
import _isEmpty from 'lodash/isEmpty'
import PropTypes from 'prop-types'
import React from 'react'

import Link from '../../Link'
import {StyledEditableControl, StyledEditableWrapper} from '../StyledEditableValue'
import StyledPhoneEdit from './StyledPhoneEdit'

class PhoneEdit extends React.Component {
  componentIsUnmounted = false
  FALLBACK_DEFAULT_COUNTRY = 'CH'

  constructor(props) {
    super(props)
    const defaultCountry = _get(props, 'options.defaultCountry') || this.FALLBACK_DEFAULT_COUNTRY
    this.state = {libPhoneImport: null, defaultCountry}
    this.importLibPhoneNumber()
    this.inputElement = React.createRef()
  }

  async importLibPhoneNumber() {
    const libPhoneImport = await import(/* webpackChunkName: "vendor-libphonenumber-js" */ 'libphonenumber-js')
    if (!this.componentIsUnmounted) {
      this.setState({...this.state, libPhoneImport})
    }
  }

  componentWillUnmount() {
    this.componentIsUnmounted = true
  }

  amountOfSpacesBeforeCaret = (str, caretPosition) => {
    const spaces = str.substring(0, caretPosition - 1).match(/\s/g)
    return spaces ? spaces.length : 0
  }

  repositionCaret = (value, previousValue, caretPosition) => {
    if (caretPosition && value.length !== caretPosition) {
      const previousFormatted = new this.state.libPhoneImport.AsYouType(this.state.defaultCountry).input(previousValue)
      const currentFormatted = new this.state.libPhoneImport.AsYouType(this.state.defaultCountry).input(value)

      const spacesPrevious = this.amountOfSpacesBeforeCaret(previousFormatted, caretPosition)
      const spacesCurrent = this.amountOfSpacesBeforeCaret(currentFormatted, caretPosition)

      const offset = spacesCurrent - spacesPrevious

      window.requestAnimationFrame(
        function () {
          const start = caretPosition + offset
          this.setSelectionRange(start, start)
        }.bind(this.inputElement.current)
      )
    }
  }

  removeSpaces = str => str.replace(/\s/g, '')

  handleChange = e => {
    const newValue = e.target.value
    const {libPhoneImport} = this.state
    const parsedNumber = libPhoneImport ? libPhoneImport.parseNumber(newValue, this.state.defaultCountry) : newValue

    const valueNormalized = _isEmpty(parsedNumber)
      ? this.removeSpaces(new this.state.libPhoneImport.AsYouType(this.state.defaultCountry).input(newValue))
      : libPhoneImport.formatNumber(parsedNumber, 'E.164')

    this.props.onChange(valueNormalized)

    const currentCaretPosition = e.target.selectionStart
    this.repositionCaret(newValue, this.props.value, currentCaretPosition)
  }

  determineDisplayValue = () => {
    if (this.props.value && this.state.libPhoneImport && this.state.libPhoneImport.AsYouType) {
      return new this.state.libPhoneImport.AsYouType(this.state.defaultCountry).input(this.props.value)
    }

    return this.props.value || ''
  }

  render() {
    const displayValue = this.determineDisplayValue()

    return (
      <StyledEditableWrapper immutable={this.props.immutable}>
        <StyledPhoneEdit
          disabled={this.props.immutable || !this.state.libPhoneImport}
          id={this.props.id}
          name={name}
          onChange={this.handleChange}
          immutable={this.props.immutable || !this.state.libPhoneImport}
          ref={this.inputElement}
          value={displayValue}
        />
        {displayValue && (
          <StyledEditableControl>
            <Link href={`tel:${this.props.value}`} icon="phone" tabIndex={-1} neutral />
          </StyledEditableControl>
        )}
      </StyledEditableWrapper>
    )
  }
}

PhoneEdit.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.node,
  name: PropTypes.string,
  id: PropTypes.string,
  immutable: PropTypes.bool,
  options: PropTypes.shape({
    defaultCountry: PropTypes.string,
    customPhoneRegex: PropTypes.string
  })
}

export default PhoneEdit
