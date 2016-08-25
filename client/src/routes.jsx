import React from 'react';  
import { Route, IndexRoute } from 'react-router';  

import App from './components/app';
import Login from './components/login';
import Create from './components/Create';
import Dashboard from './components/dashboard';  


export default (  
  <Route path='/' component={App}>
    <IndexRoute component={Dashboard} />
    <Route path='create' component={Create} />
    <Route path='login' component={Login} />
    <Route path="*" component={Dashboard} />
  </Route>
);