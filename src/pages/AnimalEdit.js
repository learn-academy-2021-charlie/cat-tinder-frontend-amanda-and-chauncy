import React, {Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class AnimalEdit extends Component {
    constructor(props){
      super(props)
      this.state = {
        form: {
          name: this.props.character ? this.props.character.name : "",
          animal: this.props.character ? this.props.character.animal : "",
          enjoys: this.props.character ? this.props.character.enjoys : "",
          personality: this.props.character ? this.props.character.personality : "",
        },
        submitted: false
      }
    }

    handleChange = (e) => {
      let {form} = this.state
      form[e.target.name] = e.target.value
      this.setState({form: form})
    }
    handleSubmit = () => {
      this.props.updateCharacter(this.state.form, this.props.character.id)
      this.setState({submitted: true})
    } 

    render() {
      return (
        <>  
            <h2>Edit your Character</h2>
            <Form>
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="name"
                  onChange={this.handleChange}
                  value={this.state.form.name}
                />
              </FormGroup>
              <FormGroup>
                <Label>Animal</Label>
                <Input type="text" name="animal"
                onChange={this.handleChange}
                value={this.state.form.animal}
                />
              </FormGroup>
              <FormGroup>
                <Label>Enjoys</Label>
                <Input type="text" name="enjoys"
                onChange={this.handleChange}
                value={this.state.form.enjoys}
                />
              </FormGroup>
              <FormGroup>
                <Label>Personality</Label>
                <Input type="text" name="personality"
                onChange={this.handleChange}
                value={this.state.form.personality}
                />
              </FormGroup>
            </Form>

            <Button name='Submit' onClick={this.handleSubmit}>
                Edit Character
            </Button>
              { this.state.submitted && <Redirect to={`/animalshow/${this.props.character.id}` } /> }
        </>
      )
    }
  }
  

  export default AnimalEdit;