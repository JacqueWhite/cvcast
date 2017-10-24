import React, { Component } from "react";
import API from "../../utils/API";
import "./ProjectForm.css";

class ProjectForm extends Component {
  state = {
    projectName: "",
    image: "",
    description: "",
    technologiesKeywords: "",
    team: "",
    link: "",
    github: "",
    ownerID: this.props.user._id
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

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
          })
          .catch(err => console.log(err));
      })
    } else {
      this.setState({ ownerID : this.props.user._id }, () => {
      console.log("Going to save a new project....");
      console.log(this.state);
        API.saveProject(this.state)
          .then(() => {
            this.props.update();
            this.loadProjects();
          })
          .catch(err => console.log(err));
      })
    }
  };


render() {
  return (

<div>
  <div className="row">
    <div className="col s12">
      <div className="card project-form">
        <div className="card-content">

          <span className="card-title">
            <div className ="row row-project-form">
            <div className="input-field col s4">
              <input
                defaultValue={this.props.project.project}
                onChange={this.handleInputChange}
                name="projectName"
                placeholder="Project Name (required)"
                type="text"/>
            </div>

              <div className="input-field col s4">
                  <input
                  defaultValue={this.props.project.link}
                  onChange={this.handleInputChange}
                  name="link"
                  placeholder="Link URL (ex: https://www.myproject.com)"
                  type="text"/>
              </div>

              <div className="input-field col s4">
                <input
                  defaultValue={this.props.project.github}
                  onChange={this.handleInputChange}
                  name="github"
                  placeholder="GitHub URL (ex: https://github.com/username/project)"
                  type="text"/>
              </div>

            </div>
          </span>

          <div className ="row row-project-form">

              <div className="input-field col s4">
                  <input
                  defaultValue={this.props.project.image}
                  onChange={this.handleInputChange}
                  name="image"
                  placeholder="Image URL (ex: https://www.myimage.com)"
                  type="text"/>
              </div>

              <div className="input-field col s6">
                  <input
                  defaultValue={this.props.project.team}
                  onChange={this.handleInputChange}
                  name="team"
                  placeholder="Team (ex: Tommy, Jill, Bobby)"
                  type="text"/>
              </div>

          </div>

          <div className="row row-project-form">
            <div className="input-field col s12">
              <input
              defaultValue={this.props.project.description}
              onChange={this.handleInputChange}
              name="description"
              maxLength="150"
              placeholder="This is a really cool app that solves a problem"
              type="text"/>
            </div>
          </div>

          <div className="row row-project-form">
              <legend>Technologies used</legend>
                <div className="input-field col s12 m3 l2">
                  <input
                    type="checkbox"
                    id="check-1"
                    name="technologiesKeywords"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.technologiesKeywords}
                    />
                  <label htmlFor="check-1">HTML</label>
                </div>
                <div className="input-field col s12 m2 l2">
                  <input
                    type="checkbox"
                    id="check-2"
                    name="technologiesKeywords"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.technologiesKeywords}
                    />
                  <label htmlFor="check-2">JavaScript</label>
                </div>
                <div className="input-field col s12 m3 l2">
                  <input
                    type="checkbox"
                    id="check-3"
                    name="technologiesKeywords"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.technologiesKeywords}
                    />
                  <label htmlFor="check-3">CSS</label>
                </div>
                <div className="input-field col s12 m3 l2">
                  <input
                    type="checkbox"
                    id="check-4"
                    name="technologiesKeywords"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.technologiesKeywords}
                    />
                  <label htmlFor="check-4">Database</label>
                </div>
                <div className="input-field col s12 m3 l2">
                  <input
                    type="text"
                    id="other"
                    name="technologiesKeywords"
                    onChange={this.handleInputChange}
                    defaultValue={this.state.technologiesKeywords}
                    placeholder="Other"/>
                </div>
          </div>

            <div className="card-action">
              <button
                // disabled={!(this.state.author && this.state.title)}
                className="btn waves-effect waves-light project-submit"
                type="submit"
                onClick={this.handleFormSubmit}
                name="action">Add Project
                <i className="material-icons right">send</i>
                </button>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
   );
	}
};
export default ProjectForm;
