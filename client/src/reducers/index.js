import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import firstReducer from './first';

const rootReducer = combineReducers({
  first: firstReducer,
  form: formReducer
});

export default rootReducer;