import React, { Component } from "react";
import {Row} from 'react-materialize';
// import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

class Signup extends Component {

  render() {
    return (
    <div>
      <Row>
      <h3 className="login-text">No login? Create an Account:</h3>
        <SignupForm/>
      </Row>
     </div> 
    );
  }
}

export default Signup;