import React, { Component } from "react";
import {Row} from 'react-materialize';
import Nav from '../components/Nav';
import BasicInfoForm from "../components/BasicInfoForm";

class Welcome extends Component {

  render() {
    return (
    <div>
      <Nav />
      <Row>
        <h4 className="login-text">Thanks for signing up! Please fill in your basic information:</h4>
        <BasicInfoForm auth={this.props.auth}/>
      </Row>
     </div>
    );
  }
}

export default Welcome;
