import React, { Component } from "react";
import {Row} from 'react-materialize';
import Signup from "../../components/Signup";
import "../../App.css";

class Signuppage extends Component {

  render() {
    return (
    <div>
      <Row>
        <Signup/>
      </Row>
     </div> 
    );
  }
}

export default Signuppage;