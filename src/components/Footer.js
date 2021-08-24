import React, {Component } from 'react';

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
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
            <ul>
              <NavLink to='/animalshow'>See all Characters</NavLink>
            </ul>
            <ul>
              <NavLink to='/animalnew'>Add a Character</NavLink>
            </ul>
        </footer>
        </>
      )
    }
  }
  export default Footer;