import React, { Component } from "react";
import {Row} from 'react-materialize';
import LoginForm from "../components/LoginForm";

class Login extends Component {

  render() {
    return (
    <div>
      <Row>
        <LoginForm/>
      </Row>
     </div> 
    );
  }
}

export default Login;