import React, {Component } from 'react';
import { Card, CardTitle, CardImg, CardText, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import raymond from '../assets/img/raymond.png'

class AnimalShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: { name: "", 
      animal: "", 
      enjoys: "", 
      personality: ""},
      submitted: false
    }
  }
    render() {
      let {character} = this.props
      return (
        
        <div className="page-body">
          <br></br>
          {character &&
          <Card body className="card-show">
            <CardTitle tag="h5">Hi! My name is {character.name}</CardTitle>
            <CardImg top width="100%" src={raymond} alt="Card image cap" />
            <CardText>I am a {character.animal}</CardText>
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