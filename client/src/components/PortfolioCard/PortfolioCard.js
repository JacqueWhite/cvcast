import React from "react";
import {Col, Card, CardTitle, Button} from 'react-materialize';
import "./PortfolioCard.css";

const PortfolioCard = props => (
<div>
  <Col m={6} s={12}>
      <Card 
        header={<CardTitle reveal image={props.image} waves='light'/>}
          title={props.project}
          reveal={<div><p>{props.description}</p></div>}>
          <p><a href={props.link}>See it Live</a></p>
          {props.technologiesKeywords.map(tag => (
          <Button waves='light' node='a' href={tag}> {tag} </Button>
          ))}
      </Card>
  </Col>
</div>
);

export default PortfolioCard;

