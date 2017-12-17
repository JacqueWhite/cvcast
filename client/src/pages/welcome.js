import React, { Component } from "react";
import {Row} from 'react-materialize';
import Nav from '../components/Nav';
import BasicInfoForm from "../components/BasicInfoForm";

class Welcome extends Component {

  state = {
    profile: {},
    projects: [],
    user: ""
  }

  componentWillMount() {
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: {} });
    }
  }

  render() {
    return (
    <div>
      <Nav />
      <Row>
        <h4 className="login-text center">Basic Information</h4>
        <BasicInfoForm auth={this.props.auth}/>
      </Row>
     </div>
    );
  }
}

export default Welcome;
