import React from 'react';
import d3 from 'd3';
import Circles from './new-circle';
import ChartActions from '../actions/ChartActions';
import XYAxis from './x-y-axis';

require('../assets/stylesheets/Scatterplot.css');

// return the largest X coordinate from the data set
const xMax = (data) => d3.max(data, (d) => d[0]);

// return the largest Y coordinate from the data set
const yMax = (data) => d3.max(data, (d) => d[1]);

//return a function that "scales" X coordinates from the data to fit the chart.
const xScale = (props) => {
  return d3.scale.linear()
    .domain([400, xMax(props.data)])
    .range([props.padding, props.width - props.padding*2]);
};

// return a function that "scales" Y coordinates from the data to fit the chart.
const yScale = (props) => {
  return d3.scale.linear()
    .domain([400, yMax(props.data)])
    .range([props.height - props.padding, props.padding]);
};

export default (props) => {
  //console.log(props);
  const scales = { xScale: xScale(props), yScale: yScale(props) };
  return <svg width={props.width} height={props.height} >
  <Circles {...props} {...scales} />
  <XYAxis {...props} {...scales} />
  </svg>
}
