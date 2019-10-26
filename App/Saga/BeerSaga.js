import { call, put } from 'redux-saga/effects'
import BeerActions from '../Redux/Reducer/BeerRedux'
import { beers } from '../Service/Api'

export function* getBeer(action) {
  const { data } = action
  try {
    const json = yield fetch(beers)
      .then(response => response.json());
    console.log(json)
    if (json) {
      yield put(BeerActions.successBeer(json))
    } else {
      yield put(BeerActions.failureBeer())
    }
  }
  catch (error) {
    console.warn(error)
    yield put(BeerActions.failureBeer())
  }
}