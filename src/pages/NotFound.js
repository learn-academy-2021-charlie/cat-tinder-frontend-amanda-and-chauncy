import React, {Component } from 'react';
import notfound from '../assets/img/notfound.jpeg'

class NotFound extends Component {
    render() {
      return (
        <div class="notfound">
            <img src={notfound} alt="the link is broken"/>
        </div>
      )
    }
  }
  
  
  export default NotFound;