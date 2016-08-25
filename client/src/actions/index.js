import axios from 'axios';
import events from './events';

export function add(value){
  return function (dispatch){
    axios.get('http://localhost:3000/api/helloworld'/*, {
      headers: { authorization: sessionStorage.getItem(AUTH_TOKEN) }
    }*/)
    .then(response => {
      dispatch({ type: events.ADD, payload: response.data.message });
    })
    .catch(exception => {
      console.log('exception: ', exception);
    });        
  }
}