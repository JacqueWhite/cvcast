import React, { Component } from "react";
import {Row} from 'react-materialize';
import PortfolioCard from "../../components/PortfolioCard";
// import Title from "../../components/Title";
import API from "../../utils/api";
import "../../App.css";

class Portfolio extends Component {

// Setting this.state.friends to the portfoliocards json array
  state = {
    user,
    projects: []
  };

  loadUser = () => {
    API.getUser()
      .then(res =>
        this.setState({ user: res.data})
      )
      .catch(err => console.log(err));
  };

  loadProjects = () => {
    API.getProjects()
      .then(res =>
        this.setState({ projects: res.data})
      )
      .catch(err => console.log(err));
  };

  deleteProject = id => {
    API.deleteProject(id)
      .then(res => this.loadProjects())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadProjects())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
    <div>
        {/* <Row>
          <Title
            name={this.state.user.name}
            linkedIn={this.state.user.linkedIn}
            headshot={this.state.user.headshot}
            email={this.state.user.email}
            bio={this.state.user.bio}
          />
        </Row> */}
        <Row>
          {this.state.projects.map(portfoliocard => (
            <PortfolioCard
              id={portfoliocard.id}
              key={portfoliocard.id}
              project={portfoliocard.project}
              image={portfoliocard.image}
              description={portfoliocard.description}
              team={portfoliocard.team}
              link={portfoliocard.link}
              github={portfoliocard.github}
              technologiesKeywords={portfoliocard.technologiesKeywords}
            />
          ))}
        </Row>
     </div>
    );
  }
}


export default Portfolio;
