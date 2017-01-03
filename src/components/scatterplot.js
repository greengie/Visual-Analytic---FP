import React from 'react';
import d3 from 'd3';
import ChartActions from '../actions/ChartActions';
// import XYAxis from './x-y-axis';
import Axis from './axis';

require('../assets/stylesheets/Scatterplot.css');

const ScatterPlot = React.createClass({
  propTypes: {
    dataX: React.PropTypes.array.isRequired,
    dataY: React.PropTypes.array.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    padding: React.PropTypes.number.isRequired,
    highlight: React.PropTypes.object
  },

  _handleHover(d) {
    // console.log(d);
    // send an action indicating which data point to highlight
    ChartActions.highlight(d);
  },

  getDataXY(dataX, dataY) {
    const dataXY = dataX;
    for(var i = 0; i < dataX.length; i++){
      const c_x_id = dataX[i].country_code;
      for(var j = 0;j < dataY.length; j++){
        const c_y_id = dataY[j].country_code;
        if(c_x_id === c_y_id){
          dataXY[i]['popdensity'] = dataY[j].popdensity;
          break;
        }
      }
    }
    return dataXY;
  },

  render() {
    // console.log(this.props);
    const highlight = this.props.highlight;
    const width = this.props.width;
    const height = this.props.height;
    const padding = this.props.padding;
    // const {data, width, height, padding} = this.props;
    const data = this.getDataXY(this.props.dataX, this.props.dataY);

    // set up scales for radius and colour based on the min/max in the data set
    // return the largest X coordinate from the data set
    const xMax = (data) => d3.max(data, (d) => d.popdensity);

    // return the largest Y coordinate from the data set
    const yMax = (data) => d3.max(data, (d) => d.gdp);

    //return a function that "scales" X coordinates from the data to fit the chart.
    const xScale = d3.scale.linear().domain([0, xMax(data)]).range([padding, width - padding*2]);

    // return a function that "scales" Y coordinates from the data to fit the chart.
    const yScale = d3.scale.linear().domain([0, yMax(data)]).range([height - padding, padding]);

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
            // console.log(d);
            const className = highlight === d.country_name ? 'highlight' : '';
            return (
              <circle key={i} className={className} r={7} cx={xScale(d.popdensity)} cy={yScale(d.gdp)}
                  onMouseOver={this._handleHover.bind(this, d.country_name)}
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
