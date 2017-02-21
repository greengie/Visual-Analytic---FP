import React from 'react';
import Reflux from 'reflux';
import axios from 'axios';
import Selector from './selector';
import ScatterPlot from './scatterplot';
import gdp_2010 from '../data/gdp_2010';
import popdensity_2010 from '../data/popdensity_2010';
import indicator_list from '../data/indicator_list';
import correlation_init from '../data/correlation_init';
import Scaling from './scaling';
import LineChart from './linechart';

require('rc-slider/assets/index.css');

const Slider = require('rc-slider');
const styles = {
  width   : 1200,
  height  : 500,
  padding : 60,
};

const linestyles = {
  width   : 1200,
  height  : 500,
  padding : 50,
};

const bar_style = {
  width   : 1200,
  margin  : 50
};

const API_URL = 'http://128.199.99.233:3000/api/';
const Chart = React.createClass({
  // Init InitialState
  getInitialState() {
    return {dataX: gdp_2010,
      dataY: popdensity_2010,
      value: 2010,
      selectorX: 'gdp',
      selectorY: 'popdensity',
      xMax: indicator_list.gdp[0],
      yMax: indicator_list.popdensity[0],
      scaling_x: 'lin',
      scaling_y: 'lin',
      correlation: -0.03,
      corData: correlation_init
    };
  },
  // for slider and indicator to get new X data
  getDataX(value, selector, scale_x) {
      // API_URL + selectX + value
      axios.get(API_URL + selector + '/' + scale_x + '/' + value)
        .then(res => {
          this.setState({dataX: res.data});
          if(scale_x == "log"){
            this.setState({xMax: indicator_list[this.state.selectorX][1]});
          }
          else if (scale_x == 'lin') {
            this.setState({xMax: indicator_list[this.state.selectorX][0]});
          }
        });
  },
  // for slider and indicator to get new Y data
  getDataY(value, selector, scale_y) {
      // API_URL + selectY + value
      axios.get(API_URL + selector + '/' + scale_y + '/' + value)
        .then(res => {
          this.setState({dataY: res.data});
          if(scale_y == "log"){
            this.setState({yMax: indicator_list[this.state.selectorY][1]});
          }
          else if (scale_y == 'lin') {
            this.setState({yMax: indicator_list[this.state.selectorY][0]});
          }
        });
    },

  getCorData(selector, type, scale_x, scale_y){
    if(type == 'x'){
      axios.get(API_URL + 'correlation/' + selector + '/' + this.state.selectorY + '/' + this.getyearMin(selector,'x')+ '/' + this.getyearMax(selector,'x') + '/' + scale_x + '/' + scale_y)
        .then(res => {
          this.setState({corData: res.data});
        });
    }
    else if (type == 'y') {
      axios.get(API_URL + 'correlation/' + this.state.selectorX + '/' + selector + '/' + this.getyearMin(selector,'y')+ '/' + this.getyearMax(selector,'y') + '/' + scale_x + '/' + scale_y)
        .then(res => {
          this.setState({corData: res.data});
        });
    }
  },
  // handle slider changing
  onSliderChange(value) {
    this.setState({value,});
    this.getDataX(value, this.state.selectorX, this.state.scaling_x);
    this.getDataY(value, this.state.selectorY, this.state.scaling_y);
  },
  // handle slider after changing
  onAfterChange(value) {
    console.log(this.state);
  },
  //set yearMin
  getyearMin(selector,type){
    if(type == 'x'){
      var yearMin = Math.max(indicator_list[selector][2],indicator_list[this.state.selectorY][2]);
    }
    else if (type == 'y'){
      var yearMin = Math.max(indicator_list[this.state.selectorX][2],indicator_list[selector][2]);
    }
    else {
      var yearMin = Math.max(indicator_list[this.state.selectorX][2],indicator_list[this.state.selectorY][2]);
    }
    return yearMin;
  },
  //set yearMax
  getyearMax(selector, type){
    if(type == 'x'){
      var yearMax = Math.min(indicator_list[selector][3],indicator_list[this.state.selectorY][3]);
    }
    else if (type == 'y'){
      var yearMax = Math.min(indicator_list[this.state.selectorX][3],indicator_list[selector][3]);
    }
    else {
      var yearMax = Math.min(indicator_list[this.state.selectorX][3],indicator_list[this.state.selectorY][3]);
    }
    return yearMax;
  },
  // handle selector X
  handleSelectorXChange(event) {
    this.setState({selectorX: event.target.value});
    this.getDataX(this.state.value, event.target.value, indicator_list[event.target.value][4]);
    this.setState({scaling_x: indicator_list[event.target.value][4]});
    this.getCorData(event.target.value, 'x', indicator_list[event.target.value][4], this.state.scaling_y);
  },
  // handle selector Y
  handleSelectorYChange(event) {
    this.setState({selectorY: event.target.value});
    this.getDataY(this.state.value, event.target.value, indicator_list[event.target.value][4]);
    this.setState({scaling_y: indicator_list[event.target.value][4]});
    this.getCorData(event.target.value, 'y', this.state.scaling_x, indicator_list[event.target.value][4]);
  },
  // handle scale linear-log for x axes
  handleScaleXChange(event) {
    this.setState({scaling_x: event.target.value});
    this.getDataX(this.state.value, this.state.selectorX, event.target.value);
    this.getCorData(this.state.selectorX, 'x', event.target.value, this.state.scaling_y);
  },
  // handle scale linear-log for y axes
  handleScaleYChange(event) {
    this.setState({scaling_y: event.target.value});
    this.getDataY(this.state.value, this.state.selectorY, event.target.value);
    this.getCorData(this.state.selectorY, 'y', this.state.scaling_x, event.target.value);
  },
  // render
  render() {
    const {dataX, dataY, selectorX, selectorY, value, xMax, yMax, scaling_x, scaling_y, corData} = this.state;
    return (
        <div className='main'>
          <h1>My-Plot</h1>
          <ScatterPlot dataX={dataX} dataY={dataY} xMax={xMax} yMax={yMax} {...styles} />
          <div className='year-slider' style={bar_style}>
            <Slider value={value}
              onChange={this.onSliderChange} onAfterChange={this.onAfterChange}
              min={this.getyearMin()} max={this.getyearMax()}
            />
          </div>
          <LineChart data={corData} yearMin={this.getyearMin()} yearMax={this.getyearMax()} year={value} {...linestyles} />
          <div id='selector-x'>
            <label>
              X-AXIS:
              <Selector selector={selectorX} handleSelectorChange={this.handleSelectorXChange} />
            </label>
            <Scaling scale={scaling_x} handleScaleChange={this.handleScaleXChange} />
          </div>
          <div id='selector-y'>
            <label>
              Y-AXIS:
              <Selector selector={selectorY} handleSelectorChange={this.handleSelectorYChange} />
            </label>
            <Scaling scale={scaling_y} handleScaleChange={this.handleScaleYChange} />
          </div>
        </div>
    );
  }
});

export default Chart;
