/**
 * Import our dependencies
 */
import { Link } from 'react-router';
import React, { Component } from "react";

/**
 * This is our navigation component
 */
export default class Navigation extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  }
  /**
   * Component render method, required and displays the navigation menu
   * @returns { ReactElement }
   */
  render() {
    return (
      <div className="frame bit-1 navigation_container">
      <h3 className="bit-40"><Link to="/main">Visual Analytic</Link></h3>
        <div className="nav_menu">
          <li key={100}><Link to="/main/chart">Chart</Link></li>
          <li key={101}><Link to={'/main/upload/'+this.props.id}>Upload</Link></li>
          <li key={102}><Link to={'/main/regression/'+this.props.id}>Regression</Link></li>
        </div>
      </div>
    );
  }
}
