import React from 'react';
import Reflux from 'reflux';
import axios from 'axios';
import Selector from './selector';
import ScatterPlot from './scatterplot';
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
      correlation: -0.03
    };
  },
  // for slider and indicator to get new X data
  getDataX(value, selector, scale_x) {
      // API_URL + selectX + value
      axios.get(API_URL + selector + '/' + value)
        .then(res => {
          const dataX = res.data;
          if(scale_x == "log"){
            for(var i=0;i < dataX.length;i++){
              if(dataX[i].data_value >= 1){
                dataX[i].data_value = (Math.log(dataX[i].data_value))/(Math.log(2));
              }
              else{
                dataX[i].data_value = (dataX[i].data_value);
              }
            }
            this.setState({dataX: dataX});
            this.setState({xMax: indicator_list[this.state.selectorX][1]});
            this.setState({correlation: this.pearson_correlation(dataX)});
          }
          else if(scale_x == "lin"){
            this.setState({dataX: dataX});
            this.setState({xMax: indicator_list[this.state.selectorX][0]});
            this.setState({correlation: this.pearson_correlation(dataX)});
          }
        });
  },
  // for slider and indicator to get new Y data
  getDataY(value, selector, scale_y) {
      // API_URL + selectY + value
      axios.get(API_URL + selector + '/' + value)
        .then(res => {
          const dataY = res.data;
          if(scale_y == "log"){
            for(var i=0;i < dataY.length;i++){
              if(dataY[i].data_value >= 1){
                dataY[i].data_value = (Math.log(dataY[i].data_value))/(Math.log(2));
              }
              else{
                dataY[i].data_value = (dataY[i].data_value);
              }
            }
            this.setState({dataY: dataY});
            this.setState({yMax: indicator_list[this.state.selectorY][1]});
            this.setState({correlation: this.pearson_correlation(this.state.dataX)});
          }
          else if(scale_y == "lin"){
            this.setState({dataY: dataY});
            this.setState({yMax: indicator_list[this.state.selectorY][0]});
            this.setState({correlation: this.pearson_correlation(this.state.dataX)});
          }
        });
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
    this.getDataX(value, this.state.selectorX, this.state.scaling_x);
    this.getDataY(value, this.state.selectorY, this.state.scaling_y);
  },
  // handle slider after changing
  onAfterChange(value) {
    console.log(this.state);
  },
  //set yearMin
  getyearMin(){
    console.log(Math.max(indicator_list[this.state.selectorX][2],indicator_list[this.state.selectorY][2]));
    var yearMin = Math.max(indicator_list[this.state.selectorX][2],indicator_list[this.state.selectorY][2]);
    return yearMin;
  },
  //set yearMax
  getyearMax(){
    console.log(Math.min(indicator_list[this.state.selectorX][3],indicator_list[this.state.selectorY][3]));
    var yearMax = Math.min(indicator_list[this.state.selectorX][3],indicator_list[this.state.selectorY][3]);
    return yearMax;
  },
  // handle selector X
  handleSelectorXChange(event) {
    this.setState({selectorX: event.target.value});
    this.getDataX(this.state.value, event.target.value, indicator_list[event.target.value][4]);
    this.setState({scaling_x: indicator_list[event.target.value][4]});
  },
  // handle selector Y
  handleSelectorYChange(event) {
    this.setState({selectorY: event.target.value});
    this.getDataY(this.state.value, event.target.value, indicator_list[event.target.value][4]);
    this.setState({scaling_y: indicator_list[event.target.value][4]});
  },
  // handle scale linear-log for x axes
  handleScaleXChange(event) {
    this.setState({scaling_x: event.target.value});
    this.getDataX(this.state.value, this.state.selectorX, event.target.value);
  },
  // handle scale linear-log for y axes
  handleScaleYChange(event) {
    this.setState({scaling_y: event.target.value});
    this.getDataY(this.state.value, this.state.selectorY, event.target.value);
  },
  // render
  render() {
    const {dataX, dataY, selectorX, selectorY, value, xMax, yMax, scaling_x, scaling_y, correlation} = this.state;
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
          <div className='correlation-slider' style={bar_style}>
            <Slider value={correlation} min={-1} max={1} step={0.01} />
          </div>
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
