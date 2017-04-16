import React, { Component } from "react";
import * as d3 from 'd3';
// import d3_queue from 'd3-queue';
import _ from 'lodash';
import axios from 'axios';
import { World } from './maps';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
const d3Queue = require('d3-queue');

class Main_World extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null , focusCountry: ""};
  }

  componentWillMount() {
    d3Queue.queue()
      .defer(d3.json, 'http://128.199.99.233:3000/api/migration_map/'+'2015')
      .await((err, data) => {
           this.setState({
               data: data,
               nameIdMap: _.fromPairs(data.map(({ id, name }) => [name, id]))
           });
       });
  }

  changeFocusCountry(country) {
      this.setState({
          focusCountry: country.value
      });
  }

  get countries() {
      const { data } = this.state;

      if (!data) return [];

      return data.map(({ id, name }) => ({ value: id, label: name }));
  }

  render() {
      console.log(this.state.focusCountry);
      // console.log(this.state.nameIdMap);
      return (
        <div className='Map'>
          <World width={1440} height={600}
              data={this.state.data} nameIdMap={this.state.nameIdMap}
              focusCountry={this.state.focusCountry}
              />
          <Select name="focusCountry"
                  value={this.state.focusCountry}
                  options={this.countries}
                  onChange={this.changeFocusCountry.bind(this)} />
        </div>
      );
  }
}

export default Main_World;
