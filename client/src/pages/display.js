import React, { Component } from "react";
import {Row} from 'react-materialize';
import PortfolioCard from "../components/PortfolioCard";
import portfoliocards from "../portfoliocards.json";
import "../App.css";

class Display extends Component {

// Setting this.state.friends to the portfoliocards json array
  state = {
    portfoliocards
  };

  render() {
    return (
    <div>
      <Row>
        {this.state.portfoliocards.map(portfoliocard => (
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


export default Display;
