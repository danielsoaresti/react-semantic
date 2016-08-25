import { combineReducers } from 'redux';

import firstReducer from './first';

const rootReducer = combineReducers({
  first: firstReducer
});

export default rootReducer;