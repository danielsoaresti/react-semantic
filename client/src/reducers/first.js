import events from '../actions/events';

export default function(state = {}, action){
  switch(action.type){
    case events.ADD:
      return { ...state, item: action.payload }
  }

  return state;
}