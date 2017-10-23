import React, { Component } from "react";
import {Row} from 'react-materialize';
import Nav from '../components/Nav';
import BasicInfoForm from "../components/BasicInfoForm";

class Login extends Component {

  render() {
    return (
    <div>
      <Nav />
      <Row>
        <h4 className="login-text">Thanks for signing up! Please fill in your basic information:</h4>
        <BasicInfoForm/>
      </Row>
     </div>
    );
  }
}

export default Login;
