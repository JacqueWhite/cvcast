import React, { Component } from "react";
import API from "../../utils/API";
import "./ProjectForm.css";
import {Row, Input, Button} from 'react-materialize';
// import Input from "../Input"

class ProjectForm extends Component {
  state = {
    projectName: "",
    image: "",
    description: "",
    technologiesKeywords: "",
    team: "",
    link: "",
    github: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = event => {
    console.log(this.props.user);
    event.preventDefault();
    console.log("handleFormSubmit from ProjectForm.js");
    if (this.state.projectName) {
      var myProject = {
        projectName: this.state.projectName,
        image: this.state.image,
        description: this.state.description,
        technologiesKeywords: this.state.technologiesKeywords,
        team: this.state.team,
        link: this.state.link,
        github: this.state.github,
        userid: this.props.user
      };
      console.log(myProject);
      if (this.props.project.id) {
        API.updateProject(myProject)
          .then(this.props.update())
          .catch(err => console.log(err));
      } else {
        API.saveProject(myProject)
          .then(this.props.update())
          .catch(err => console.log(err));
      }
    }
  };

  componentWillReceiveProps= (nextProps) => {
    console.log("True");
    console.log(nextProps);
}

render() {
  return (
  <form>
    <h2>{this.props.project.description}</h2>
    <Row>
      <Input
        defaultValue={this.props.project.project}
        onChange={this.handleInputChange}
        name="projectName"
        placeholder="Project Name (required)"
        type="text"
      />
      <Input
        defaultValue={this.props.project.image}
        onChange={this.handleInputChange}
        name="image"
        placeholder="image URL (ex:'https://www.myimage.com')"
        type="text"
      />
      <Input
        defaultValue={this.props.project.description}
        onChange={this.handleInputChange}
        name="description"
        placeholder="Project Description / Summary"
        type="text"
      />
      <Input
        defaultValue={this.props.project.team}
        onChange={this.handleInputChange}
        name="team"
        placeholder="Example: Tommy, Jill, Bobby"
        type="text"
      />
		<fieldset>
		<legend>Technologies used</legend>
			<div>
				<Input type="checkbox" name="technologiesKeywords" onChange={this.handleInputChange} defaultValue={this.state.technologiesKeywords}/>
				<label>HTML</label>
			</div>
			<div>
				<Input type="checkbox" name="technologiesKeywords" onChange={this.handleInputChange} defaultValue={this.state.technologiesKeywords}/>
				<label>Javascript</label>
			</div>
			<div>
				<Input type="checkbox" name="technologiesKeywords" onChange={this.handleInputChange} defaultValue={this.state.technologiesKeywords}/>
				<label>CSS and/or frameworks (Bootstrap)</label>
			</div>
			<div>
				<Input type="checkbox" name="technologiesKeywords" onChange={this.handleInputChange} defaultValue={this.state.technologiesKeywords}/>
				<label>Database (mySQL, MongoDB, Firebase, etc)</label>
			</div>
			<div>
			    <label>Other:</label>
				<Input type="text" name="technologiesKeywords" onChange={this.handleInputChange}/>
			</div>
		</fieldset>
      <Input
        defaultValue={this.props.project.link}
        onChange={this.handleInputChange}
        name="link"
        placeholder="Deployed Project Link"
        type="text"
      />
      <Input
        defaultValue={this.props.project.github}
        onChange={this.handleInputChange}
        name="github"
        placeholder="Project GitHub Link"
      />
      <Button
        // disabled={!(this.state.author && this.state.title)}
        onClick={this.handleFormSubmit}
      >
        Submit
      </Button>

    </Row>
    </form>
   );
	}
};
export default ProjectForm;
