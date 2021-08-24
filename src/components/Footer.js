import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
 
  } from 'reactstrap';
  
  const Footer = (props) => {
    const footer = useState(true);
  
   return (
        <>
        <footer className='footer'>
            <Navbar color="light" light expand="md">
                    <NavbarBrand className='header-style' href="/">Animal Crossing Tinder</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/animalnew">FOOTER Place Holder</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </footer>
        </>
      )
    }
  
  
  
  export default Footer;