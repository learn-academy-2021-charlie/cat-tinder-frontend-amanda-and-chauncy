import React, {Component } from 'react';
import { Button, Form, FormFeedback, FormText, FormGroup, Label, Input } from 'reactstrap';
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
        <div className="page-body2">
            
            <Form className="form">
              <FormGroup>
                <Label className="label" for="name">Name</Label>
                <Input type="text" name="name" 
                onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label className="label" for="type">Animal</Label>
                <Input type="text" name="animal"
                onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
        <Label for="enjoys" className="label">Input without validation</Label>
        <Input />
        <FormFeedback>You will not be able to see this</FormFeedback>
        <FormText className="formtext">Must be at least 10 characters.</FormText>
      </FormGroup>
      
  <FormGroup>
        <Label className="label" for="personality">Personality</Label>
                <Input type="text" name="personality"
                onChange={this.handleChange}
                />
              </FormGroup>
              <br></br>
              <Button name="submit" onClick={this.handleSubmit}>
                Add New Villager
              </Button>
            </Form>
           </div> 
            {this.state.submitted && <Redirect to="/animalindex" />}
        </>
      )
    }
  }
  
  
  export default AnimalNew;