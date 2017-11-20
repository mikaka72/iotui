import axios from 'axios';


export function pingServer(){

    return axios.get('https://iotping.herokuapp.com/ping');

}