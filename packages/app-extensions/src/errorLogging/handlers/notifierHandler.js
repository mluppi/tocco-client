import {put, call} from 'redux-saga/effects'

import notifier from '../../notifier'

export default function* notifierHandler(title, description, error) {
  const action = yield call(notifier.info, 'error', title, description, null, 0)
  yield put(action)
}
