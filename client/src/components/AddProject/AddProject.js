import React from "react";
import {Card, Col, CardTitle, Button} from 'react-materialize';
import "./AddProject.css";
import FixedButton from '../FixedButton';
import EditButton from '../EditButton';

const AddProject = props => (
<div>
  <Col m={6} s={12}>
      <Card 
        header={<CardTitle reveal image='http://placehold.it/700x400' waves='light'/>}
          title={props.project}
          reveal={<div><p>{props.description}</p></div>}>
          <p><a href={props.link}>See it Live</a></p>
          {props.technologiesKeywords.map(tag => (
          <Button waves='light' node='a' href={tag}> {tag} </Button>
          ))}
        <EditButton/>
      </Card>
      <FixedButton/>
   </Col>
</div>
);
export default AddProject;