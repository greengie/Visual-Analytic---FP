import React, { Component } from "react";
import d3 from 'd3';
import PlotScatter from './plotScatter';
import axios from 'axios';

require('../assets/stylesheets/correlationMatrix.css');

// const margin = {top: 50, right: 50, bottom: 100, left: 100};
const pad = {left:70, top:40, right:5, bottom: 70};
const width = 500;
const height = 500;
const padding = 5;
const totalh = height + pad.top + pad.bottom;
const totalw = (width + pad.left + pad.right)*2;
const API_URL = 'http://128.199.99.233:3000/api/';

class CorrelationMatrix extends Component {

  constructor(props) {
    super(props);
    console.log(props);

    this.state = {corMatrix: props.corMatrix, label: props.label, data: props.data, label_x: '', label_y: '', showScatterPlot: false, regressionData: []};
  }

  showData(a,i,j,y){
    // console.log(this.refs['rect-'+i+'-'+j]);
    // console.log(a);
    // console.log(this.state.label[i]);
    // console.log(this.state.label[j]);
    let square = d3.select(this.refs['rect-'+i+'-'+j]);
    square.style("stroke-width", 2)
        .style("stroke", 'black');
    let text = d3.select(this.refs['text-'+i+'-'+j]);
    text.style('display', 'block');

  }

  _handleMouseOut(i, j){
    let square = d3.select(this.refs['rect-'+i+'-'+j]);
    square.style("stroke-width", 0)
        .style("stroke", null);
    let text = d3.select(this.refs['text-'+i+'-'+j]);
    text.style('display', 'none');
  }

  _handleMouseClick(i, j){
    this.setState({showScatterPlot: true});
    this.setState({label_x: this.state.label[i]});
    this.setState({label_y: this.state.label[j]});
    axios.post(API_URL+'calregression/'+this.state.label[i]+'/'+this.state.label[j], {
        data: this.state.data
      })
      .then(res => {
        this.setState({regressionData: res.data});
        // console.log(res.data);
      });
    console.log(this.state.label[i]);
    console.log(this.state.label[j]);
  }

  render() {
    const corMatrix = this.state.corMatrix;
    const start_color = '#3385ff';
    const end_color = '#ff3333';
    const numrows = corMatrix.length;
    const numcols = corMatrix[0].length;
    const label_x = this.state.label_x;
    const label_y = this.state.label_y;
    const data = this.state.data;
    const regressionData = this.state.regressionData;

    // const maxValue = d3.max(corMatrix, function(layer) { return d3.max(layer, function(d) { return d; }); });
    // const minValue = d3.min(corMatrix, function(layer) { return d3.min(layer, function(d) { return d; }); });

    const x = d3.scale.ordinal()
  	    .domain(d3.range(numcols))
  	    .rangeBands([0, width]);

  	const y = d3.scale.ordinal()
  	    .domain(d3.range(numrows))
  	    .rangeBands([0, height]);

    const colorMap = d3.scale.linear()
        .domain([-1, 0, 1])
        .range(["darkslateblue", "white", "crimson"]);

    let showScatterPlot;

    if(this.state.showScatterPlot){
      showScatterPlot = (
        <PlotScatter label_x={label_x} label_y={label_y} dataX={data[label_x]} dataY={data[label_y]} width={width} height={height} pad={pad} padding={padding} dataY_predict={this.state.regressionData} />
      );
    }

    // console.log(data[label_x]);
    // console.log(data[label_y]);

    return(
      <div className='cor-scatter'>
        <svg ref='svg' width={totalw} height={totalh}>
          <g id='corPlot' transform={"translate("+pad.left+","+pad.top+")"}>
            <rect ref='background' width={width} height={height}></rect>
            <text id='corrtitle' x={width/2} y={-pad.top/2} textAnchor={'middle'} dominant-baseline={"middle"}>Correlation-Matrix</text>
            {corMatrix.map((d, i) => {
              return(
                <g key={i} className='row' ref='row' transform={"translate(0," + y(i) + ")"}>
                  {d.map((a, j) => {
                    return(
                      <g key={j} className='cell' ref='cell' transform={"translate(" + x(j) + ", 0)"}>
                        <rect ref={'rect-'+i+'-'+j} width={x.rangeBand()}
                        height={y.rangeBand()} fill={colorMap(a)}
                        onMouseOver={this.showData.bind(this, a, i, j)}
                        onMouseOut={this._handleMouseOut.bind(this, i, j)}
                        onClick={this._handleMouseClick.bind(this, i, j)} />
                        <text ref={'text-'+i+'-'+j} dy={'.32em'} x={x.rangeBand() / 2} y={y.rangeBand() / 2} fill={'black'}>{Number(a).toFixed(2)}</text>
                      </g>
                    );
                  })}
                </g>
              );
            })}
          </g>
          {showScatterPlot}
        </svg>
      </div>
    );
  }
}

export default CorrelationMatrix;
