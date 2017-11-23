import * as types from './ActionTypes';
import toastr from 'toastr';

export function ping(){
   return { type: types.PING_CALL_TO_SERVER};
}

export function pingRequest(){

    let myHeaders = new Headers();
    
    let myInit = { method: 'GET',
                   headers: myHeaders,
                   mode: 'cors',
                   cache: 'default' };

   let request = new Request('https://iotping.herokuapp.com/ping', myInit);
    return function (dispatch) {
            return fetch(request)
            .then( function(response){
                if(response.ok) {
                    dispatch(ping());
                }
               
            })
            .catch(function(error) {
                toastr.error('There has been a problem with your fetch operation: ' + error.message);
              });
    };
}
