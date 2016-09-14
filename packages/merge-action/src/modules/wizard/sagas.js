import {takeEvery} from 'redux-saga'
import {call, fork, select} from 'redux-saga/effects'
import sendDwrRequest from '../../utils/Dwr'
import createMergeResult from '../../utils/MergeActionResult'
import invokeExternalEvent from '../../utils/ExternalEvents'
import {SAVE_MERGE} from './actions'

export function sendDwr(mergeActionResult) {
  if (__DEV__) {
    console.log('dev mode. would send dwr', mergeActionResult, JSON.stringify(mergeActionResult))
    return new Promise((resolve) => {
      return resolve()
    })
  } else {
    return sendDwrRequest('nice2_entityoperation_MergeEntitiesService', 'merge', mergeActionResult)
  }
}

export function* save() {
  var state = yield select()
  var mergeActionResult = yield call(createMergeResult, state)
  yield call(sendDwr, mergeActionResult)
  yield call(invokeExternalEvent, 'close')
}

export default function* sagas() {
  yield [
    fork(takeEvery, SAVE_MERGE, save)
  ]
}
