import React, { Component } from "react";
import {Row} from 'react-materialize';
// import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

class Signup extends Component {

  render() {
    return (
    <div>
      <Row>
      <h3 className="login-text">Not signed up? Sign up below:</h3>
        <SignupForm/>
      </Row>
     </div> 
    );
  }
}

export default Signup;