import React, { Component } from "react";
import PortfolioCard from "../components/PortfolioCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import portfoliocards from "../portfoliocards.json";
import "../App.css";

class Display extends Component {

// Setting this.state.friends to the portfoliocards json array
  state = {
    portfoliocards
  };

  render() {
    return (
      <Wrapper>
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
      </Wrapper>
    );
  }
}


export default Display;
