import React, {Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class AnimalNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: "",
        animal: "",
        enjoys: "",
        personality: ""
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }

  handleSubmit = () => {
    this.props.createCharacter(this.state.form)
    this.setState({submitted: true})
  }

    render() {
      return (
        <>
            <h2>This is Animal New</h2>
            <Form className="form">
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" 
                onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="type">Animal</Label>
                <Input type="text" name="animal"
                onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="enjoys">Enjoys</Label>
                <Input type="text" name="enjoys"
                onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="personality">Personality</Label>
                <Input type="text" name="personality"
                onChange={this.handleChange}
                />
              </FormGroup>
              
              <Button name="submit" onClick={this.handleSubmit}>
                Add New Villager
              </Button>
            </Form>
            {this.state.submitted && <Redirect to="/animalindex" />}
        </>
      )
    }
  }
  
  
  export default AnimalNew;