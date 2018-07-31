import {takeEvery, call, put} from "redux-saga/effects";
import * as actionTypes from "../constants";
import * as api from '../services';
import {requestListPropertiesComplete, updatePropertiesTable} from '../actions';

/******************************************************************************/
/******************************* WATCHERS *************************************/

/******************************************************************************/

export function* watchGeoAutoCompleteRequest() {
    yield takeEvery(actionTypes.HANDLE_GEO_AUTO_COMPLETE_REQUEST, requestGeoAutoComplete);
}

export function* watchListPropertiesRequest() {
    yield takeEvery(actionTypes.HANDLE_LIST_PROPERTIES_REQUEST, requestListProperties);
}

/******************************************************************************/
/******************************* SAGAS ****************************************/

/******************************************************************************/

function* requestGeoAutoComplete(action) {
    try {
        const {response, error} = yield call(() => api.requestGeoAutoComplete());
        if (error) {
            throw new Error(error);
        } else {
            console.dir(response)
        }
    }
    catch
        (error) {
        console.warn(error.message);
    }
}

function* requestListProperties(action) {
    try {
        const {response, error} = yield call(() => api.requestProperties(action.filter));
        if (error) {
            throw new Error(error);
        } else {
            yield put(requestListPropertiesComplete());
            yield put(updatePropertiesTable(response));
        }
    }
    catch
        (error) {
        console.warn(error.message);
    }
}