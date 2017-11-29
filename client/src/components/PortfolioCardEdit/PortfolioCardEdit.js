import React, { Component } from "react";
import "./PortfolioCardEdit.css";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

class EditButtons extends Component {

constructor(props) {
  super(props);
  this.state = {open: false, snack: false};
};

handleOpen = () => {
  this.setState({open: true});
};

handleRequestClose = () => {
  this.setState({
    snack: false,
  });
}

handleClose = () => {
  this.setState({open: false});
};

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
    />,
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
          <a className="btn-floating edit-button" href="#edit-project" onClick= {() => {this.props.edit(this.props)}}>
            <i className="material-icons">mode_edit</i>
          </a>

    );
  }

const PortfolioCardEdit = props => (

<div>
    <div className="col s12 m6 l4">
        <div className="card portfolio-card">

            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={props.image} alt={props.project}/>
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">{props.projectName}
                  <div className="fixed-action-btn horizontal">
                    <a className="btn-floating edit-button" href="#edit-project" onClick= {() => {props.edit(props)}}>
                      <i className="material-icons">mode_edit</i>
                    </a>
                    <ul>
                       <li><a className="remove btn-floating red" onClick = {() => props.remove(props.id, props.user._id)}><i className="material-icons">delete_forever</i></a></li>
                    </ul>
                  </div>
                </span>
                <h6><a href={props.link} target="_blank">See it Live</a></h6>
                <hr/>
              <div>
                {props.technologiesKeywords.map(tag => (
                <div className="chip"><a href={`/${tag}`} target="_blank">{tag}</a></div>
                ))}
              </div>
              <i className="material-icons right bottom activator">arrow_forward</i>
            </div>

            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"><a href={props.link} target="_blank">{props.project}</a><i className="material-icons right">close</i></span>
                <p><span className="about-project">What is it: </span><br/>{props.description}</p>
                <p><span className="about-project">See the code on <a href={props.github} target="_blank"> GitHub</a></span></p>
                <p><span className="about-project">Team: </span>{props.team}</p>
                <hr/>
                <p><span className="about-project">Technologies & Keywords: </span></p>
                {props.technologiesKeywords.map(tag => (
                <div className="chip"><a href={`/${tag}`} target="_blank">{tag}</a></div>
                ))}
           </div>

        </div>
    </div>
    <div id={props.project}></div>
</div>
);

export default PortfolioCardEdit;

