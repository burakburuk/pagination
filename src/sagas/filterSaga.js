import {takeEvery, call, put, select} from "redux-saga/effects";
import * as actionTypes from "../constants";
import * as api from '../services';
import {
    requestListPropertiesComplete, updatePropertiesTable,
    requestGeoAutoCompleteDone, requestListPropertiesStart,
    onLocationChange
} from '../actions';
import objectAssign from 'object-assign';

/******************************************************************************/
/******************************* WATCHERS *************************************/

/******************************************************************************/

export function* watchGeoAutoCompleteRequest() {
    yield takeEvery(actionTypes.HANDLE_GEO_AUTO_COMPLETE_REQUEST, requestGeoAutoComplete);
}

export function* watchListPropertiesRequest() {
    yield takeEvery(actionTypes.HANDLE_LIST_PROPERTIES_REQUEST, requestListProperties);
}

export function* watchChangeTableActionsRequest() {
    yield takeEvery(actionTypes.HANDLE_CHANGE_TABLE_ACTIONS, requestChangePage);
}

/******************************************************************************/
/******************************* SAGAS ****************************************/

/******************************************************************************/

function* requestGeoAutoComplete(action) {
    try {
        if (action.searchTerm === "") {
            return yield put(requestGeoAutoCompleteDone([]));
        }

        const params = {
            search_type: 'listings',
            search_term: action.searchTerm
        };
        const {response, error} = yield call(() => api.requestGeoAutoComplete(params));
        if (error) {
            throw new Error(error);
        } else {
            if (response.suggestions.length > 0) {
                yield put(onLocationChange(action.searchTerm));
            }
            const result = response.suggestions.map(item => {
                return {
                    label: item.value ? item.value._text : "",
                    value: item.identifier ? item.identifier._text : ""
                }
            });

            yield put(requestGeoAutoCompleteDone(result));
        }
    }
    catch
        (error) {
        console.warn(error.message);
    }
}

function* requestListProperties(action) {
    try {
        const state = yield select();
        const innerFilter = {
            order: 'ascending',
            page_number: state.resultTable.page,
            page_size: state.resultTable.rowsPerPage
        };
        const filters = objectAssign({}, innerFilter, action.filter);
        const {response, error} = yield call(() => api.requestProperties(filters));
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

function* requestChangePage(action) {
    const state = yield select();
    //filterBoxState.location
    const requestParams = {
        'area': state.filterBox.location,
        'min_price': state.filterBox.minPrice,
        'minimum_beds': state.filterBox.minBeds
    };
    yield call(() => requestListProperties(requestListPropertiesStart(requestParams)));
}
