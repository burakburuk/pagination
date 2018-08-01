import {takeEvery, call, put} from "redux-saga/effects";
import * as actionTypes from "../constants";
import * as api from '../services';
import {
    requestListPropertiesComplete, updatePropertiesTable,
    requestGeoAutoCompleteDone
} from '../actions';

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
        const {response, error} = yield call(() => api.requestGeoAutoComplete(action.filter));
        if (error) {
            throw new Error(error);
        } else {
            yield put(requestGeoAutoCompleteDone(response));
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
            const listing = response.listing.map(item => {
                return {
                    'listingId': item.listing_id._text,
                    'price': item.price._text,
                    'bedrooms': item.num_bedrooms._text,
                    'propertyType': item.property_type._text,
                    'agentName': item.agent_name._text,
                }
            });
            const result = {
                areaName: response.area_name._text,
                resultCount: parseInt(response.result_count._text),
                data: listing
            };
            yield put(updatePropertiesTable(result));
        }
    }
    catch (error) {
        console.warn(error.message);
    } finally {
        yield put(requestListPropertiesComplete());
    }
}