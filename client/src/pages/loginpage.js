import React, { Component } from "react";
import {Row} from 'react-materialize';
import Login from "../components/Login";
import "../App.css";

class Loginpage extends Component {

  render() {
    return (
    <div>
      <Row>
        <Login/>
      </Row>
     </div> 
    );
  }
}

export default Loginpage;