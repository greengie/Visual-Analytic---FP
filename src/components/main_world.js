import React, { Component } from "react";
import * as d3 from 'd3';
// import d3_queue from 'd3-queue';
import _ from 'lodash';
import axios from 'axios';
import { World } from './maps';
const d3Queue = require('d3-queue');

class Main_World extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
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

  render() {
      // console.log(this.state.data);
      // console.log(this.state.nameIdMap);
      return (
        <div className='Map'>
          <World width={1024} height={1024}
              data={this.state.data} nameIdMap={this.state.nameIdMap} />
        </div>
      );
  }
}

export default Main_World;
