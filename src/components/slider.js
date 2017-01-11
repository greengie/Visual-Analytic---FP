import React from 'react';
import axios from 'axios';

require('rc-slider/assets/index.css');
const Slider = require('rc-slider');
const API_URL = 'http://128.199.99.233:3000/api/';

const CustomizedSlider = React.createClass({
  getInitialState() {
    return {
      value: 2010,
    };
  },
  getDataX(value) {
      // API_URL + selectX + value
      axios.get(API_URL + 'gdp/'+value)
        .then(res => {
          const dataX = res.data;
          this.setState({dataX});
        });
  },

  getDataY(value) {
      // API_URL + selectY + value
      axios.get(API_URL + 'popdensity/'+value)
        .then(res => {
          const dataY = res.data;
          this.setState({dataY});
        });
    },

  onSliderChange(value) {
    console.log(value);
    this.setState({value,});
    this.getDataX(value);
    this.getDataY(value);
  },
  onAfterChange(value) {
    console.log(this.state);
    console.log(value); //eslint-disable-line
  },
  
  render() {
    return (
      <Slider value={this.state.value}
        onChange={this.onSliderChange} onAfterChange={this.onAfterChange}
        min={1990} max={2015}
      />
    );
  },
});

export default CustomizedSlider;
