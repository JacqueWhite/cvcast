import React, { Component } from "react";
import { Redirect } from 'react-router'
import API from "../../utils/API";
import "./BasicInfoForm.css";
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import superagent from 'superagent';
import Dialog from 'material-ui/Dialog';

class BasicInfoForm extends Component {
  constructor () {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      headshot: "",
      linkedIn: "",
      gitHubProfile: "",
      bio: "",
      finished: false,
      incomplete: true,
      stepIndex: 0,
      open: false,
      snack: false
    }
  }

  componentWillMount = () => {
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
          .then(() => {
            this.setState({snack:true, incomplete:false});
          })
          .catch(err => console.log(err));
      }
    }

  uploadFile(files) {
    console.log('uploadFile:  ')
    const image = files[0]
    const cloudName = 'djjres1vh'
    const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'
    const timestamp = Date.now()/1000
    const uploadPreset = 'znke3mj4'

    const paramsStr = "timestamp="+timestamp+'&upload_preset='+uploadPreset+'SmzbJfKhVTzPjTzyxOWIkRzJu7Q'

    //cloudinarys security for secret key
    const signature = sha1(paramsStr)
    const params = {
      'api_key': '786238863114982',
      'timestamp': timestamp,
      'upload_preset': uploadPreset,
      'signature': signature
    }

    let uploadRequest = superagent.post(url)
    uploadRequest.attach('file', image)

    Object.keys(params).forEach((key) => {
      uploadRequest.field(key, params[key])
    })

    uploadRequest.end((err, resp) => {
      if (err){
        alert(err)
        return
      }
      console.log('UPLOAD COMPLETE: '+JSON.stringify(resp.body))
      const uploaded = resp.body
      const photoUrl = resp.body.secure_url

      this.setState({
        headshot: photoUrl
      })

      console.log(this.state)
      })

    }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  handleRequestClose = () => {
    this.setState({
      snack: false
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
                 <Dropzone onDrop={this.uploadFile.bind(this)} value={this.state.headshot} onChange={this.handleInputChange} style={{border:'dashed 2px #0087F7', padding: 35, margin: `auto`, height: 150, width: 150, borderRadius: `50%`, textAlign: `center`, backgroundImage: `url(${this.state.headshot})`, backgroundPosition: `center center`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}}>
                  <div className="dropzone dz-message needsclick">Drag or click to upload a Profile Picture</div>
                  </Dropzone>
                  <br/>
                  <p>Please wait until photo uploads above.</p>
              </div>
            </div>
          </div>
          );
      case 2:
        return (
          <div>
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
      case 3:
        return (
          <div>
              <div className="row form-row">
                <div className="input-field col s12">
                  <textarea rows="40" cols="40"
                    value={this.state.bio}
                    onChange={this.handleInputChange}
                    name="bio"
                    placeholder="Tell us about yourself"
                    style={{height: `6rem`, width: `70%`, backgroundColor: `transparent`, border: `solid #00bcd4 2px`}}
                  />
                </div>
              </div>
          </div>
          );
      case 4:
        return (
          <div>
              <div className="row form-row">
                <div className="col s12">
              <h3>What next?</h3>
              <p>Now that you've set up your basic information, let's go add some projects.</p>
              <RaisedButton
                primary={true}
                href="/edit"
                label='Add Projects'
                style={{width: `auto`}}
                />
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
    const contentStyle = {margin: '0 16px'}
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Save"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleFormSubmit}
      />,
    ];

    return (
      <div className="card basic-info-card">
        <div className="card-content black-text">

        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Basic Info</StepLabel>
          </Step>
          <Step>
            <StepLabel>Photo</StepLabel>
          </Step>
          <Step>
            <StepLabel>Links</StepLabel>
          </Step>
          <Step>
            <StepLabel>Bio</StepLabel>
          </Step>
        </Stepper>

        <div style={contentStyle}>
          {finished ? (
            <div>
              <Dialog
                title="Ready to submit your profile?"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
              >
                Click "cancel" to go back and edit
              </Dialog>
               <FlatButton
                  label="Start Over"
                  href="/welcome"
                  id="back-button"
                  style={{marginRight: 10, width: `15%`}}
                />
              <RaisedButton
                primary={true}
                onClick={this.handleOpen}
                disabled={stepIndex < 3}
                label='Submit'
                style={{marginRight: 10, width: `30%`}}
                />
              <RaisedButton
                href="/edit"
                disabled={this.state.incomplete}
                label='Finish'
                style={{marginRight: 10, width: `30%`, backgroundColor: `#ef9a9a`}}
                />
              <Snackbar
                open={this.state.snack}
                message="Profile Created"
                autoHideDuration={4000}
                onRequestClose={this.handleRequestClose}
              />

            </div>
          ) : (
            <div>
              <div>{this.getStepContent(stepIndex)}</div>
              <div style={{marginTop: 12}}>
                <RaisedButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onClick={this.handlePrev}
                  style={{marginRight: 10, width: `40%`, textAlign: `center`, backgroundColor: `snow`}}
                />
                <RaisedButton
                  primary={true}
                  label='Next'
                  disabled={stepIndex === 4}
                  onClick={this.handleNext}
                  style={{marginRight: 10, width: `40%`}}
                />
              </div>
            </div>
          )}
          </div>

        </div>
      </div>
    );
  }
}

export default BasicInfoForm;
