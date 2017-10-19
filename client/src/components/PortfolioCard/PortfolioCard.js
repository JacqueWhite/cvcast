import React from "react";
import {Card, CardTitle, Button} from 'react-materialize';
import "./PortfolioCard.css";

const PortfolioCard = props => (
<div>
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
        </Card>
</div>
);
export default PortfolioCard;