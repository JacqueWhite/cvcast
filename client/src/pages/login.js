import React, { Component } from "react";
import {Row} from 'react-materialize';
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";


class Login extends Component {

  render() {
    return (
    <div>
      <Row>

      <h3 className="login-text">Login here:</h3>

      <h2>Please Login</h2>

        <LoginForm/>
        <h3 className="login-text"><a href="/signup">Sign up</a></h3>
      </Row>

     
    </div> 


    );
  }
}

export default Login;
