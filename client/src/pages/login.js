import React, { Component } from "react";
import {Row} from 'react-materialize';
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

class Login extends Component {

  render() {
    return (
    <div>
      <Row>
      <h2>Please Login</h2>
        <LoginForm/>
      </Row>
      <h2>Don't have a login? Sign up below</h2>
      <SignupForm />
     </div>
    );
  }
}

export default Login;
