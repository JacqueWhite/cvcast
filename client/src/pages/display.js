import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import projects from "../projects.json";
import "../App.css";

class Display extends Component {
  // Setting this.state.projects to the projects json array
  state = {
    projects
  };

  removeProject = id => {
    // Filter this.state.projects for friends with an id not equal to the id being removed
    const projects = this.state.projects.filter(project => project.id !== id);
    // Set this.state.projects equal to the new projects array
    this.setState({ projects });
  };

  // Map over this.state.projects and render a ProjectCard component for each project object
  render() {
    return (
      <Wrapper>
        <Title>Projects List</Title>
        {this.state.projects.map(project => (
          <ProjectCard
            removeProject={this.removeProject}
            id={project.id}
            key={project.id}
            title={project.title}
            image={project.image}
            toplink={project.toplink}
            tags={project.tags}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Display;
