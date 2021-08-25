import React, {Component } from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

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
            <NavLink to={`/animaledit/${character.id}`}>
              <Button>Edit Character Profile</Button>
            </NavLink>
          </Card>}
        </div>
      )
    }
  }
  
  
  export default AnimalShow;