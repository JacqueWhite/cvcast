import React from "react";
import "./Home.css";

const Home = props => (
<div>
  <div id="index-banner" className="parallax-container">
    <div className="section no-pad-bot">
      <div className="container">
        <h3 className="header center teal-text text-lighten-2">Show and Tell</h3>
        <div className="row center">
          <h5 className="header col s12 light">a platform to showcase your projects</h5>
        </div>
        <div className="row center">
          <a href="/signup" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">start here</a>
          <a href="/portfolio" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">portfolio</a>
          <a href="/edit" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">edit portfolio</a>
        </div>
      </div>
    </div>
    <div className="parallax"><img src="https://s3.us-east-2.amazonaws.com/jacqueportfolio/home.jpg" alt="background"/></div>
  </div>

  <div className="container">
    <div className="section">
      <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
            <h5 className="center">Sign Up</h5>
            <p className="light">add your basic info</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons">group</i></h2>
            <h5 className="center">Show</h5>

            <p className="light">add your projects</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
            <h5 className="center">Tell</h5>
            <p className="light">share your page</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);

export default Home;
