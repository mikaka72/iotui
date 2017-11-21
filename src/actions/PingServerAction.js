import * as types from './ActionTypes';
//import pingApi from '../api/ping-api';

export function ping(){
   return { type: types.PING_CALL_TO_SERVER};
   /* return function(dispatch) {
       return pingApi.pingApi();
    };*/
}

export function pingRequest(){
    return function (dispatch) {
        dispatch(ping());
            return fetch(`https://iotping.herokuapp.com/ping`);
    };
}
