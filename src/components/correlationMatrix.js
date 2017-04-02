import React, { Component } from "react";
import d3 from 'd3';
require('../assets/stylesheets/correlationMatrix.css');

const margin = {top: 50, right: 50, bottom: 100, left: 100};
const width = 350;
const height = 350;

class CorrelationMatrix extends Component {

  constructor(props) {
    super(props);
    console.log(props);

    this.state = {corMatrix: props.corMatrix, label: props.label, showScatterPlot: false};
  }

  showData(a,i,j,y){
    console.log(this.refs['rect-'+i+'-'+j]);
    console.log(a);
    console.log(this.state.label[i]);
    console.log(this.state.label[j]);
    let square = d3.select(this.refs['rect-'+i+'-'+j]);
    square.style("stroke-width", 2)
        .style("stroke", 'black');
    let text = d3.select(this.refs['text-'+i+'-'+j]);
    text.style('display', 'block');
    // let rowLabels = d3.select(this.refs.svg)
    //   .append("text")
    //   .attr("class", "y-label")
    //   .attr("x", -50)
    //   .attr("y", y / 2)
    //   .attr("dy", ".32em")
    //   .attr("text-anchor", "end")
    //   .text(this.state.label[i])
    //   .style('display', 'block')
    //   .style('fill', 'black');

    // rowTooltip.html(this.state.label[i])
    //   .style("left", (-50) + "px")
    //   .style("top", (y/2) + "px");
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
    console.log(this.state.label[i]);
    console.log(this.state.label[j]);
  }

  render() {
    const corMatrix = this.state.corMatrix;
    const start_color = '#3385ff';
    const end_color = '#ff3333';
    const numrows = corMatrix.length;
    const numcols = corMatrix[0].length;

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

    var showScatterPlot;

    if(this.state.showScatterPlot){
      showScatterPlot = (
          <h4>ScatterPlot Here!</h4>
      );
    }

    console.log(this.state.showScatterPlot);

    return(
      <div className='CorrelationMatrix'>
        <svg ref='svg' className='correlationMatrix' width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}>
          <rect ref='background' width={width} height={height}>
          </rect>
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
        </svg>
        {showScatterPlot}
      </div>
    );
  }
}
export default CorrelationMatrix;
