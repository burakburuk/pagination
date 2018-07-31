import {updateObject, createReducer} from './reducerUtilities';

const onFilterFormFieldChange = (filterState, action) => {
    const {field} = action;
    return {
        ...filterState,
        ...field
    };
};

// Slice reducer
const filterBoxReducer = createReducer([], {
    'ON_FILTER_FORM_FIELDS_CHANGE': onFilterFormFieldChange
});

export default filterBoxReducer;