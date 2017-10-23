import React, { Component } from 'react';
import ModalForm from './ModalForm';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


//Material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';

// import API from '../../utils/API';
// import ProjectForm from '../ProjectForm';

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
class ProjectModal extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Add Project" onTouchTap={this.handleOpen} />
        <Dialog
          title="Add Project Here"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <ModalForm />
        </Dialog>
      </div>
    );
  }
}

export default ProjectModal;
