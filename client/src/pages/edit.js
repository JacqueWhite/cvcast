import React, { Component } from "react";
import {Row} from 'react-materialize';
import Nav from '../components/Nav';
import PortfolioCardEdit from "../components/PortfolioCardEdit";
import TitleCard from "../components/TitleCard";
// import ProjectForm from "../components/ProjectForm";
import API from "../utils/API";
import AddProjectForm from '../components/AddProjectForm';

class Edit extends Component {

    state = {
      profile: {},
      projects: [],
      user: "",
      currentProject:{},
      editing: false,
      deleted: false
    }

    componentWillMount() {
      const { userProfile, getProfile } = this.props.auth;
      if (!userProfile) {
        getProfile((err, profile) => {
          this.setState({ profile });
          this.loadUser();
        });
      } else {
        this.setState({ profile: userProfile });
        this.loadUser();
      }
    }

    loadUser = () => {
      API.getUser(this.state.profile.email)
        .then(res => {
          this.setState({ user: res.data})
          this.loadProjects(res.data._id);
        })
        .catch(err => console.log(err));
    }

    loadProjects = (id) => {
      API.getProjects(this.state.user._id)
        .then(res => {
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
      if (this.state.editing) {
        this.reset();
      } else {
        this.setState({
          currentProject: currentProject,
          editing: true
        })
      }
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


  render() {
    console.log(this.state);
    return (
    <div>
      <Nav firstName={this.state.user.firstName} />
        <Row>
          <TitleCard
            firstName={this.state.user.firstName}
            lastName={this.state.user.lastName}
            linkedIn={this.state.user.linkedIn}
            headshot={this.state.user.headshot}
            email={this.state.user.email}
            bio={this.state.user.bio}
          />
        </Row>
        <Row>
          <AddProjectForm
            reset={this.reset}
            key={this.state.currentProject.id}
            user={this.state.user}
            update={this.loadProjects}
            project={this.state.currentProject}
            editing={this.state.editing}
            toggleEdit={this.toggleEdit}
            />
        </Row>
        {/*
        <Row>
          <ProjectForm
            reset={this.reset}
            key={this.state.currentProject.id}
            user={this.state.user}
            update={this.loadProjects}
            project={this.state.currentProject}
            editing={this.state.editing}
            toggleEdit={this.toggleEdit}
            />
        </Row>
        */}
        <Row>
          {this.state.projects.map((portfoliocard) => (
            <PortfolioCardEdit
              id={portfoliocard._id}
              projectName={portfoliocard.projectName}
              image={portfoliocard.image}
              description={portfoliocard.description}
              team={portfoliocard.team}
              link={portfoliocard.link}
              github={portfoliocard.github}
              technologiesKeywords={portfoliocard.technologiesKeywords}
              deleted={this.state.deleted}
              remove={this.deleteProject}
              edit={this.toggleEdit}
              user={this.state.user}
            />
          ))}
        </Row>
     </div>
    );
  }
}

export default Edit;