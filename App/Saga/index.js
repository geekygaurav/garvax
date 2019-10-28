import { takeLatest, all } from 'redux-saga/effects'

// import redux
import { BeerTypes } from '../Redux/Reducer/BeerRedux'
import { UserTypes } from '../Redux/Reducer/GithubUserRedux'
import { GuruTypes } from '../Redux/Reducer/GuruRedux'

// import saga
import { getBeer } from './BeerSaga'
import { getUser } from './GithubUserSaga'
import { getGuru } from './GuruSaga'


export default function * root () {
    yield all([
        takeLatest(BeerTypes.REQUEST_BEER , getBeer),
        takeLatest(UserTypes.REQUEST_USER , getUser),
        takeLatest(GuruTypes.REQUEST_GURU , getGuru),
    ])
}
