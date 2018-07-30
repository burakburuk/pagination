import {takeEvery, call, put} from "redux-saga/effects";
import * as actionTypes from "../constants";
import * as api from '../services';

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
        const {response, error} = yield call(() => api.requestGeoAutocomplete());
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
        const {response, error} = yield call(() => api.requestProperties());
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