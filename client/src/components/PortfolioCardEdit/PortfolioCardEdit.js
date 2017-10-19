import React, { Component } from 'react';
import {Card, Col, CardTitle, Button} from 'react-materialize';
import "./PortfolioCardEdit.css";
import EditButton from '../EditButton';


// class Keywords extends Component {
//   render () {
//     return (
     
//     );
//   }
// }


class PortfolioCardEdit extends Component {
    render () {
      return (
        <div>
          <Col l={3} m={4} s={12}>
            <div className="medium">
              <Card 
                header={
                  <CardTitle reveal image={
                      this.props.image} waves='light'/>
                    }
                    reveal={
                      <div><p>{this.props.description}</p></div>
                    } 
                    
                    title={
                      <span><EditButton/>{this.props.project}</span>
                    }
                    actions={
        <span className='tagsDiv'>{this.props.technologiesKeywords.map(tag => (<Button className='btn' waves='light' node='a' href={tag}> {tag} </Button> ))}</span>
      }
                    >

                  <p> <a href={this.props.link}>See it Live</a></p>
              </Card>
            </div>
           </Col>
        </div>
    );
  }
}

export default PortfolioCardEdit;
