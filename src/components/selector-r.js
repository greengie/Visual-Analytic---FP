import React from 'react';

const R_Selector = React.createClass({
  propTypes: {
    selector: React.PropTypes.string.isRequired,
    handleSelectorChange: React.PropTypes.func.isRequired
  },

  render(){
    return(
      <select value={this.props.selector} onChange={this.props.handleSelectorChange} >
        <option value="total_in">Migration In(total)</option>
        <option value="total_out">Migration Out(total)</option>
        <option value="male_in">Migration In(male)</option>
        <option value="male_out">Migration Out(male)</option>
        <option value="female_in">Migration In(female)</option>
        <option value="female_out">Migration Out(female)</option>
      </select>
    );
  }
});

export default R_Selector;
