import React from 'react';
import d3 from 'd3';
const d3Ease = require("d3-ease");

export default class Dot extends React.Component{
  constructor(props){
    super(props);
    this.state = Object.assign({});
  }
  //
  flash() {
    let tooltip = d3.select('body')
         .append('div')
         .attr('class', 'tooltip');

    var  formatNumber = d3.format(".5s");
    let node = d3.select(this.refs.circle);
    // let label = d3.select('.tooltip');
    this.setState({hoverOn: true});

    node.transition()
        .attr('r', 15)
        .duration(1000)
        .ease(d3Ease.easeCubicOut)

    tooltip.transition()
      .duration(1000)
      .style("opacity", .9);
    tooltip.html(this.props.name+"<br/>"+"X: "+formatNumber(this.props.real_x)+"<br />"+"Y: "+formatNumber(this.props.real_y))
      .style("left", (this.props.x+5) + "px")
      .style("top", (this.props.y) + "px");
  }
  //
  flashOut(){

    let node = d3.select(this.refs.circle);
    let label = d3.selectAll('.tooltip');
    this.setState({hoverOn: false});

    label.transition()
      .duration(200)
      .style("opacity", 0)
      .remove();

    node.transition()
        .attr('r',10)
        .duration(1500)
        .ease(d3Ease.easeCubicOut);
  }

  render() {
    const {x, y, r, color} = this.props;
    const {hoverOn} = this.state;
    return <circle cx={x} cy={y} r={r} fill={color}
            ref="circle" onMouseOver={this.flash.bind(this)}
            onMouseOut={this.flashOut.bind(this)} />
  }
}