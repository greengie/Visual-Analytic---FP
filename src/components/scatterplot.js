import React from 'react';
import d3 from 'd3';
import ChartActions from '../actions/ChartActions';
import Axis from './axis';
import Dot from './dot';
require('../assets/stylesheets/Scatterplot.css');

export default class ScatterPlot extends React.Component{
  constructor(props) {
    super(props);
  }

  getDataXY(dataX, dataY) {
    const dataXY = dataX;
    for(var i = 0; i < dataX.length; i++){
      const c_x_id = dataX[i].country_code;
      for(var j = 0;j < dataY.length; j++){
        const c_y_id = dataY[j].country_code;
        if(c_x_id === c_y_id){
          dataXY[i]['data_value_y'] = dataY[j].data_value;
          break;
        }
        else{
          dataXY[i]['data_value_y'] = null;
        }
      }
    }
    return dataXY;
  }

  render(){
    const {dataX, dataY, width, height, padding, xMax, yMax} = this.props;
    const data = this.getDataXY(dataX, dataY);
    //return a function that "scales" X coordinates from the data to fit the chart.
    const xScale = d3.scale.linear().domain([0, xMax]).range([padding, width - padding*2]);

    // return a function that "scales" Y coordinates from the data to fit the chart.
    const yScale = d3.scale.linear().domain([0, yMax]).range([height - padding, padding]);

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
            return (
              <Dot key={d.country_code} x={xScale(d.data_value)} y={yScale(d.data_value_y)} r={10} color={d.color} name={d.country_name} real_x={d.data_value} real_y={d.data_value_y}/>
            );
          })}
          <g className="xy-axis">
            <Axis type={1} {...xSettings}/>
            <Axis type={1} {...ySettings}/>
          </g>
        </svg>
      </div>
    );
  }
}
