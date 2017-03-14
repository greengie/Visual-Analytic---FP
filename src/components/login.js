import React, { Component } from 'react'
import { render } from 'react-dom'
import LoginHOC from 'react-facebook-login-hoc'
const Router = require('react-router');

const configureLoginProps = {
  scope: 'public_profile',
  xfbml: true,
  cookie: true,
  version: 2.6,
  language: 'en_US',
  appId: '656987957836017'
}

class Login extends Component {
  constructor(props) {
    super(props)

    this.status = this.props.fb.status
    this.login = this.props.fb.login
    this.logout = this.props.fb.logout
  }

  getStatus(response) {
    // console.log(response);
    if (response.authResponse) {
      this.responseApi.call(this, response.authResponse)
    }
  }

  responseApi(res) {
    // console.log(res)
    console.log('token:', res.accessToken)
  }

  checkLoginState() {
    this.status(this.getStatus.bind(this))
  }

  loginFacebook() {
    this.login(this.getStatus.bind(this))
    Router.browserHistory.push('/chart');
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
