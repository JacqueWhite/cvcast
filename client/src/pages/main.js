import React, { Component } from "react";
import {Row} from 'react-materialize';
import Home from "../components/Home";
import "../App.css";

class Main extends Component {

  render() {
    return (
    <div>
      <Row>
        <Home/>
      </Row>
     </div> 
    );
  }
}

export default Main;
