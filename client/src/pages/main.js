import React, { Component } from "react";

class Main extends Component {
  state = {
    authenticated: false
  }

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login = () => {
    this.props.auth.login();
  }

  logout = () => {
    this.props.auth.logout();
    this.setState({authorized: this.props.auth.isAuthenticated()})
  }

  componentDidMount = () => this.setState({authorized: this.props.auth.isAuthenticated()})

  render() {
    const { isAuthenticated } = this.props.auth;

    console.log(this.logout, this.login, isAuthenticated())

    return (
	<div>
	  <div id="index-banner">
	    <div className="section no-pad-bot">
	      <div className="container">
	        <h3 className="header center white-text text-lighten-2">cvcast</h3>
	        <div className="row center">
	          <h4 className="header col s12 light white-text">a platform to showcase your projects</h4>
	        </div>
	        <div className="row center">
             {
                isAuthenticated() && (
                  <a
                    className="waves-effect waves-light btn-large"
                      onClick={this.goTo.bind(this, 'portfolio')}
                    >
                      Portfolio
                  </a>
                )
              }
              {
                  isAuthenticated() && (
                      <a
                        className="waves-effect waves-light btn-large"
                        onClick={this.goTo.bind(this, 'welcome')}
                      >
                        Add Your Basic Info
                      </a>
                    )
                }
                {
                  !isAuthenticated() && (
                      <a
                        className="waves-effect waves-light btn-large"
                        onClick={this.login.bind(this)}
                      >
                        Log In
                      </a>
                    )
                }
                {
                  isAuthenticated() && (
                      <a
                        className="waves-effect waves-light btn-large"
                        onClick={this.logout.bind(this)}
                      >
                        Log Out
                      </a>
                    )
                }
		        </div>
	      </div>
	    </div>
	    <div className="parallax">
        <div className="homepage-hero-module">
            <div className="video-container">
                <div className="filter"></div>
                <video autoPlay loop className="fillWidth">
                    <source src="https://s3.us-east-2.amazonaws.com/cvcast/Very-Open-Space.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                    <source src="https://s3.us-east-2.amazonaws.com/cvcast/Very-Open-Space.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
                </video>
                <div className="poster hidden">
                    <img src="https://s3.us-east-2.amazonaws.com/cvcast/Very-Open-Space.jpg" alt=""/>
                </div>
            </div>
  	    </div>
      </div>

	      <div className="row about">
	        <div className="col s12 m4 l4">
	          <div className="icon-block">
	            <h2 className="center black-text"><i className="material-icons flow-text">vpn_key</i></h2>
	            <h5 className="center">Sign Up</h5>
	            <p className="center light black-text flow-text">add your basic info</p>
	          </div>
	        </div>

	        <div className="col s12 m4 l4">
	          <div className="icon-block">
	            <h2 className="center black-text"><i className="material-icons">add_circle</i></h2>
	            <h5 className="center">Show</h5>

	            <p className="center light black-text flow-text">add your projects</p>
	          </div>
	        </div>

	        <div className="col s12 m4 l4">
	          <div className="icon-block">
	            <h2 className="center black-text"><i className="material-icons">share</i></h2>
	            <h5 className="center">Cast</h5>
	            <p className="center light black-text flow-text">share your cv</p>
	          </div>
	        </div>
	      </div>

	    </div>
	  </div>

    );
  }
}

export default Main;
