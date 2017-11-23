import * as types from '../actions/ActionTypes';
import initialState from './InitialState';

export default function PingReducer(state = initialState.pingsExecuted, action){
  
    switch(action.type){
        case types.PING_CALL_TO_SERVER:
        return state + 1;
        default:
        return state;
    }

}