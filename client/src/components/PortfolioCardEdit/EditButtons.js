import React, { Component } from "react";
import "./PortfolioCardEdit.css";
import API from "../../utils/API";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

class EditButtons extends Component {

constructor(props) {
  super(props);
  this.state = {
      profile: {},
      projects: [],
      user: "",
      currentProject:{},
      editing: false,
      open: false, 
      snack: false
  }
}

    loadUser = () => {
      API.getUser(this.state.profile.name)
        .then(res => {
          this.setState({ user: res.data})
          this.loadProjects(res.data._id);
        })
        .catch(err => console.log(err));
    }

    loadProjects = (id) => {
      API.getProjects(this.state.user._id)
        .then(res =>{
          console.log(res)
          this.setState({ projects: res.data.Project})
    })
        .catch(err => console.log(err));
    }

    deleteProject = (id, ownerID) => {
      API.deleteProject(id, ownerID)
        .then(res => this.loadProjects())
        .catch(err => console.log(err));
      // API.deleteProject(id)
      //   .then(res => this.loadProjects())
      //   .catch(err => console.log(err));
    }

    toggleEdit = currentProject => {
        this.setState({
          currentProject: currentProject,
          editing: true
        })
    }

    reset = () => {
      this.setState({
        currentProject: {},
        editing: false
      })
    }

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    }

handleOpen = () => {
  this.setState({open: true});
}

handleRequestClose = () => {
  this.setState({
    snack: false,
  })
}

handleClose = () => {
  this.setState({open: false});
}

deleteForever = (event) => {
  event.preventDefault();
  console.log("deleting the project");
  this.props.remove(this.props.id, this.props.user._id)
  this.setState({open: false, snack: true});
}

render() {

  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onClick={this.handleClose}
    />,
    <FlatButton
      label="Delete"
      primary={true}
      keyboardFocused={true}
      onClick={this.deleteForever}
    />
  ];

return (
  <div>
        <Dialog
          title="Are you sure?"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          By clicking delete, you will lose all stored project information.
        </Dialog>
        <Snackbar
          open={this.state.snack}
          message="Project Deleted"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
          />


        <div className="fixed-action-btn horizontal">
        <a onClick={this.handleOpen} className="remove btn-floating red"><i className="material-icons">delete_forever</i></a>
          <a className="btn-floating edit-button" href="#edit-project" onClick= {() => {this.toggleEdit(this.props)}}>
            <i className="material-icons">mode_edit</i>
          </a>
        </div>

    </div>

    );
  }
}

export default EditButtons;