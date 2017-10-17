import React, { Component } from "react";
import {Row} from 'react-materialize';
import PortfolioCard from "../../components/PortfolioCard";
// import portfoliocards from "../../portfoliocards.json";
import "../../App.css";
import api from "../../utils/api";


class Display extends Component {
// Setting this.state.friends to the portfoliocards json array
  state = {
    // portfolioCard
    users:[],
    firstName: "",
    lastName: "",
    email: ""
  };

  componentDidMount(){
    this.getProjects();
  }

  getProjects = () => {
    api.getUsers()
      .then(res =>
        this.setState({ users: res.data, firstName: "", lastName: "", email: ""})
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render(){
    return(
      <div>
        

        <PortfolioCard
          firstName = {this.state.firstName}
        />


      </div>
    );
  }


//  render() {
//     return (
//     <div>
//       <Row>
//         {this.state.portfoliocards.map(portfoliocard => (
//           <PortfolioCard
//             id={portfoliocard.id}
//             key={portfoliocard.id}
//             project={portfoliocard.project}
//             image={portfoliocard.image}
//             description={portfoliocard.description}
//             team={portfoliocard.team}
//             link={portfoliocard.link}
//             github={portfoliocard.github}
//             technologiesKeywords={portfoliocard.technologiesKeywords}
//           />
//         ))}
//       </Row>
//      </div> 
//     );
//   }
}


export default Display;
