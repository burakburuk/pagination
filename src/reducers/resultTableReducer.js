import {updateObject, createReducer} from './reducerUtilities';

const listPropertiesRequestComplete = (filterState, action) => {
    return {
        ...filterState,
        ...action
    };
};

// Slice reducer
const resultTableReducer = createReducer([], {
    'LIST_PROPERTIES_REQUEST_COMPLETE': listPropertiesRequestComplete,
});

export default resultTableReducer;