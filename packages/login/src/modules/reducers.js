import {intlReducer} from 'react-intl-redux'
import {combineReducers} from 'redux'
import passwordUpdateReducers, {sagas as passwordUpdateSagas} from './passwordUpdate/reducers'
import login from './login'
import loginForm from './loginForm'
import mainSagas from './sagas'
import {sagas as passwordRequestSagas} from './passwordRequest'

export default {
  intl: intlReducer,
  login,
  loginForm,
  passwordUpdate: combineReducers(passwordUpdateReducers)
}

export const sagas = [
  mainSagas,
  passwordRequestSagas,
  ...passwordUpdateSagas
]
