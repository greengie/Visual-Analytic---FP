import React from 'react';
import Reflux from 'reflux';

import ScatterPlot from './scatterplot';
import ChartStore from '../stores/ChartStore';

const styles = {
  width   : 500,
  height  : 300,
  padding : 30,
};

// number of data points for chart. [10-40] points.
const numDataPoints = () => Math.floor(Math.random() * 10) + 1;

// function that return a random number from 400 to 1000.
const randomNum = () => Math.floor(Math.random() * 1000) + 400;

// function that create an array of numDataPoints elements of (x, y) coordinates.
const randomDataSet = () =>  {
  return Array.apply(null, {length: numDataPoints()}).map(() => [randomNum(),randomNum()]);
}

const Chart = React.createClass({
  mixins: [
    Reflux.ListenerMixin
  ],

  getInitialState() {
    return {data: randomDataSet()
    };
  },

  componentDidMount() {
    this.listenTo(ChartStore, this._onChartStoreChange);
  },

  _onChartStoreChange(payload) {
    console.log(payload.highlight);
    this.setState({chartHighlight: payload.highlight});
  },

  randomizeData() {
    console.log("STATE CHANGE!!! Generate New Data");
    this.setState({data: randomDataSet() });
  },

  render() {
    const {data, chartHighlight} = this.state;
    return (
        <div className='main'>
          <h1>Simple Scatter-Plot</h1>
          <ScatterPlot data={data} highlight={chartHighlight} {...styles} />
            <div className = "controls">
              <button className="btn randomize" onClick={() => this.randomizeData()}>
              Randomize data
              </button>
            </div>
            <h2>Number of Points: {this.state.data.length}</h2>
        </div>
    );
  }
});

export default Chart;
