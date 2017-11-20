import {combineReducers} from 'redux';
import ajaxCallsInProgress from './AjaxStatusReducer';

const rootReducer = combineReducers({
    ajaxCallsInProgress
});

export default rootReducer;