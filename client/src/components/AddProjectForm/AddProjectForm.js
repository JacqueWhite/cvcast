import React, { Component } from "react";
import API from "../../utils/API";
import "./AddProjectForm.css";
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
// import Snackbar from 'material-ui/Snackbar';
// import Checkbox from 'material-ui/Checkbox';
// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';
// import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import superagent from 'superagent';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';

class AddProjectForm extends Component {
  state = {
    projectName: "",
    image: "",
    description: "",
    technologiesKeywords: [],
    team: "",
    link: "",
    github: "",
    ownerID: this.props.user._id,
    finished: false,
    stepIndex: 0,
    open: false,
    currentProject: {}
  }

  onChange(event){
    var newArray = this.state.technologiesKeywords.slice();    
    newArray.push(event.target.value);   
    this.setState({technologiesKeywords:newArray})
    console.log(newArray);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  // handleFormSubmit = event => {
  //     event.preventDefault();
  //     console.log("oh no robots!");
  //     if (this.state.firstName && this.state.lastName && this.state.email) {
  //       var myUser = {
  //         projectName           : this.state.projectName,
  //         image                 : this.state.image,
  //         description           : this.state.description,
  //         technologiesKeywords  : this.state.technologiesKeywords,
  //         team                  : this.state.team,
  //         link                  : this.state.link,
  //         github                : this.state.github,
  //         ownerID               : this.state.ownerID,             

  //       };
  //       console.log(myUser);
  //       API.saveUser(myUser)
  //         .catch(err => console.log(err));
  //     }
  //   }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("handleFormSubmit from ProjectForm.js");
    if (this.props.editing) {
      this.setState({
        projectName           : this.state.projectName          || this.props.project.projectName,
        image                 : this.state.image                || this.props.project.image,
        description           : this.state.description          || this.props.project.description,
        technologiesKeywords  : this.state.technologiesKeywords || this.props.project.technologiesKeywords,
        team                  : this.state.team                 || this.props.project.team,
        link                  : this.state.link                 || this.props.project.link,
        github                : this.state.github               || this.props.project.github,
        ownerID               : this.state.ownerID              || this.props.project.ownerID               
      }, function() {

        API.updateProject(this.props.project.id, this.state)
          .then(() => {
            this.props.update();
            this.props.toggleEdit();
            console.log("Going to EDIT this project....");
          })
          .catch(err => console.log(err));
      })
    } else {
      this.setState({ ownerID : this.props.user._id, open: true}, () => {
      console.log("Going to save a new project....");
      console.log(this.state);
        API.saveProject(this.state)
          .then(() => {
            this.props.update();
          })
          .catch(err => console.log(err));
      })
    }
  }

  handleFormSubmito = event => {
    event.preventDefault();
    console.log("adding yo project");
    if (this.state.projectName && this.state.image && this.state.description) {
      var myProject = {
        projectName           : this.state.projectName,
        image                 : this.state.image,
        description           : this.state.description,
        technologiesKeywords  : this.state.technologiesKeywords,
        team                  : this.state.team,
        link                  : this.state.link,
        github                : this.state.github,
        ownerID               : this.state.ownerID,
        open                  : true
      }
    this.setState({ ownerID : this.props.user._id}, () => {
      console.log("Going to save a new project....");
      console.log(this.state.ownerID);
        API.saveProject(myProject)
          .then(() => {
            this.props.update();
          })
          .catch(err => console.log(err));
      })
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
      image: photoUrl
    })

    console.log(this.state)
    })

  }

  handleFormEdit = event => {
    event.preventDefault();
    console.log("editing your project");
    if (this.props.editing) {
      this.setState({
        projectName           : this.props.project.projectName,
        image                 : this.props.project.image,
        description           : this.props.project.description,
        technologiesKeywords  : this.props.project.technologiesKeywords,
        team                  : this.props.project.team,
        link                  : this.props.project.link,
        github                : this.props.project.github,
        ownerID               : this.props.project.ownerID
      }, function() {

        API.updateProject(this.props.project.id, this.state)
          .then(() => {
            this.props.update();
            this.props.toggleEdit();
          })
          .catch(err => console.log(err));
      })
    } else {
      alert("Add a new project at the top.")
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
                    defaultValue={this.props.project.project}
                    onChange={this.handleInputChange}
                    name="projectName"
                    placeholder="Project Name (required)"
                    type="text"/>
                </div>
              </div>
              <div className="row form-row">
                <div className="input-field col s12">
                  <input
                  defaultValue={this.props.project.link}

                  onChange={this.handleInputChange}
                  name="link"
                  placeholder="Link URL (ex: https://www.myproject.com)"
                  type="text"/>
                </div>
             </div>
              <div className="row form-row">
                <div className="input-field col s12">
                <input
                  defaultValue={this.props.project.github}

                  onChange={this.handleInputChange}
                  name="github"
                  placeholder="GitHub URL (ex: https://github.com/username/project)"
                  type="text"/>
                </div>
              </div>

            </div>
          );
      case 1:
        return (
          <div>

            <div className="row center">
                <div className="dropzone col s12 center">
                  <Dropzone onDrop={this.uploadFile.bind(this)} value={this.state.image} onChange={this.handleInputChange} style={{border:'dashed 2px #0087F7', padding: 35, margin: `auto`, height: 150, width: 150, borderRadius: `50%`, textAlign: `center`, backgroundImage: `url(${this.state.image})`, backgroundPosition: `center center`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}} name="image">
                  <div className="dropzone dz-message needsclick">Drag or click to upload a Project Image</div>
                  </Dropzone>

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
                  defaultValue={this.props.project.description}

                  onChange={this.handleInputChange}
                  name="description"
                  maxLength="150"
                  placeholder="This is a really cool app that solves a problem"
                  type="text"/>
              </div>
              <div className="input-field col s12">
                  <input
                  defaultValue={this.props.project.team}
                  onChange={this.handleInputChange}
                  name="team"
                  placeholder="Team (ex: Tommy, Jill, Bobby)"
                  type="text"/>
              </div>
            </div>
          </div>
          );
      case 3:
        return (
<div>
        <div>
          <div className="row-project-form">
                <div className="col s4">
                  <input
                    type="checkbox"
                    id="check-1"
                    name="technologiesKeywords"
                    onChange={this.onChange.bind(this)}
                    value="HTML"
                    />
                  <label htmlFor="check-1">HTML</label>
                </div>
                <div className="col s4">
                  <input
                    type="checkbox"
                    id="check-2"
                    name="technologiesKeywords"
                    onChange={this.onChange.bind(this)}
                    value="Javascript"
                    />
                  <label htmlFor="check-2">Javascript</label>
                </div>
                <div className="col s4">
                  <input
                    type="checkbox"
                    id="check-3"
                    name="technologiesKeywords"
                    onChange={this.onChange.bind(this)}
                    value="CSS"
                    />
                  <label htmlFor="check-3">CSS</label>
                </div>
                <div className="col s4">
                  <input
                    type="checkbox"
                    id="check-4"
                    name="technologiesKeywords"
                    onChange={this.onChange.bind(this)}
                    value="SQL"
                    />
                  <label htmlFor="check-4">SQL</label>
                </div>
                <div className="col s4">
                  <input
                    type="checkbox"
                    id="check-5"
                    name="technologiesKeywords"
                    onChange={this.onChange.bind(this)}
                    value="NoSQL"
                    />
                  <label htmlFor="check-5">NoSQL</label>
                </div>
          </div>
          <br/>  
          </div>

</div>
          );
      case 4:
          return (
            <div>
                <a
                href="/portfolio"
                class="waves-effect waves-light btn"
                style={{width: `auto`, paddingRight: 5, paddingLeft: 5}}
                >
                View your public profile
                </a>
              <br/>
              <a
                href="/edit"
                class="waves-effect waves-light btn"
                style={{width: `auto`, paddingRight: 5, paddingLeft: 5}}
                >
                Add more projects
                </a>
            </div>
            );
      default:
        return 'Are you sure you want to submit this project?';
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0'};

    return (
      <div className="card add-project-card">
        <div className="card-content black-text">

        <Stepper activeStep={stepIndex} style={{paddingLeft: 0, paddingRight: 0}} connector={null}>
          <Step style={{paddingLeft: 0, paddingRight: 0, marginBottom: -10}}>
            <StepLabel style={{paddingLeft: 0, paddingRight: 0}}>Title</StepLabel>
          </Step>
          <Step style={{paddingLeft: 0, paddingRight: 0, marginBottom: -10}}>
            <StepLabel style={{paddingLeft: 0, paddingRight: 0}}>Links</StepLabel>
          </Step>
          <Step style={{paddingLeft: 0, paddingRight: 0, marginBottom: -10}}>
            <StepLabel style={{paddingLeft: 0, paddingRight: 0}}>Details</StepLabel>
          </Step>
          <Step style={{paddingLeft: 0, paddingRight: 0, marginBottom: -10}}>
            <StepLabel style={{paddingLeft: 0, paddingRight: 0}}>Tags</StepLabel>
          </Step>
        </Stepper>
        <div style={{textAlign: `center`}}>
          {finished ? (
            <div>
               <FlatButton
                  label="Re-Do"
                  href="/edit"
                  id="back-button"
                  style={{marginRight: 10, width: `20%`}}
                />
              <RaisedButton
                primary={true}
                onClick={this.handleFormSubmit}
                disabled={stepIndex < 4}
                label='Submit'
                style={{display: `inline-flex`, width: `40%`}}
                />
              <Snackbar
                open={this.state.open}
                message="Successfully Added Project!"
                autoHideDuration={4000}
                onRequestClose={this.handleRequestClose}
              />
            </div>
          ) : (
            <div>
              <div>{this.getStepContent(stepIndex)}</div>
              <div style={{width: `100%`}}>
                <FlatButton
                  label="Back"
                  id="back-button"
                  disabled={stepIndex === 0}
                  onClick={this.handlePrev}
                  style={{marginRight: 10, width: `30%`}}
                />
                <RaisedButton
                  primary={true}
                  label='Next'
                  id="next-button"
                  disabled={stepIndex === 4}
                  onClick={this.handleNext}
                  style={{marginRight: 10, width: `30%`}}
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

export default AddProjectForm;