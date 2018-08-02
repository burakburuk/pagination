import {updateObject, createReducer} from './reducerUtilities';

const updatePropertiesTable = (filterState, action) => {
    return {
        ...filterState,
        ...action
    };
};

// Slice reducer
const resultTableReducer = createReducer([], {
    'UPDATE_PROPERTIES_TABLE': updatePropertiesTable,
    'HANDLE_CHANGE_TABLE_ACTIONS': updatePropertiesTable,
});

export default resultTableReducer;