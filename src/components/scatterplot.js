import React from 'react';
import d3 from 'd3';
import ChartActions from '../actions/ChartActions';
// import XYAxis from './x-y-axis';
import Axis from './axis';

require('../assets/stylesheets/Scatterplot.css');

const ScatterPlot = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    padding: React.PropTypes.number.isRequired,
    highlight: React.PropTypes.object
  },

  _handleHover(d) {
    //console.log(d);
    // send an action indicating which data point to highlight
    ChartActions.highlight(d);
  },

  render() {
    console.log(this.props);
    const {data, highlight, width, height, padding} = this.props;

    // set up scales for radius and colour based on the min/max in the data set
    // return the largest X coordinate from the data set
    const xMax = (data) => d3.max(data, (d) => d[0]);

    // return the largest Y coordinate from the data set
    const yMax = (data) => d3.max(data, (d) => d[1]);

    //return a function that "scales" X coordinates from the data to fit the chart.
    const xScale = d3.scale.linear().domain([400, xMax(data)]).range([padding, width - padding*2]);

    // return a function that "scales" Y coordinates from the data to fit the chart.
    const yScale = d3.scale.linear().domain([400, yMax(data)]).range([height - padding, padding]);

    const xSettings = {
      translate: 'translate(0,' + (height - padding) + ')',
      scale: xScale,
      orient: 'bottom'
    };

    const ySettings = {
      translate: 'translate(' + padding + ', 0)',
      scale: yScale,
      orient: 'left'
    };

    return (
      <div>
        <svg ref='svg' width={width} height={height} className='chart scatter-plot'>
          {data.map((d, i) => {
            //console.log(hoverIndex);
            const className = highlight === d ? 'highlight' : '';
            return (
              <circle key={i} className={className} r={10} cx={xScale(d[0])} cy={yScale(d[1])}
                  onMouseOver={this._handleHover.bind(this, d)}
                  onMouseOut={this._handleHover.bind(this, null)}
                />
            );
          })}
          <g className="xy-axis">
            <Axis {...xSettings}/>
            <Axis {...ySettings}/>
          </g>
        </svg>
      </div>
    );
  }
});

export default ScatterPlot;
