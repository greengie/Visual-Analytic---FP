import React from 'react';
import ChartActions from '../actions/ChartActions';

const renderCircles = (props) => {

  handleHover = (i) => {
    console.log(i);
    ChartActions.highlight(i);
  }
  //console.log(props);
  return (coords, index) => {
    const circleProps = {
      cx: props.xScale(coords[0]),
      cy: props.yScale(coords[1]),
      r: 10,
      //fill: index===state.hoverIndex ? 'blue' : 'red',
      key: index,
      onMouseOver: handleHover.bind(this,index)
      //onMouseOut: this._handleHover.bind(this, null)
    };
    return(
      <circle {...circleProps} />
    );
  }
}

export default class Circles extends React.Component {
  constructor(props){
    super(props);
    //console.log(props);
    //this.handleHover = this.handleHover.bind(this);
  }

  render(){
    //console.log(this.props);
    return <g>{ this.props.data.map(renderCircles(this.props)) } </g>
  }
}
