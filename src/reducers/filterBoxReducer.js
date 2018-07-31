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

// Slice reducer
const filterBoxReducer = createReducer([], {
    'ON_FILTER_FORM_FIELDS_CHANGE': onFilterFormFieldChange,
    'FILTER_FORM_FIELDS_ERROR': filterFormFieldsError,
});

export default filterBoxReducer;