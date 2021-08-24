import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import NewHorizons from '../assets/img/NewHorizons.png'

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

      return (
        <>
          <Navbar color="faded" light>
            <img src={NewHorizons} alt="logo for ACNH Tinder" className="acnh-logo"/>
          <NavbarBrand className='header-style' href="/">Animal Crossing Tinder</NavbarBrand>
              <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                  <Nav navbar>
                    <NavItem>
                        <NavLink href="/animalnew">New Character</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/animaledit/">Edit Character</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
                
          </Navbar>
        </>
      )
  }
export default Header