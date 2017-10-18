import React, { Component } from "react";
import {Row} from 'react-materialize';
import PortfolioCardEdit from "../../components/PortfolioCard";
import TitleEdit from "../../components/Title";
import user from "../../user.json";
import "../../App.css";

class EditDisplay extends Component {

// Setting this.state.friends to the portfoliocards json array
  state = {
    user
  };

  render() {
    return (
    <div>
        <Row>
          <TitleEdit 
            name={this.state.user.name}
            linkedIn={this.state.user.linkedIn}
            headshot={this.state.user.headshot}
            email={this.state.user.email}
            bio={this.state.user.bio}
          />
        </Row>
        <Row>
          {this.state.user.projects.map(portfoliocard => (
            <PortfolioCardEdit
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


export default EditDisplay;
