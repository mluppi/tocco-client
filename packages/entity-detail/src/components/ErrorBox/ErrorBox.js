import React from 'react'
import {FormattedMessage} from 'react-intl'

import {form} from 'tocco-util'

const ErrorBox = props => {
  const {formErrors} = props
  return (
    <div className="alert alert-danger" role="alert">
      {form.formErrorsUtil.hasFieldErrors(formErrors) && <a onClick={props.showErrors}>
        <FormattedMessage id="client.entity-detail.invalidFieldsError"/>
      </a>}
      {form.formErrorsUtil.hasPathErrors(formErrors) && <div>
        <div><FormattedMessage id="client.entity-detail.invalidRelationErrors"/></div>
        <ul>
          {form.formErrorsUtil.getPathErrorsCompact(formErrors).map((message, idx) => {
            return <li key={idx}>{message}</li>
          })}
        </ul>
      </div>
      }
    </div>
  )
}

ErrorBox.propTypes = {
  formErrors: React.PropTypes.objectOf(
    React.PropTypes.objectOf(React.PropTypes.arrayOf(
      React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object])))
  ).isRequired,
  showErrors: React.PropTypes.func.isRequired
}

export default ErrorBox
