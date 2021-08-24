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

class Header extends Component {
    render() {
      return (
        <>
            <Navbar color="light" light expand="md">
                <NavbarBrand className='header-style' href="/">Animal Crossing Tinder</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/animalnew">New Character</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/animaledit/">Edit Character</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </>
      )
    }
  }
  
  export default Header;