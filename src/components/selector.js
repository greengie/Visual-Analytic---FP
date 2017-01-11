import React from 'react';
import axios from 'axios';

export default class Selector extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {value: props.s};

    this.handleSelectorChange = this.handleSelectorChange.bind(this);
  }


  handleSelectorChange(event) {
    this.props.getData(this.props.year, event.target.value)
    // console.log(this.props.s)
    this.setState({value: event.target.value});
    // console.log(this.state);
    // console.log('goto ' + event.target.value)
    // this.setState({value: event.target.value});
  }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return (
          <select value={this.state.value} onChange={this.handleSelectorChange} >
            <option value="gdp">gdp</option>
            <option value="popdensity">popdensity</option>
          </select>
    );
  }
}
