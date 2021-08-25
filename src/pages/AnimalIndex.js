import React, {Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Card, Button, CardTitle, Row, Col } from 'reactstrap'

class AnimalIndex extends Component {
    render() {
      let { characters } = this.props
      return (
        <div className="page-body">
            <h2>This is Animal Index</h2>
            <div className="index-cards">
              {characters && characters.map(character => {
              return (
                <Row key={character.id}>
                  <Col sm="6">
                    <Card body>
                      <CardTitle tag="h5">Hi, my name is {character.name}</CardTitle>
                      <NavLink to={`/animalshow/${character.id}`}>
                        <Button>More Info</Button>
                      </NavLink>
                    </Card>
                  </Col>
                </Row>
              )  
              })}
            </div>
        </div>
      )
    }
  }
  
  
  export default AnimalIndex