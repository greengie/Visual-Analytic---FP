import React, { Component } from "react";
const Router = require('react-router');

export default class Logout extends Component {

  logoutFacebook(){
    FB.logout(function(response) {
      console.log('press button');
      Router.browserHistory.push('/');
    });
  }

  render() {
    return (
      <div>
        <button id='logout' type='button' onClick={this.logoutFacebook} >Logout</button>
      </div>
    );
  }
}
