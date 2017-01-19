import {connect} from 'react-redux'
import {injectIntl} from 'react-intl'
import {
  hasSubmitSucceeded,
  hasSubmitFailed
} from 'redux-form'

import {closeEntityDetail} from '../modules/entityBrowser/actions'
import {submitForm} from '../modules/detailView/actions'

import DetailView from '../components/DetailView'

const mapActionCreators = {
  closeEntityDetail,
  submitForm
}

const mapStateToProps = (state, props) => ({
  formDefinition: state.detailView.formDefinition,
  entity: state.detailView.entity,
  formSubmitSucceeded: hasSubmitSucceeded('detailForm')(state),
  formSubmitFailed: hasSubmitFailed('detailForm')(state)
})

export default connect(mapStateToProps, mapActionCreators)(injectIntl(DetailView))

