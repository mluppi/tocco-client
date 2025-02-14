import {combineReducers} from 'redux'

import create, {sagas as createSagas} from './create'
import list, {sagas as listSagas} from './list'
import move, {sagas as moveSagas} from './move'
import path, {sagas as pathSagas} from './path'
import routing, {sagas as routingSagas} from './routing'

export default {
  docs: combineReducers({path, create, list, move, routing})
}

export const sagas = [pathSagas, createSagas, listSagas, moveSagas, routingSagas]
