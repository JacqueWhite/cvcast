import React from "react";
import {Card, Col, CardTitle, Button} from 'react-materialize';
import "./PortfolioCard.css";

const PortfolioCard = props => (

      <Card 
        header={
          <CardTitle 
            reveal image={props.image} 
            waves='light'
          />
        }
        title={props.project}
        reveal={
          <div>
            <p>{props.description}</p>
          </div>}>
          <p><a href={props.link}>See it Live</a></p>
          {props.technologiesKeywords.map(tag => (
          <Button 
            waves='light' 
            node='a' 
            href={tag}
            > 
              {tag} 
            </Button>
            ))}
</div>
);
export default PortfolioCard;