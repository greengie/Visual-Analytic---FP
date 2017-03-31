import React, { Component } from "react";
import axios from 'axios';
import SelectFile from './selectfile'

const API_URL = 'http://128.199.99.233:3000/api/';

class Regression extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {value: 'coconut', showCorMatrix: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.setState({showCorMatrix: false});
  }

  handleSubmit(event) {
    this.setState({showCorMatrix: true});
    event.preventDefault();
  }

  render() {
    let showCorMatrix;
    let showScatterPlot;

    if(this.state.showCorMatrix){
      showCorMatrix = (
        <div>
          <h4>Cor-Matrix here!</h4>
        </div>
      );
    }

    return (
      <div className='regression'>
        <div className='formData'>
          <form onSubmit={this.handleSubmit}>
            <label>
              Choose your file to view:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
          {showCorMatrix}
        </div>
      </div>
    );
  }
}
export default Regression;
