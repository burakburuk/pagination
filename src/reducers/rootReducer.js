import {combineReducers} from 'redux';
import {i18nState} from "redux-i18n";
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
    filter: filterReducer,
    i18nState
});

export default rootReducer;
