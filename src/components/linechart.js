import React from 'react';
import d3 from 'd3';
import Axis from './axis';
const d3Ease = require("d3-ease");
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

  flash(r, pos_x, pos_y) {
    let tooltip = d3.select('#chart')
         .append('div')
         .attr('class', 'tooltip');
    //
    // var  formatNumber = d3.format(".5s");
    console.log(r);
    console.log(pos_x);
    console.log(pos_y);
    // let node = d3.select(this.refs.circle);
    let label = d3.select('.tooltip');
    // this.setState({hoverOn: true});

    // node.transition()
    //     .attr('r', this.props.r*1.5)
    //     .duration(1000)
    //     .ease(d3Ease.easeCubicOut)

    // tooltip.transition()
    //   .duration(1000)
    //   .style("opacity", .9);
    // tooltip.html("correlation : "+r+<br/>)
    //   .style("left", (pos_x) + "px")
    //   .style("top", (pos_y) + "px");
  }


  render(){
    const {data, width, width_1, height, padding, yearMin, yearMax, year, path, pad, xAxis} = this.props;
    const rY = this.getY(data,year);
    // const rYA = this.getY(dataA, year);
    // const rYB = this.getY(dataB, year);
    const line = d3.svg.line()
      .x((d) => xScale(d['y']))
      .y((d) => yScale(d['x']));
    const xScale = d3.scale.linear().domain([yearMin, yearMax]).range([padding, width-padding]);

    // return a function that "scales" Y coordinates from the data to fit the chart.
    const yScale = d3.scale.linear().domain([-1,1]).range([height - padding, padding]);

    const xSettings = {
      translate: 'translate(0,' + (height - padding) + ')',
      scale: xScale,
      orient: 'bottom'
    };

    const ySettings = {
      translate: 'translate(' + (padding) + ', 0)',
      scale: yScale,
      orient: 'left'
    };

    const highlightMark1 = <circle ref='circle' cx={xScale(year)} cy={yScale(rY)} r={4} className='highlight-mark-1' onMouseOver={this.flash.bind(this, rY, xScale(year), yScale(rY))} />;

    let showXAxis
    if(xAxis){
      showXAxis = (
        <Axis type={3} {...xSettings}/>
      );
    }

    return(
      <g class='lineChart'>
        <path className={path} d={line(data)} stroke={'blue'} />
        <g className="xy-axis">
          {showXAxis}
          <Axis type={2} {...ySettings}/>
        </g>
        {highlightMark1}
      </g>
    );
  }
}
