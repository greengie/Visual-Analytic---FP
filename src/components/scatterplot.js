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

  getNewData(dataX, dataY, dataR) {
    const data = dataR;
    for(var i=0;i<dataR.length;i++){
      if(data[i].value == 0){
        data[i].value = 1;
      }
      for(var j=0;j<dataX.length;j++){
        if(dataR[i].country_code === dataX[j].country_code){
          data[i]['data_value_x'] = dataX[j].data_value;
          for(var k=0;k<dataY.length;k++){
            if(dataR[i].country_code === dataY[k].country_code){
              data[i]['data_value_y'] = dataY[k].data_value;
              break;
            }
            else{
              data[i]['data_value_y'] = null;
            }
          }
          break;
        }
        else{
          data[i]['data_value_x'] = null;
          data[i]['data_value_y'] = null;
        }
      }
    }
    return data;
  }

  render(){
    const {dataX, dataY, dataR, width, height, padding, xMax, yMax, pad} = this.props;
    const data = this.getNewData(dataX, dataY, dataR);
    // console.log(data);
    //return a function that "scales" X coordinates from the data to fit the chart.
    const xScale = d3.scale.linear().domain([0, xMax]).range([padding, width - padding*2]);

    // return a function that "scales" Y coordinates from the data to fit the chart.
    const yScale = d3.scale.linear().domain([0, yMax]).range([height - padding, padding]);

    // const rScale = d3.scale.log().base(Math.E).domain([Math.exp(0), Math.exp(9)]).range([0,11]);
    const rScale = d3.scale.sqrt().domain([1, 45000000]).range([3,20]);

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
      <g ref='scatter_plot' id='scatter_plot' transform={"translate("+pad.left+","+pad.top+")"}>
        <rect ref='background' width={width} height={height} fill={"#c8c8c8"}></rect>
        <text id='scattertitle' x={width/2} y={-pad.top/2} textAnchor={'middle'} dominant-baseline={"middle"}>Scatter-Plot</text>
        {data.map((d, i) => {
          return (
            <Dot key={d.country_code} x={xScale(d.data_value_x)} y={yScale(d.data_value_y)} r={(rScale(d.value))*1.8} color={d.color} name={d.country_name} real_x={d.data_value_x} real_y={d.data_value_y} real_r={d.value}/>
          );
        })}
        <g className="xy-axis">
          <Axis type={1} {...xSettings}/>
          <Axis type={1} {...ySettings}/>
        </g>
      </g>
    );
  }
}
