import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

import { Router, browserHistory } from 'react-router';  
import routes from './routes.jsx';

import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDom.render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>, 
  document.querySelector('#app'));