import React, { Component } from "react";
import {Row} from 'react-materialize';
import PortfolioCard from "../components/PortfolioCard";
import TitleCard from "../components/TitleCard";
import API from "../utils/API";
// import Popup from "../components/Modal";

<<<<<<< HEAD
var currentUser = "anfletcher24@gmail.com";
=======
>>>>>>> test2
class Portfolio extends Component {

  state = {
    profile: {},
    projects: [],
    user: ""
  };

<<<<<<< HEAD
  // componentWillMount() {
  //   this.setState({ profile: {} });
  //   const { userProfile, getProfile } = this.props.auth;
  //   if (!userProfile) {
  //     getProfile((err, profile) => {
  //       this.setState({ profile });
  //     });
  //   } else {
  //     this.setState({ profile: userProfile });
  //   }
  // }
=======
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
>>>>>>> test2

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
  };

  loadProjects = () => {
    API.getProjects()
      .then(res =>
        this.setState({ projects: res.data})
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

//   deleteProject = id => {
//     API.deleteProject(id)
//       .then(res => this.loadProjects())
//       .catch(err => console.log(err));
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

<<<<<<< HEAD

=======
>>>>>>> test2
  render() {
    return (
    <div>
        <Row>
          <TitleCard
            firstName={this.state.user.firstName}
            lastName={this.state.user.lastName}
            linkedIn={this.state.user.linkedIn}
            headshot={this.state.user.headshot}
            email={this.state.user.email}
            gitHubProfile={this.state.user.gitHubProfile}
            bio={this.state.user.bio}
          />
        </Row>
        <Row>
          {this.state.projects.map((portfoliocard) => (
            <PortfolioCard
            projectName={portfoliocard.projectName}
            image={portfoliocard.image}
            description={portfoliocard.description}
            github={portfoliocard.github}
            technologiesKeywords={portfoliocard.technologiesKeywords}
            team={portfoliocard.team}
            link={portfoliocard.link}
            />
          ))}
        </Row>
     </div>
    );
  }
}

export default Portfolio;
