import React from 'react';  
import { Route, IndexRoute } from 'react-router';  

import App from './components/app';
import Login from './components/login';
import Navigation from './components/navigation';
import Dashboard from './components/dashboard';  


export default (  
  <Route path='/' component={App}>
    <IndexRoute component={Navigation} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/login' component={Login} />
    <Route path="*" component={Navigation} />
  </Route>
);