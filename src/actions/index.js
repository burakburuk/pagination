import * as actionTypes from "../constants";

export const requestGeoAutoComplete = () => ({
    type: actionTypes.HANDLE_GEO_AUTO_COMPLETE_REQUEST
});

export const requestListProperties = (filter) => ({
    type: actionTypes.HANDLE_LIST_PROPERTIES_REQUEST,
    filter, disabled: true
});

export const requestListPropertiesComplete = () => ({
    type: actionTypes.LIST_PROPERTIES_REQUEST_COMPLETE,
    disabled: false
});

export const updatePropertiesTable = (data) => ({
    type: actionTypes.UPDATE_PROPERTIES_TABLE,
    data
});

export const onFilterFormFieldsChange = (field) => ({
    type: actionTypes.ON_FILTER_FORM_FIELDS_CHANGE,
    field
});

export const filterFieldsError = (errors) => ({
    type: actionTypes.FILTER_FORM_FIELDS_ERROR,
    errors
});