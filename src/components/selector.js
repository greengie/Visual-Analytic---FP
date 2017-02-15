import React from 'react';

const Selector = React.createClass({
  propTypes: {
    selector: React.PropTypes.string.isRequired,
    handleSelectorChange: React.PropTypes.func.isRequired
  },

  render(){
    return(
      <select value={this.props.selector} onChange={this.props.handleSelectorChange} >
        <option value="gdp">GDP at Market Prices (current US$)</option>
        <option value="popdensity">Population Density (per sq. km.)</option>
        <option value="income_per_person">Income per person (fixed PPP$)</option>
        <option value="life_expectancy">Life expectancy at birth (years)</option>
        <option value="total_population">Total Population</option>
        <option value="expense_on_health">Total Expenditure On Health (PPP int. $)</option>
      </select>
    );
  }
});

export default Selector;
