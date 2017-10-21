import React, { Component } from "react";
import {Row} from 'react-materialize';
import Nav from '../components/Nav';
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

class Login extends Component {

  render() {
    return (
    <div>
      <Nav />
      <Row>
      <h3 className="login-text">Please Login</h3>
        <LoginForm/>
      </Row>
      <h3 className="login-text">Don't have a login? Sign up below</h3>
      <SignupForm/>
     </div>
    );
  }
}

export default Login;
