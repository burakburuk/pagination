import * as actionTypes from "../constants";

export const requestGeoAutoComplete = () => ({
    type: actionTypes.HANDLE_GEO_AUTO_COMPLETE_REQUEST
});

export const requestListProperties = (filter) => ({
    type: actionTypes.HANDLE_LIST_PROPERTIES_REQUEST,
    filter
});