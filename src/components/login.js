import React, { Component } from 'react';
import { render } from 'react-dom';
import LoginHOC from 'react-facebook-login-hoc';
import axios from 'axios';
const Router = require('react-router');

const configureLoginProps = {
  scope: 'public_profile',
  xfbml: true,
  cookie: true,
  version: 2.6,
  language: 'en_US',
  appId: '656987957836017'
};

const API_URL = 'http://128.199.99.233:3000/api/';

class Login extends Component {
  constructor(props) {
    super(props)

    this.status = this.props.fb.status;
    this.login = this.props.fb.login;
    this.logout = this.props.fb.logout;
  }

  getStatus(response) {
    // console.log(response);
    FB.api('/'+response.authResponse.userID, {fields: 'first_name'},function(response1) {
      var first_name = response1['first_name'];
      // console.log(first_name);
      FB.api('/'+response.authResponse.userID, {fields: 'last_name'},function(response2) {
        var last_name = response2['last_name'];
        // console.log(first_name);
        // console.log(last_name);
        // console.log(response.authResponse.userID);
        axios.post(API_URL+'user', {
            userID: response.authResponse.userID,
            first_name: first_name,
            last_name: last_name
          })
          .then(function (response) {
            Router.browserHistory.push({
              pathname: '/main',
              query: response.data[0]
            });
            // console.log(response.data[0]);
          })
          .catch(function (error) {
            console.log(error);
          });
      });
    });
  }

  responseApi(res) {
    // console.log(res)
    console.log('token:', res.accessToken);
  }

  checkLoginState() {
    this.status(this.getStatus.bind(this));
  }

  loginFacebook() {
    this.login(this.getStatus.bind(this));
  }

  // logoutFacebook() {
  //   this.logout()
  // }

  render() {
    return (
      <div>
        <button onClick={ this.loginFacebook.bind(this) }>Facebook Login</button>
      </div>
    );
  }
}

export default LoginHOC(configureLoginProps)(Login);
