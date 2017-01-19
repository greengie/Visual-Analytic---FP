import React from 'react';
import Reflux from 'reflux';
import axios from 'axios';

// import Selector from './selector';
// import CustomizedSlider from './slider';
import ScatterPlot from './scatterplot';
import ChartStore from '../stores/ChartStore';
import gdp_2010 from '../data/gdp_2010';
import popdensity_2010 from '../data/popdensity_2010';
import indicator_list from '../data/indicator_list';

require('rc-slider/assets/index.css');

const Slider = require('rc-slider');

const styles = {
  width   : 1000,
  height  : 400,
  padding : 80,
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
      selectorY: 'popdensity',
      xMax: indicator_list.gdp,
      yMax: indicator_list.popdensity
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
    this.getDataX(this.state.value, event.target.value);
    for(var key in indicator_list){
      // console.log(event.target)
      if(key === event.target.value){
        // console.log("aaaa");
        this.setState({xMax: indicator_list[key]})
      }
    }
  },

  handleSelectorYChange(event) {
    this.setState({selectorY: event.target.value});
    this.getDataY(this.state.value, event.target.value);
    for(var key in indicator_list){
      if(key == event.target.value){
        this.setState({yMax: indicator_list[key]})
      }
    }
  },


  render() {
    const {dataX, dataY, chartHighlight, selectorX, selectorY, value, xMax, yMax} = this.state;
    // console.log(dataX)
    return (
        <div className='main'>
          <h1>Simple Scatter-Plot</h1>
          <ScatterPlot dataX={dataX} dataY={dataY} highlight={chartHighlight} xMax={xMax} yMax={yMax} {...styles} />
          <div style={bar_style}>
            <Slider value={this.state.value}
              onChange={this.onSliderChange} onAfterChange={this.onAfterChange}
              min={1980} max={2015}
            />
          </div>
          <div id='selector-x'>
            <label>
              X-AXIS:
              <select value={this.state.selectorX} onChange={this.handleSelectorXChange} >
                <option value="gdp">GDP at Market Prices (current US$)</option>
                <option value="popdensity">Population Density (per sq. km.)</option>
                <option value="income_per_person">Income per person (fixed PPP$)</option>
                <option value="life_expectancy">Life expectancy at birth (years)</option>
                <option value="total_population">Total Population</option>
              </select>
            </label>
          </div>
          <div id='selector-y'>
            <label>
              Y-AXIS:
              <select value={this.state.selectorY} onChange={this.handleSelectorYChange} >
              <option value="gdp">GDP at Market Prices (current US$)</option>
              <option value="popdensity">Population Density (per sq. km.)</option>
              <option value="income_per_person">Income per person (fixed PPP$)</option>
              <option value="life_expectancy">Life expectancy at birth (years)</option>
              <option value="total_population">Total Population</option>
              </select>
            </label>
          </div>
        </div>
    );
  }
});

export default Chart;
