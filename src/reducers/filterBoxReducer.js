import {updateObject, createReducer} from './reducerUtilities';

const onFilterFormFieldChange = (filterState, action) => {
    const {field} = action;
    return {
        ...filterState,
        ...field
    };
};

const filterFormFieldsError = (filterState, action) => {
    const {errors} = action;
    return {
        ...filterState,
        ...errors
    };
};

const handleListPropertiesRequest = (filterState, action) => {
    return {
        ...filterState,
        disabled: action.disabled
    };
};

const requestListPropertiesComplete = (filterState, action) => {
    return {
        ...filterState,
        disabled: action.disabled
    };
};

// Slice reducer
const filterBoxReducer = createReducer([], {
    'ON_FILTER_FORM_FIELDS_CHANGE': onFilterFormFieldChange,
    'FILTER_FORM_FIELDS_ERROR': filterFormFieldsError,
    'HANDLE_LIST_PROPERTIES_REQUEST': handleListPropertiesRequest,
    'LIST_PROPERTIES_REQUEST_COMPLETE': requestListPropertiesComplete,
});

export default filterBoxReducer;