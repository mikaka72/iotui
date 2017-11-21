import {combineReducers} from 'redux';
import ajaxCallsInProgress from './AjaxStatusReducer';
import pingsExecuted from './PingReducer';

const rootReducer = combineReducers({
    ajaxCallsInProgress,
    pingsExecuted

});

export default rootReducer;