import React from "react";
import {Component} from "react";
// import {Button, Modal, Icon} from 'react-materialize';
import "./Form.css";


// const Form = props => (
// 	<Modal
// 	header='Modal Header'
// 	trigger={<Button waves='light'>OR ME!<Icon right>insert_chart</Icon></Button>}>
// 	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
// 		incididunt ut labore et dolore magna aliqua.</p>
// </Modal>	
// );

class Form extends Component {
  // Setting the component's initial state
  state = {
    project: "",
    description: "",
    technologiesKeywords:"",
    link:""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    // alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    alert(`Add another?`);

    this.setState({
      project: "",
      description: "",
      technologiesKeywords:"",
      link:""
    });
  };
      //Hello {this.state.firstName} {this.state.lastName} <-- goes between p tags in return()
      //<button onClick={this.handleFormSubmit}>Submit</button>
  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Add New Project
        </p>
        <form className="form">
          <input
            value={this.state.project}
            name="project"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Project Name"
          />
          <input
          //TODO: ADD IMAGES
          // value={this.state.image}
            // name="image"
            // onChange={this.handleInputChange}
            // type="image"
            // placeholder="image (Optional)"
          //>
          //<input
          
            value={this.state.description}
            name="description"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Description"
          />
          <input
            value={this.state.technologiesKeywords}
            name="technologiesKeywords"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Technologies Used"
          />
          <input
            //value={this.state.projects.team}
            name="team"
            // onChange={this.handleInputChange}
            type="text"
            placeholder="Team Members"
          />
          <input
            value={this.state.link}
            name="link"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Link to Live"
          />
          <input
            //value={this.state.projects.github}
            name="github"
            // onChange={this.handleInputChange}
            type="text"
            placeholder="Link to Github"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;