import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
// import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

//Material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';

// import API from '../../utils/API';
// import ProjectForm from '../ProjectForm';

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

//Technologies used array
const tags_arr = ['*Select Tag*', 'HTML', 'JavaScript', 'CSS', 'jQuery', 'React', 'MongoDB', 'SQL', 'NoSQL', 'MySQL', 'Express', 'Node.js', 'Bootstrap', 'Materialize', 'Material-ui', 'Firebase', ];
//Sort array to be displayed alphabetically
tags_arr.sort();
//MenuItem(s) array
const items = [];
// const tags_arr = <MenuItem primaryText="HTML" />;
for (let i = 0; i < tags_arr.length; i++) {
  items.push(<MenuItem value={i} key={i} primaryText={`${tags_arr[i]}`} />);
}

class TagsDropDown extends Component {

  constructor(props) {
    super(props);
    this.state = {value: 0};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <SelectField maxHeight={300} value={this.state.value} onChange={this.handleChange}>
          {items}
      </SelectField>
    );
  }
}



/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class HorizontalLinearStepper extends Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Project Title and Description';
      case 1:
        return (
          <div>
            <TagsDropDown />
            <TagsDropDown />
            <TagsDropDown />
          </div>
        );
      case 2:
        return (
          <div style={styles.block}>
            <Checkbox
              label="HTML"
              // <label htmlFor="check-1">HTML</label>
              style={styles.checkbox}
              //id="check-1" name="technologiesKeywords" onChange={this.handleInputChange} defaultValue={this.state.technologiesKeywords}
            />
            <Checkbox
              label="Javascript"
              style={styles.checkbox}
              // <input type="checkbox" id="check-2" name="technologiesKeywords" onChange={this.handleInputChange} defaultValue={this.state.technologiesKeywords}/>
              // <label htmlFor="check-2">Javascript</label>
            />
            <Checkbox
              label="CSS"
              style={styles.checkbox}
              // <input type="checkbox" id="check-3" name="technologiesKeywords" onChange={this.handleInputChange} defaultValue={this.state.technologiesKeywords}/>
              // <label htmlFor="check-3">CSS and/or frameworks (Bootstrap)</label>
            />
            <Checkbox
              label="Database"
              style={styles.checkbox}
              // <input type="checkbox" id="check-4" name="technologiesKeywords" onChange={this.handleInputChange} defaultValue={this.state.technologiesKeywords}/>
              // <label htmlFor="check-4">Database (mySQL, MongoDB, Firebase, etc)</label>
            />
            <Checkbox
              label="Other"
              style={styles.checkbox}
              // <input type="text" id="other" name="technologiesKeywords" onChange={this.handleInputChange} defaultValue={this.state.technologiesKeywords} placeholder="Other"/>
              />
              
              
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
            <StepLabel>Title and Info</StepLabel>
          </Step>
          <Step>
            <StepLabel>Links</StepLabel>
          </Step>
          <Step>
            <StepLabel>Contributors</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <p>
              <a
                href="/edit"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to start over.
            </p>
          ) : (
            <div>
              <p>{this.getStepContent(stepIndex)}</p>
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  primary={true}
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




/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
class NewProjectButton extends Component {
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
          <HorizontalLinearStepper />
        </Dialog>
      </div>
    );
  }
}

export default NewProjectButton;
