import React from 'react';

const Scaling = React.createClass({
  propTypes: {
    scale: React.PropTypes.string.isRequired,
    handleScaleChange: React.PropTypes.func.isRequired
  },

  render(){
    // console.log(this.props.scale);
    return(
      <select value={this.props.scale} onChange={this.props.handleScaleChange}>
        <option value="lin">lin</option>
        <option value="log">log</option>
      </select>
    );
  }
});

export default Scaling;
