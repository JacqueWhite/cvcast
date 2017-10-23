import React, { Component } from "react";
import {Row} from 'react-materialize';
import Nav from '../components/Nav';
import SignupForm from "../components/SignupForm";

class Login extends Component {

  render() {
    return (
    <div>
      <Nav />
      <Row>
        <h3 className="login-text">Thanks for signing up! Please fill in your basic information:</h3>
        <SignupForm/>
      </Row>
     </div>
    );
  }
}

export default Login;
