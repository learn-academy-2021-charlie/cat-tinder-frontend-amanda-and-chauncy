import React, {Component } from 'react';
import './App.css';
import Home from './pages/Home';
import AnimalEdit from './pages/AnimalEdit';
import AnimalIndex from './pages/AnimalIndex';
import AnimalShow from './pages/AnimalShow';
import AnimalNew from './pages/AnimalNew';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      characters: [],
    }
  }

  readCharacter = () => {
    fetch("http://localhost:3000/characters")
      .then(response => response.json())
      .then(characterArray => this.setState({characters: characterArray}))
      .catch(errors => console.log("Character read errors:", errors))
    }
  componentDidMount(){
    this.readCharacter()
  }
  createCharacter = (newCharacter) => {
    console.log(JSON.stringify(newCharacter))
   fetch("http://localhost:3000/characters", {
     body: JSON.stringify(newCharacter),
     headers: {
       "Content-Type": "application/json"
     },
     method: "POST"
   })
   .then(response => response.json())
   .then(payload => this.readCharacter())
   .catch(errors => console.log("Character create errors:", errors))
  }

  updateCharacter = (editcharacter, id) => {
    fetch(`http://localhost:3000/characters/${id}`, {
      body: JSON.stringify(editcharacter),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(payload => this.readCharacter())
    .catch(errors => console.log("Character update errors:", errors))
  }


 
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/animalindex' render={(props) => <AnimalIndex characters = {this.state.characters}/>} />
          <Route path={'/animaledit/:id'} render={(props) => {
            let id = props.match.params.id
            let character = this.state.characters.find(character => character.id === +id)
            return <AnimalEdit updateCharacter={this.updateCharacter} character={character} />
          }} />
          <Route path='/animalshow/:id' render={(props) => {
            let id = props.match.params.id
            let character = this.state.characters.find(character => character.id === +id)
            return <AnimalShow character={character}/>
          }} />
          <Route  path='/animalnew' render={(props) => <AnimalNew createCharacter = {this.createCharacter}/>} />
          <Route  component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    )
  }

}
export default App;
