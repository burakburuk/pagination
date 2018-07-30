import {fork, all} from 'redux-saga/effects'

// initialize all the watchers parallel
export default function* rootSaga() {
    yield all([])
}