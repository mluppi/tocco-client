import {connect} from 'react-redux'
import {injectIntl} from 'react-intl'

import {doLogout, doSessionCheck} from '../modules/session/actions'
import Admin from '../components/Admin'

const mapActionCreators = {
  doLogout,
  doSessionCheck
}

const mapStateToProps = (state, props) => ({
  loggedIn: state.session.loggedIn
})

export default connect(mapStateToProps, mapActionCreators)(injectIntl(Admin))
