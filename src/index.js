import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import App from './components/app';
import routes from './routes';
import style from 'bootstrap/dist/css/bootstrap.css';

ReactDom.render(
  <Router
    history={browserHistory}
    routes={routes}
    />, document.querySelector('#app')
  );
