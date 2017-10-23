import React, { Component } from 'react';
import {Row} from 'react-materialize';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';

import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
// injectTapEventPlugin();

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
  customWidth: {
    width: 50,
  },
};


//Technologies used array
const tags_arr = [{title: '-Select Tag-', value: "" }, 
  

  {title: 'HTML', value: 'HTML'}, 
//C++ frameworks
  {title: 'C++', value: 'C++'}, 
  {title: 'CLI', value: 'CLI'},
//JavaScript frameworks
  {title: 'JavaScript', value: 'JavaScript'}, {title: 'JS: Angular', value: 'Angular'},  
    {title: 'JS: Express', value: 'Express'}, {title: 'JS: jQuery', value: 'jQuery'},
    {title: 'JS: Node', value: 'Node.js'}, {title: 'JS: React', value: 'React'}, 
//Perl frameworks
  {title: 'Perl', value: 'Perl'},
//PHP frameworks
  {title: 'PHP', value: 'PHP'},
    {title: 'PHP: Laravel', value: 'Laravel'},  
//Python frameworks
  {title: 'Python', value: 'Python'},
//Ruby frameworks
  {title: 'Ruby', value: 'Ruby'}, 
    {title: 'Ruby: Ruby on Rails', value: 'Ruby on Rails'}, 
//Database
  {title: 'Database', value: 'Database'},
    //NoSQL
    {title: 'DB: NoSQL', value: 'NoSQL'},      
      {title: 'DB: Mongo', value: 'MongoDB'}, {title: 'DB: Mongoose', value: 'Mongoose'},
    //SQL
    {title: 'DB: SQL', value: 'SQL'},
      {title: 'DB: MySQL', value: 'MySQL'}, {title: 'DB: Firebase', value: 'Firebase'},
      

    {title: 'JS: Express', value: 'Express'},  
    {title: 'JS: Node', value: 'Node'},
    {title: 'JS: Express', value: 'Express'},  
    {title: 'JS: Node', value: 'Node'},
    {title: 'JS: Express', value: 'Express'},  
    {title: 'JS: Node', value: 'Node'},
    {title: 'JS: Express', value: 'Express'},  
    {title: 'JS: Node', value: 'Node'},
    {title: 'JS: Express', value: 'Express'},  
    {title: 'JS: Node', value: 'Node'},
    {title: 'JS: Express', value: 'Express'},  
    {title: 'JS: Node', value: 'Node'},
    {title: 'JS: Express', value: 'Express'},  
    {title: 'JS: Node', value: 'Node'}

    

  // ,Bootstrap', 'Materialize', 'Material-ui', 
  // 'Firebase', s
  //  'Swift', 
  // 'Vue', 'Java', 'Git', 'Perl', 
  ];
//Sort array to be displayed alphabetically
// tags_arr.title.sort();
//MenuItem(s) array
const items = [];
// const tags_arr = <MenuItem primaryText="HTML" />;
for (let i = 0; i < tags_arr.length; i++) {
  items.push(<MenuItem value={tags_arr[i].value} key={i} primaryText={`${tags_arr[i].title}`} />);
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

class ModalForm extends Component {

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

renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }
  
  render() {
    const {finished, stepIndex} = this.state;

    return (
      <div style={{width: 380, height: 500, margin: 'auto'}}>
        <Stepper 
          activeStep={stepIndex} 
          orientation='vertical' 
        >
        {/*input Project Title and Description*/}
          <Step>
            <StepLabel>
              Title and Info
            </StepLabel>
            <StepContent>
              <div>
              <TextField
                underlineShow={false}
                type='text'
                floatingLabelText="Project Name"
                fullWidth={true}
              /> 
              <br /> 
              <TextField
                type='text'
                floatingLabelText="What does the project do"
                multiLine={true}
                rows={2}
                fullWidth={true}
              />
              </div>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
        {/*Links to Live Demo, Github, etc*/}
          <Step>
            <StepLabel>
              Links
            </StepLabel>
            <StepContent>


            <div style={styles.block}>
            <Row>
            <Checkbox
              label="Javascript"
              style={styles.checkbox}
            />
            </Row>  
          </div>   

            {this.renderStepActions(1)}
            </StepContent>
          </Step>


          <Step>
            <StepLabel>
              Contributors & Tags
            </StepLabel>
            <StepContent>
              <div>
                <TagsDropDown 
                  id="tag_1"
                  name="technologiesKeywords"
                  onChange={this.handleInputChange} 
                  defaultValue={this.state.technologiesKeywords}
                  style={styles.customWidth}
                  autoWidth={false}
                /> 
                <TagsDropDown 
                  id="tag_2"
                  name="technologiesKeywords"
                  onChange={this.handleInputChange} 
                  defaultValue={this.state.technologiesKeywords}
                  style={styles.customWidth}
                />
              </div>
            <TagsDropDown 
              id="tag_3"
              name="technologiesKeywords"
              onChange={this.handleInputChange} 
              defaultValue={this.state.technologiesKeywords}
            />
            <TagsDropDown 
              id="tag_4"
              name="technologiesKeywords"
              onChange={this.handleInputChange} 
              defaultValue={this.state.technologiesKeywords}
            />
            <TagsDropDown 
              id="tag_5"
              name="technologiesKeywords"
              onChange={this.handleInputChange} 
              defaultValue={this.state.technologiesKeywords}
            />
         

            {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            <a
              href="/edit"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        )}
      </div>
    );
  }
}

export default ModalForm;

