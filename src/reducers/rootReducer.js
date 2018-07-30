import {combineReducers} from 'redux';
import {i18nState} from "redux-i18n";
import filterBoxReducer from './filterBoxReducer';
import resultTableReducer from './resultTableReducer';

const rootReducer = combineReducers({
    filterBox: filterBoxReducer,
    resultTable: resultTableReducer,
    i18nState
});

export default rootReducer;
