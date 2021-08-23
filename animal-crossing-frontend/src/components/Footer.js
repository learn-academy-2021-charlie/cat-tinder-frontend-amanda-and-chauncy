import React, {Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

class Footer extends Component {
    render() {
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
  }
  
  
  export default Footer;