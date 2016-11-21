import React from 'react';
import ReactDom from 'react-dom';
import Chart from './components/chart.js';

import './assets/stylesheets/app.css';

const mountingPoint = document.createElement('div');
mountingPoint.className = 'react-app';
document.body.appendChild(mountingPoint);
ReactDom.render(<Chart/>, mountingPoint);
