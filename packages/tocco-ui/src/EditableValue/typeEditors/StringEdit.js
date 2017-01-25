import React from 'react'

const StringEdit = props => {
  const value = props.value || ''

  const handleChange = e => {
    if (props.onChange) {
      props.onChange(e.target.value)
    }
  }

  return (
    <input
      type="text"
      className="form-control"
      name={props.name}
      value={value}
      onChange={handleChange}
      id={props.id}
      {...props.events}
      readOnly={props.readOnly}
    />
  )
}

StringEdit.propTypes = {
  onChange: React.PropTypes.func,
  value: React.PropTypes.node,
  name: React.PropTypes.string,
  id: React.PropTypes.string,
  events: React.PropTypes.objectOf(React.PropTypes.func),
  readOnly: React.PropTypes.bool
}

export default StringEdit
