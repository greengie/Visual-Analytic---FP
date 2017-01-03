import React from 'react';
import Reflux from 'reflux';
import axios from 'axios';

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
      dataY: popdensity_2010
    };
  },

  getDataX(value) {
      console.log(value);
      axios.get(API_URL + 'gdp/'+value)
        .then(res => {
          const dataX = res.data;
          this.setState({dataX});
        });
  },

  getDataY(value) {
      axios.get(API_URL + 'popdensity/'+value)
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
    // console.log('/api/'+value);
    this.getDataX(value);
    this.getDataY(value);
  },

  render() {
    const {dataX, dataY, chartHighlight} = this.state;
    return (
        <div className='main'>
          <h1>Simple Scatter-Plot</h1>
          <ScatterPlot dataX={dataX} dataY={dataY} highlight={chartHighlight} {...styles} />
          <div style={bar_style}>
            <Slider tipTransitionName="rc-slider-tooltip-zoom-down" min={1990} max= {2015} onChange={this.onSliderChange} defaultValue={2010}/>
          </div>
        </div>
    );
  }
});

export default Chart;
