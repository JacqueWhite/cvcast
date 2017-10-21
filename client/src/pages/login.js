import React, { Component } from "react";
import {Row} from 'react-materialize';
import SignupForm from "../components/SignupForm";

class Login extends Component {

  render() {
    return (
    <div>
      <Row>
      <h3 className="login-text">Thanks for logging in, add your details below:</h3>
      <SignupForm/>
      </Row>
     </div>
    );
  }
}

export default Login;
