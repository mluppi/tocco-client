import PropTypes from 'prop-types'
import React from 'react'
import SearchFormContainer from '../../containers/SearchFormContainer'
import ListViewContainer from '../../containers/ListViewContainer'

class EntityList extends React.Component {
  componentWillMount() {
    this.props.initialize()
  }

  render() {
    return (
      <div className="entity-list">
        {this.props.showSearchForm && <SearchFormContainer/>}
        <ListViewContainer/>
      </div>
    )
  }
}

EntityList.propTypes = {
  initialize: PropTypes.func.isRequired,
  showSearchForm: PropTypes.bool
}

export default EntityList
