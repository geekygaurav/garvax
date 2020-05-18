import { call, put } from 'redux-saga/effects'
import GuruActions from '../Redux/Reducer/GuruRedux'
import { advise } from '../Service/Api'

export function* getGuru(action) {
  const { data } = action
  try {
    const json = yield fetch(advise)
      .then(response => response.json());
    if (json) {
      yield put(GuruActions.successGuru(json))
    } else {
      yield put(GuruActions.failureGuru())
    }
  }
  catch (error) {
    console.warn(error)
    yield put(GuruActions.failureGuru())
  }
}