import React, { Component } from "react";
import API from "../../utils/API";
import "./BasicInfoForm.css";
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

class BasicInfoForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    headshot: "",
    linkedIn: "",
    gitHubProfile: "",
    bio: "",
    finished: false,
    stepIndex: 0,
    open: false
  }

  componentWillMount() {
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        console.log("!userProfile");
        this.setState({ email: profile.name });
      });
    } else {
      console.log("userProfile");
      this.setState({ email: userProfile.name });
    }
  }

  loadUser = () => {
    API.getUser(this.state.profile.name)
      .then(res => {
        console.log(res);
        this.setState({ user: res.data})
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = event => {
    // console.log(this.state.email);
      event.preventDefault();

      if (this.state.firstName && this.state.lastName && this.state.email) {
        var myUser = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          headshot: this.state.headshot,
          linkedIn: this.state.linkedIn,
          gitHubProfile: this.state.gitHubProfile,
          bio: this.state.bio
        }
        console.log(myUser);
        API.saveUser(myUser)
          .catch(err => console.log(err));
      }
    }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 3,
    });
  }

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
         return (
          <div>
              <div className="row form-row">
                <div className="input-field col s12">
                  <input
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    name="firstName"
                    placeholder="First Name(required)"
                    type="text"
                  />
                </div>
              </div>
              <div className="row form-row">
                <div className="input-field col s12">
                  <input
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    name="lastName"
                    placeholder="Last Name (required)"
                    type="text"
                  />
                  </div>
             </div>
              <div className="row form-row">
                <div className="input-field col s12">
                  <input
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder="Email Address (required)"
                    type="text"
                  />
                  </div>
              </div>
            </div>
          );
      case 1:
        return (
          <div>
            <div className="row form-row">
              <div className="input-field col s12">
              <input
                value={this.state.headshot}
                onChange={this.handleInputChange}
                name="headshot"
                placeholder="Add a link to a profile picture."
                type="text"
              />
              </div>
            </div>
            <div className="row form-row">
              <div className="input-field col s12">
                <input
                  value={this.state.linkedIn}
                  onChange={this.handleInputChange}
                  name="linkedIn"
                  placeholder="Add your linkedIn profile link."
                  type="text"
                />
              </div>
            </div>
            <div className="row form-row">
              <div className="input-field col s12">
                <input
                  value={this.state.gitHubProfile}
                  onChange={this.handleInputChange}
                  name="gitHubProfile"
                  placeholder="Add your GitHub profile link."
                  type="text"
                />
            </div>
          </div>
        </div>
        );
      case 2:
        return (
          <div>
              <div className="row form-row">
                <div className="input-field col s12">
                  <textarea rows="10" cols="50"
                    value={this.state.bio}
                    onChange={this.handleInputChange}
                    name="bio"
                    placeholder="Tell us about yourself."
                  />
                </div>
              </div>
          </div>
          );
      case 3:
        return (
          <div>
            <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
              <div className="row form-row">
                <div className="col s12">
                  <button
                    onClick={this.handleFormSubmit}
                    type="submit"
                    >
                    Commit Profile
                  </button>
                  <Snackbar
                    open={this.state.open}
                    message="Successfully Added Basic Info!"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                  />
                </div>
              </div>
            </div>
          </div>
          );
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Basic Info</StepLabel>
          </Step>
          <Step>
            <StepLabel>Links</StepLabel>
          </Step>
          <Step>
            <StepLabel>Bio</StepLabel>
          </Step>
          <Step>
            <StepLabel>Create Profile</StepLabel>
          </Step>
          <Step>
            <StepLabel>Add Projects</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <div>
              <a
                href="/edit"
                >
                Thanks for adding a user! Go add projects.
                </a>
            </div>
          ) : (
            <div>
              <div>{this.getStepContent(stepIndex)}</div>
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  primary={true}
                  label='Next'
                  disabled={stepIndex === 4}
                  onTouchTap={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default BasicInfoForm;
