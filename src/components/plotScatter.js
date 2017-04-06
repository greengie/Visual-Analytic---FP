import React, { Component } from "react";
import d3 from 'd3';
import Axis from './matrix-axis';
require('../assets/stylesheets/scatter-Matrix.css');

class PlotScatter extends Component{
  constructor(props) {
    super(props);
    // console.log(props);

    // this.state = {dataX: props.dataX, dataY: props.dataY, label_x:props.label_x, label_y:props.label_y}
  }

  initData(dataX, dataY){
    var data = [];
    for(var i=0;i<dataX.length;i++){
      data.push([dataX[i], dataY[i]]);
    }
    return data;
  }

  render(){
    const {height, width, pad, dataX, dataY, dataY_predict, label_x, label_y, padding} = this.props;
    const xMax = (dataX)  => d3.max(dataX, (d) => d);
    const xMin = (dataX)  => d3.min(dataX, (d) => d);
    const yMax = (dataY)  => d3.max(dataY, (d) => d);
    const y_hat_Max = (dataY_predict)  => d3.max(dataY_predict, (d) => d);
    const y_hat_Min = (dataY_predict)  => d3.min(dataY_predict, (d) => d);
    const yMin = (dataY)  => d3.min(dataY, (d) => d);
    const xScale = d3.scale.linear().domain([xMin(dataX), xMax(dataX)]).range([padding, width - padding*2]);
    const yScale = d3.scale.linear().domain([Math.min(yMin(dataY), y_hat_Min(dataY_predict)), Math.max(yMax(dataY), y_hat_Max(dataY_predict))]).range([height - padding, padding]);
    const transform = 'translate(' + (pad.left*2+pad.right+width) + ', ' + (pad.top) + ')';
    const transform_label_y = "rotate(270,"+(-pad.left*0.8)+","+(height/2)+")";
    const line = d3.svg.line()
      .x((d) => xScale(d[0]))
      .y((d) => yScale(d[1]));
    const data = this.initData(dataX, dataY_predict);

    const xticks = xScale.ticks(5);
    const yticks = yScale.ticks(5);

    // console.log(xticks);
    console.log(data);
    // console.log(dataY);
    // console.log(dataY_predict);

    return(
      <g id='scatterPlot' transform={"translate("+(pad.left*2+pad.right+width)+","+pad.top+")"}>
        <rect height={height} width={width} fill={"#c8c8c8"} stroke={"black"} strokeWidth={"1"} pointer-events={"none"}></rect>
        <text id='corrtitle' x={width/2} y={-pad.top/2} textAnchor={'middle'} dominant-baseline={"middle"}>Scatterplot</text>
        <text id='xaxis' class='axes' x={width/2} y={height+pad.bottom*0.7} textAnchor={'middle'} dominant-baseline={"middle"} fill={'slateblue'}>
        {label_x}
        </text>
        <text id='yaxis' class='axes' x={-pad.left*0.8} y={height/2} textAnchor={'middle'} dominant-baseline={"middle"} transform={transform_label_y} fill={'slateblue'}>
        {label_y}
        </text>
        {xticks.map((d, i) => {
          return(
            <text key={i} class='axes' x={xScale(d)} y={height+pad.bottom*0.3} textAnchor={'middle'} dominant-baseline={"middle"}>{d}</text>
          );
        })}
        {xticks.map((d, i) => {
          return(
            <line key={i} class='axes' x1={xScale(d)} x2={xScale(d)} y1={0} y2={height} stroke={"white"} strokeWidth={1}></line>
          );
        })}
        {yticks.map((d,i) => {
          return(
            <text key={i} class='axes' x={-pad.left*0.3} y={yScale(d)} textAnchor={'middle'} dominant-baseline={"middle"}>{d3.format(",.1s")(d)}</text>
          );
        })}
        {yticks.map((d,i) => {
          return(
            <line key={i} class='axes' y1={yScale(d)} y2={yScale(d)} x1={0} x2={width} stroke={"white"} strokeWidth={1}></line>
          );
        })}
        <path class='regression-line' stroke={"darkslateblue"} d={line(data)}></path>
        {dataX.map((d,i) => {
          // console.log(xScale(d));
          // console.log(yScale(dataY[i]));
          return(
            <circle key={i} r={3} cx={xScale(d)} cy={yScale(dataY[i])} stroke={"black"} strokeWidth={1} fill={'crimson'}/>
          );
        })}
      </g>
    );
  }
}

export default PlotScatter;
