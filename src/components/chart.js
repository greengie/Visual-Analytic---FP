import React from 'react';
import Reflux from 'reflux';
import axios from 'axios';

// import Selector from './selector';
// import CustomizedSlider from './slider';
import ScatterPlot from './scatterplot';
import ChartStore from '../stores/ChartStore';
import gdp_2010 from '../data/gdp_2010';
import popdensity_2010 from '../data/popdensity_2010';

require('rc-slider/assets/index.css');

const Slider = require('rc-slider');

const styles = {
  width   : 1000,
  height  : 400,
  padding : 40,
};

const bar_style = {
  width   : 400,
  margin  : 50
};

const API_URL = 'http://128.199.99.233:3000/api/';

const Chart = React.createClass({
  mixins: [
    Reflux.ListenerMixin
  ],

  getInitialState() {
    return {dataX: gdp_2010,
      dataY: popdensity_2010,
      value: 2010,
      selectorX: 'gdp',
      selectorY: 'popdensity'
    };
  },

  getDataX(value, selector) {
      // console.log(this.state.selectorX);
      // API_URL + selectX + value
      axios.get(API_URL + selector + '/' + value)
        .then(res => {
          const dataX = res.data;
          this.setState({dataX});
        });
  },

  getDataY(value, selector) {
      // API_URL + selectY + value
      axios.get(API_URL + selector + '/' + value)
        .then(res => {
          const dataY = res.data;
          this.setState({dataY});
        });
    },

  componentDidMount() {
    this.listenTo(ChartStore, this._onChartStoreChange);
  },

  _onChartStoreChange(payload) {
    console.log(payload);
    this.setState({chartHighlight: payload.highlight});
  },

  onSliderChange(value) {
    this.setState({value,});
    this.getDataX(value, this.state.selectorX);
    this.getDataY(value, this.state.selectorY);
  },

  onAfterChange(value) {
    console.log(this.state);
    // console.log(value); //eslint-disable-line
  },

  handleSelectorXChange(event) {
    this.setState({selectorX: event.target.value});
    // console.log(this.state);
    this.getDataX(this.state.value, event.target.value);
    // this.getDataY(this.state.value, this.state.selectorY);
  },

  handleSelectorYChange(event) {
    this.setState({selectorY: event.target.value});
    // this.getDataX(this.state.value, this.state.selectorX);
    this.getDataY(this.state.value, event.target.value);
  },


  render() {
    const {dataX, dataY, chartHighlight, selectorX, selectorY, value} = this.state;
    // console.log(dataX)
    return (
        <div className='main'>
          <h1>Simple Scatter-Plot</h1>
          <ScatterPlot dataX={dataX} dataY={dataY} highlight={chartHighlight} {...styles} />
          <div style={bar_style}>
            <Slider value={this.state.value}
              onChange={this.onSliderChange} onAfterChange={this.onAfterChange}
              min={1990} max={2015}
            />
          </div>
          <div id='selector-x'>
            <label>
              X-AXIS:
              <select value={this.state.selectorX} onChange={this.handleSelectorXChange} >
                <option value="gdp">gdp</option>
                <option value="popdensity">popdensity</option>
              </select>
            </label>
          </div>
          <div id='selector-y'>
            <label>
              Y-AXIS:
              <select value={this.state.selectorY} onChange={this.handleSelectorYChange} >
                <option value="gdp">gdp</option>
                <option value="popdensity">popdensity</option>
              </select>
            </label>
          </div>
        </div>
    );
  }
});

export default Chart;
