import React from 'react';
// import ChartActions from '../actions/ChartActions';

const renderCircles = (props) => {
  // console.log(this.sta);
  // const _handleHover = (i, hoverIndex) => {
  //   console.log(hoverIndex, i);
  //   // const x = i;
  //   // return x;
  // }
//  const _checkHover = (i) => i === hoverIndex ? 'blue' : 'red';

  return (coords, index) => {
    // const circleProps = {
    //   cx: props.xScale(coords[0]),
    //   cy: props.yScale(coords[1]),
    //   r: 5,
    //   fill: index===props.hoverIndex ? 'blue' : 'red',
    //   key: index
    //   //onMouseOver: _handleHover(index)
    //   //onMouseOut: this._handleHover.bind(this, null)
    // };
    return(
      <circle key={index} r={5} cx={props.xScale(coords[0])} cy={props.yScale(coords[1]) } fill={index===props.hoverIndex ? 'yellow' : 'red'} onMouseOver={_handleHover.bind(this, index, props.hoverIndex)}/>
    );
  };
};

export default (props) => {
  //console.log(this.state);
  //console.log(props)
  this.state = {hoverIndex: -1};
  //console.log(this);
  this.handleHover = this.handleHover.bind(this);

  handleHover = () => {
    this.setState(prevState => ({
      hoverIndex : i
    }));
  }

  return <g>{ props.data.map(renderCircles(props)) } </g>
}
