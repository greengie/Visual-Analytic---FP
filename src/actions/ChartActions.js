import Reflux from 'reflux';

const ChartActions = Reflux.createActions([
  /**
   * Sets a tooltip that point higlighted in charts
   * @param point {Object} - the data point to be highlighted
   */
  'highlight'
]);

export default ChartActions;
