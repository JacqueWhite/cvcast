import React, { Component } from "react";
import {Row} from 'react-materialize';
import LoginForm from "../components/LoginForm";
// import SignupForm from "../components/SignupForm";


class Login extends Component {

  render() {
    return (
    <div>
      <Row>
      <h3 className="login-text">Please Login</h3>
        <LoginForm/>
        <h3 className="login-text"><a href="/signup">Sign up</a></h3>
      </Row>
      <h3 className="login-text">Don't have a login? Sign up below</h3>
      <SignupForm/>
     </div>
    );
  }
}

export default Login;
