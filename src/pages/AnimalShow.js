import React, {Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap'

class AnimalShow extends Component {
    render() {
      let {character} = this.props
      return (
        <div className="page-body">
          {character &&
          <Card body className="card-show">
            <CardTitle tag="h5">Hi! My name is {character.name}</CardTitle>
            <CardText>I am a {character.type}</CardText>
            <CardText>I enjoy {character.enjoys}</CardText>
            <CardText>I have a {character.personality} personality.</CardText> 
          </Card>}
        </div>
      )
    }
  }
  
  
  export default AnimalShow;