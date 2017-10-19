import React, {Component} from "react";
// import {Button, Modal, Icon} from 'react-materialize';
// import {Toast} from "react-materialize";
import "./Form.css";


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

    alert(`Add another?`);

    this.setState({
      project: "",
      description: "",
      technologiesKeywords:"",
      link:""
    });
  };
      //Hello {this.state.firstName} {this.state.lastName} <-- goes between p tags in return()
      
  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (

      //<Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
        //title="Card Title"
        //reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        //<p><a href="#">This is a link</a></p>
      //</Card>
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
          <button onClick={this.handleFormSubmit}>Submit</button>
         
          
         
        </form>
      </div>
    );
  }
}

export default Form;