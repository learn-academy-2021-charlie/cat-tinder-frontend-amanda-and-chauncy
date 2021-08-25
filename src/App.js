import React, {Component } from 'react';
import Home from './pages/Home'
import AnimalEdit from './pages/AnimalEdit'
import AnimalIndex from './pages/AnimalIndex'
import AnimalShow from './pages/AnimalShow'
import AnimalNew from './pages/AnimalNew'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';
import character from './mockCharacters.js'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      character: character
    }
  }

  createCharacter = (newCharacter) => {
    console.log(newCharacter)
  }
  render() {
    console.log(this.state.character);
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/animaledit' component={AnimalEdit} />
          <Route  path='/animalindex' render={(props) => <AnimalIndex characters={this.state.characters}/>} />
          <Route  path='/animalshow/:id' render={(props) => {
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
