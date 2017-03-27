import React, { Component } from "react";

import Navigation from './navigation';
import Logout from './logout';

export default class Main extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);

    this.state = this.props.location.query;
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <Navigation id={this.state.id} file_num={this.state.num_file}/>
        <div>
          <h2>Welcomes</h2>
          <p>{this.state.first_name} {this.state.last_name}</p>
        </div>
        <Logout />
        {this.props.children}
      </div>
    );
  }
}
