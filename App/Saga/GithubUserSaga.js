import { call, put } from 'redux-saga/effects'
import UserActions from '../Redux/Reducer/GithubUserRedux'
import { githubuser } from '../Service/Api'

export function* getUser(action) {
  const { data } = action
  try {
    const json = yield fetch(githubuser)
      .then(response => response.json());
    console.log(json)
    if (json) {
      yield put(UserActions.successUser(json))
    } else {
      yield put(UserActions.failureUser())
    }
  }
  catch (error) {
    console.warn(error)
    yield put(UserActions.failureUser())
  }
}