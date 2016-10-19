import React from 'react'
import classNames from 'classnames'
import './styles.scss'

/**
 * Styled Button that triggers a function on click
 */
const Button = props => {
  return (
    <button
      name={props.name}
      onClick={props.onClick}
      className={classNames('btn', 'btn-primary', props.className, props.pending ? 'pending' : '')}
      disabled={props.disabled}
    >
      <i className={classNames('glyphicon', props.icon)}/> {props.label}
    </button>)
}

Button.propTypes = {
  /**
   * Will be displayed on button
   */
  label: React.PropTypes.string.isRequired,
  /**
   * Function that will be triggered on click event
   */
  onClick: React.PropTypes.func.isRequired,
  /**
   * Set the name of the button
   */
   name: React.PropTypes.string,
  /**
   * If true, the button will be disabled
   */
  disabled: React.PropTypes.bool,
 /**
  * If true, a spinner will be shown on the button
  */
  pending: React.PropTypes.bool,
  /**
   * Extend the button with any css classes separated by a space
   */
  className: React.PropTypes.string,
  /**
   * Add an icon to the button. Possible icons are defined here: http://glyphicons.bootstrapcheatsheets.com/
   */
  icon: React.PropTypes.string
}

export default Button
