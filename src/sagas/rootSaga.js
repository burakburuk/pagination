import {fork, all} from 'redux-saga/effects'
import {
    watchGeoAutoCompleteRequest, watchListPropertiesRequest,
    watchChangeTableActionsRequest
} from './filterSaga';

// initialize all the watchers parallel
export default function* rootSaga() {
    yield all([
        fork(watchGeoAutoCompleteRequest),
        fork(watchListPropertiesRequest),
        fork(watchChangeTableActionsRequest),
    ])
}