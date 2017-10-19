import React, { Component } from "react";
import { Navbar, Button } from 'react-bootstrap';
// import {Parallax} from "react-materialize";

class Main extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated, userHasScopes } = this.props.auth;

    return (
	<div>
	  <div id="index-banner" className="parallax-container">
	    <div className="section no-pad-bot">
	      <div className="container">
	        <h3 className="header center teal-text text-lighten-2">Show and Tell</h3>
	        <div className="row center">
	          <h5 className="header col s12 light">a platform to showcase your projects</h5>
	        </div>
	        <div className="row center">
            <a href="/login" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">start here</a>
            <a href="/portfolio" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">portfolio</a>
            <a href="/edit" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">edit portfolio</a>
              {
                !isAuthenticated() && (
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.goTo.bind(this, 'portfolio')}
                    >
                      Portfolio
                    </Button>
                  )
              }
              {
                  !isAuthenticated() && (
                      <Button
                        bsStyle="primary"
                        className="btn-margin"
                        onClick={this.login.bind(this)}
                      >
                        Log In
                      </Button>
                    )
                }
                {
                  isAuthenticated() && (
                      <Button
                        bsStyle="primary"
                        className="btn-margin"
                        onClick={this.goTo.bind(this, 'profile')}
                      >
                        Profile
                      </Button>
                    )
                }
                {
                  isAuthenticated() && (
                      <Button
                        bsStyle="primary"
                        className="btn-margin"
                        onClick={this.logout.bind(this)}
                      >
                        Log Out
                      </Button>
                    )
                }
		        </div>
	      </div>
	    </div>
	    <div className="parallax"><img src="https://s3.us-east-2.amazonaws.com/jacqueportfolio/home.jpg" alt="background"/></div>
	  </div>

	    <div className="section info">
	      <div className="row">
	        <div className="col s12 m4">
	          <div className="icon-block">
	            <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
	            <h5 className="center">Sign Up</h5>
	            <p className="center light">add your basic info</p>
	          </div>
	        </div>

	        <div className="col s12 m4">
	          <div className="icon-block">
	            <h2 className="center brown-text"><i className="material-icons">group</i></h2>
	            <h5 className="center">Show</h5>

	            <p className="center light">add your projects</p>
	          </div>
	        </div>

	        <div className="col s12 m4">
	          <div className="icon-block">
	            <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
	            <h5 className="center">Tell</h5>
	            <p className="center light">share your page</p>
	          </div>
	        </div>
	      </div>
	    </div>
	  </div>
    );
  }
}

export default Main;
