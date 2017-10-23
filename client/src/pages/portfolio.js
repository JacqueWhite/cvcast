import React, { Component } from "react";
import {Row} from 'react-materialize';
import Nav from '../components/Nav';
import PortfolioCard from "../components/PortfolioCard";
import TitleCard from "../components/TitleCard";
import API from "../utils/API";

class Portfolio extends Component {

  state = {
    profile: {},
    projects: [],
    user: ""
  }

  componentWillMount() {
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });

        this.loadProjects();
        this.loadUser();
      });
    } else {
      this.setState({ profile: userProfile });

      this.loadProjects();
      this.loadUser();
    }
  }

  loadUser = () => {
    console.log("This.State:");
    // console.log(this.state.profile);
    API.getUser(this.state.profile.name)
      .then(res => {
        console.log(res);
        this.setState({ user: res.data})
      }
      )
      .catch(err => console.log(err));
  }

  loadProjects = () => {
    API.getProjects()
      .then(res =>
        this.setState({ projects: res.data})
      )
      .catch(err => console.log(err));
  }

  deleteProject = id => {
    API.deleteProject(id)
      .then(res => this.loadProjects())
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {

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
          {this.state.projects.map((portfoliocard) => (
            <PortfolioCard
            project={portfoliocard.projectName}
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
