import React, { Component } from "react";
import {Row} from 'react-materialize';
import PortfolioCard from "../components/PortfolioCard";
import TitleCard from "../components/TitleCard";
import user from "../user.json";

class Portfolio extends Component {

  state = {
    user
  };

  render() {
    return (
    <div>
        <Row>
          <TitleCard
            name={this.state.user.name}
            linkedIn={this.state.user.linkedIn}
            headshot={this.state.user.headshot}
            email={this.state.user.email}
            bio={this.state.user.bio}
          />
        </Row>
        <Row>
          {this.state.user.projects.map(portfoliocard => (
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