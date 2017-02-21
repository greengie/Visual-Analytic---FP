import React from 'react';
import d3 from 'd3';
import Axis from './axis';
require('../assets/stylesheets/Linechart.css');

export default class LineChart extends React.Component{
  constructor(props) {
    super(props);
  }

  getY(data, year){
    for(var i=0;i<data.length; i++){
      if(data[i]['y'] == year){
        var rY = data[i]['x'];
        return rY;
        break;
      }
    }
  }

  render(){
    const {data, width, height, padding, yearMin, yearMax, year} = this.props;
    const rY = this.getY(data,year);
    const line = d3.svg.line()
      .x((d) => xScale(d['y']))
      .y((d) => yScale(d['x']));
    const xScale = d3.scale.linear().domain([yearMin, yearMax]).range([padding, width - padding*2]);

      // return a function that "scales" Y coordinates from the data to fit the chart.
    const yScale = d3.scale.linear().domain([-1,1]).range([height - padding, padding]);

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

    const highlightMark = <circle cx={xScale(year)} cy={yScale(rY)} r={4} className='highlight-mark' />;

    return(
      <div>
        <svg ref='svg' width={width} height={height} className='chart linechart'>
          <path d={line(data)} />
          {highlightMark}
          <g className="xy-axis">
            <Axis type={2} {...xSettings}/>
            <Axis type={2} {...ySettings}/>
          </g>
        </svg>
      </div>
    );
  }
}
