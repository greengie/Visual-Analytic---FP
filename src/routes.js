//====================
// Import React and the dependencies we need to make react router work
//====================
import React from 'react';
import { Route, IndexRoute } from 'react-router';

//====================
// Import the different components that will represent the different pages
// of our website.
//====================
import App from './components/app';
import Chart from './components/chart';
import Login from './components/login';
import Main from './components/main';
import Upload from './components/upload';
import Regression from './components/regression';

//====================
// Define our routes
//====================
export default (
  <Route path='/' component={App}>
    <IndexRoute component={Login} />
    <Route path='main' component={Main}>
      <Route path='chart' component={Chart} />
      <Route path='upload/:userid' component={Upload} />
      <Route path='regression/:userid' component={Regression} />
    </Route>
  </Route>
);
