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
import Scaling from './scaling';

require('rc-slider/assets/index.css');

const Slider = require('rc-slider');
const styles = {
  width   : 1200,
  height  : 500,
  padding : 60,
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
  // Init InitialState
  getInitialState() {
    return {dataX: gdp_2010,
      dataY: popdensity_2010,
      value: 2010,
      selectorX: 'gdp',
      selectorY: 'popdensity',
      xMax: indicator_list.gdp[0],
      yMax: indicator_list.popdensity[0],
      scaling_x: "lin",
      scaling_y: "lin",
      correlation: -0.03
    };
  },
  // for slider and indicator to get new X data
  getDataX(value, selector) {
      // console.log(this.state.selectorX);
      // API_URL + selectX + value
      axios.get(API_URL + selector + '/' + value)
        .then(res => {
          const dataX = res.data;
          if(this.state.scaling_x == "log"){
            for(var i=0;i < dataX.length;i++){
              if(dataX[i].data_value >= 1){
                dataX[i].data_value = (Math.log(dataX[i].data_value))/(Math.log(2));
              }
              else{
                dataX[i].data_value = (dataX[i].data_value);
              }
            }
            this.setState({dataX});
            this.setState({correlation: this.pearson_correlation(dataX)});
          }
          else if(this.state.scaling_x == "lin"){
            this.setState({dataX});
            this.setState({correlation: this.pearson_correlation(dataX)});
            // console.log(dataX);
          }
        });
  },
  // for slider and indicator to get new Y data
  getDataY(value, selector) {
      // API_URL + selectY + value
      axios.get(API_URL + selector + '/' + value)
        .then(res => {
          const dataY = res.data;
          if(this.state.scaling_y == "log"){
            for(var i=0;i < dataY.length;i++){
              if(dataY[i].data_value >= 1){
                dataY[i].data_value = (Math.log(dataY[i].data_value))/(Math.log(2));
              }
              else{
                dataY[i].data_value = (dataY[i].data_value);
              }
            }
            this.setState({dataY});
            this.setState({correlation: this.pearson_correlation(this.state.dataX)});
          }
          else if(this.state.scaling_x == "lin"){
            this.setState({dataY});
            this.setState({correlation: this.pearson_correlation(this.state.dataX)});
          }
        });
    },

  componentDidMount() {
    this.listenTo(ChartStore, this._onChartStoreChange);
  },

  _onChartStoreChange(payload) {
    console.log(payload);
    this.setState({chartHighlight: payload.highlight});
  },

  // find correlation value
  pearson_correlation(data){
    // console.log(data.length);
    // console.log(this.state.dataX);
    const n = data.length;
    var sum_x = 0;
    var sum_y = 0;
    var sum_xy = 0;
    var sum_x2 = 0;
    var sum_y2 = 0;
    for(var i = 0;i < n;i++){
      const xi = data[i].data_value;
      const yi = data[i].data_value_y;
      sum_x += xi;
      sum_y += yi;
      sum_xy += (xi*yi);
      sum_x2 += (xi*xi);
      sum_y2 += (yi*yi);
    }
    const r = (((n*sum_xy)-(sum_x*sum_y))/(Math.sqrt(((n*sum_x2)-(sum_x*sum_x))*((n*sum_y2)-(sum_y*sum_y))))).toFixed(2);
    return r;
  },

  // handle slider changing
  onSliderChange(value) {
    this.setState({value,});
    // this.setState({correlation: this.pearson_correlation()});
    // this.setState({correlation: -0.56});
    this.getDataX(value, this.state.selectorX);
    this.getDataY(value, this.state.selectorY);
  },
  // handle slider after changing
  onAfterChange(value) {
    console.log(this.state);
    // console.log(value); //eslint-disable-line
  },
  // handle selector X
  handleSelectorXChange(event) {
    // console.log(this.state.dataX);
    this.setState({selectorX: event.target.value});
    // this.setState({correlation: this.pearson_correlation()});
    this.getDataX(this.state.value, event.target.value);
    for(var key in indicator_list){
      // console.log(event.target)
      if(key === event.target.value){
        // this.setState({xMax: indicator_list[key]});
        if(this.state.scaling_x == "lin"){
          this.setState({xMax: indicator_list[key][0]});
        }
        else if(this.state.scaling_x == "log"){
          this.setState({xMax: indicator_list[key][1]});
        }
      }
    }
  },
  // handle selector Y
  handleSelectorYChange(event) {
    // console.log(this.state.dataX);
    this.setState({selectorY: event.target.value});
    // this.setState({correlation: this.pearson_correlation()});
    this.getDataY(this.state.value, event.target.value);
    for(var key in indicator_list){
      if(key == event.target.value){
        // this.setState({yMax: indicator_list[key]});
        if(this.state.scaling_y == "lin"){
          this.setState({yMax: indicator_list[key][0]});
        }
        else if(this.state.scaling_y == "log"){
          this.setState({yMax: indicator_list[key][1]});
        }
      }
    }
  },
  // handle scale linear-log for x axes
  handleScaleXChange(event) {
    this.setState({scaling_x: event.target.value});
    if(this.state.scaling_x == "lin"){
      if(event.target.value == "log"){
        for(var i=0;i<this.state.dataX.length;i++){
          // console.log(Math.log(this.state.dataX[i].data_value)/Math.log(2));
          if(this.state.dataX[i].data_value >= 1){
            this.state.dataX[i].data_value = (Math.log(this.state.dataX[i].data_value))/(Math.log(2));
            this.setState({xMax: indicator_list[this.state.selectorX][1]});
          }
        }
      }
    }
    else if(this.state.scaling_x == "log"){
      if(event.target.value == "lin"){
        for(var i=0;i<this.state.dataX.length;i++){
          if(this.state.dataX[i].data_value >= 1){
            this.state.dataX[i].data_value = Math.pow(2, this.state.dataX[i].data_value);
            this.setState({xMax: indicator_list[this.state.selectorX][0]});
          }
        }
      }
    }
  },
  // handle scale linear-log for y axes
  handleScaleYChange(event) {
    this.setState({scaling_y: event.target.value});
    if(this.state.scaling_y == "lin"){
      if(event.target.value == "log"){
        for(var i=0;i<this.state.dataY.length;i++){
          // console.log(Math.log(this.state.dataX[i].data_value)/Math.log(2));
          if(this.state.dataY[i].data_value >= 1){
            this.state.dataY[i].data_value = (Math.log(this.state.dataY[i].data_value))/(Math.log(2));
            this.setState({yMax: indicator_list[this.state.selectorY][1]});
          }
        }
      }
    }
    else if(this.state.scaling_y == "log"){
      if(event.target.value == "lin"){
        for(var i=0;i<this.state.dataY.length;i++){
          if(this.state.dataY[i].data_value >= 1){
            this.state.dataY[i].data_value = Math.pow(2, this.state.dataY[i].data_value);
            this.setState({yMax: indicator_list[this.state.selectorY][0]});
          }
        }
      }
    }
  },

  render() {
    const {dataX, dataY, chartHighlight, selectorX, selectorY, value, xMax, yMax, scaling_x, scaling_y, correlation} = this.state;
    // console.log(dataX);
    return (
        <div className='main'>
          <h1>My-Plot</h1>
          <ScatterPlot dataX={dataX} dataY={dataY} highlight={chartHighlight} xMax={xMax} yMax={yMax} {...styles} />
          <div className='year-slider' style={bar_style}>
            <Slider value={this.state.value}
              onChange={this.onSliderChange} onAfterChange={this.onAfterChange}
              min={1980} max={2015}
            />
          </div>
          <div className='correlation-slider' style={bar_style}>
            <Slider value={this.state.correlation} min={-1} max={1} step={0.01} />
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
            <Scaling scale={scaling_x} handleScaleChange={this.handleScaleXChange} />
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
            <Scaling scale={scaling_y} handleScaleChange={this.handleScaleYChange} />
          </div>
        </div>
    );
  }
});

export default Chart;
