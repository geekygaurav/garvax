import { takeLatest, all } from 'redux-saga/effects'

// import redux
import { BeerTypes } from '../Redux/Reducer/BeerRedux'

// import saga
import { getBeer } from './BeerSaga'

// import api
import api from '../Service/Api';

export default function * root () {
    yield all([
        takeLatest(BeerTypes.REQUEST_BEER , getBeer),
    ])
}
