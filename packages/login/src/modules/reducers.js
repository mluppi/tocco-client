import {intlReducer} from 'react-intl-redux'
import {combineReducers} from 'redux'
import passwordUpdateReducers, {sagas as passwordUpdateSagas} from './passwordUpdate/reducers'
import login from './login'
import mainSagas from './sagas'

export default {
  intl: intlReducer,
  login,
  passwordUpdate: combineReducers(passwordUpdateReducers)
}

export const sagas = [
  ...passwordUpdateSagas,
  mainSagas
]
