import React, { Component } from "react";
import d3 from 'd3';
import Axis from './matrix-axis';
require('../assets/stylesheets/scatter-Matrix.css');

class PlotScatter extends Component{
  constructor(props) {
    super(props);
    console.log(props);

    // this.state = {dataX: props.dataX, dataY: props.dataY, label_x:props.label_x, label_y:props.label_y}
  }

  render(){
    const {height, width, margin, dataX, dataY, label_x, label_y, padding} = this.props;
    const xMax = (dataX)  => d3.max(dataX, (d) => d);
    const xMin = (dataX)  => d3.min(dataX, (d) => d);
    const yMax = (dataY)  => d3.max(dataY, (d) => d);
    const yMin = (dataY)  => d3.min(dataY, (d) => d);
    const xScale = d3.scale.linear().domain([xMin(dataX), xMax(dataX)]).range([padding, width - padding*2]);
    const yScale = d3.scale.linear().domain([yMin(dataY), yMax(dataY)]).range([height - padding, padding]);
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

    return(
      <div>
        <h4>Scatter-Plot</h4>
        <svg ref='svg' className='scatter-Matrix' width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}>
          {dataX.map((d,i) => {
            // console.log(xScale(d));
            // console.log(yScale(dataY[i]));
            return(
              <circle key={i} r={5} cx={xScale(d)} cy={yScale(dataY[i])} />
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
}

export default PlotScatter;
