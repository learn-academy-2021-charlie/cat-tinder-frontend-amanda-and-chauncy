import React, {Component } from 'react';
import { Button } from 'reactstrap';
import logo_white from  '../assets/img/logo_white.png'
import isabelle from '../assets/img/isabelle.png'

class Home extends Component {
    render() {
      return (
        <div class="page-body">
          <div class="home-wrapper">
        <img src={logo_white} alt="logo for ACNH Tinder" className="logo"/>            
        <br></br>
        <div class="button-container">
        <br></br>
        <Button>Log In</Button>
        <br></br>
          <Button>Sign Up</Button>
          </div>
          </div>
        </div>
      )
    }
  }
  
  
  export default Home;