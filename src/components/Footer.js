import React, {Component } from 'react';

import {
    NavLink,
 
  } from 'reactstrap';
  
class Footer extends Component{

  render() {
   return (
        <>
        <footer className='footer'>
            <ul>
              <NavLink to='/'>&copy; 2021 Chauncy & Amanda</NavLink>
            </ul>
        </footer>
        </>
      )
    }
  }
  export default Footer;