import PropTypes from 'prop-types'
import React from 'react'
import {intlShape} from 'react-intl'
import LoadMask from 'tocco-ui/src/LoadMask/LoadMask'
import {getColumnDefinition} from '../../util/api/forms'
import TableContainer from '../../containers/TableContainer'
import {actions, form} from 'tocco-util'

class ListView extends React.Component {
  componentWillMount = () => {
    this.props.initialize()
  }

  msg = (id, values = {}) => (this.props.intl.formatMessage({id}, values))

  render() {
    const props = this.props

    return (
      <div className="list-view">
        <LoadMask
          required={[props.formDefinition]}
          loadingText={this.msg('client.entity-list.loadingText')}
        >

          {
            this.props.formDefinition && this.props.formDefinition.children.map((child, idx) => {
            if (child.componentType === form.componentTypes.LAYOUT && child.layoutType === form.layoutTypes.TABLE) {
              return <TableContainer key={idx} columnDefinitions={getColumnDefinition(child)}/>
            } else if (actions.isAction(child.componentType)) {
              return <actions.Action
                key={`listAction${idx}`}
                definition={child}
                ids={props.selection}
                entity={props.entityName}
              />
            }
          })
          }
        </LoadMask>
      </div>
    )
  }
}

ListView.propTypes = {
  intl: intlShape.isRequired,
  initialize: PropTypes.func.isRequired,
  formDefinition: PropTypes.shape({
    children: PropTypes.array
  }),
  selection: PropTypes.arrayOf(PropTypes.string)
}

export default ListView
