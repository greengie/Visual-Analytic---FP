import React, { Component } from "react";

// import Navigation from './navigation';
// import Chart from './chart';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
