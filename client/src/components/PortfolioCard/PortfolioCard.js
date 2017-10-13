import React from "react";
import "./PortfolioCard.css";

const PortfolioCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.project} src={props.image} />
    </div>
     <div className="content-container"> 
        <div className="content">
          <ul>
            <li>
              <strong>Project:</strong> {props.project}
            </li>
            <li>
              <strong>Description:</strong> {props.description}
            </li>
            <li>
              <strong>Team:</strong> {props.team}
            </li>
            <li>
              <strong>See it Live:</strong> {props.link}
            </li>
            <li>
              <strong>Github:</strong> {props.github}
            </li>
          </ul>
          <div>
            <strong>Technologies + Keywords:</strong> {props.technologiesKeywords}
          </div>
        </div>
    </div>
  </div>
);

export default PortfolioCard;
