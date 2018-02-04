import React, { PropTypes } from 'react';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem, Navbar } from 'react-bootstrap';

const Header = (props) => {
  return (
    <header>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Menu Planner</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <IndexLinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/food">
              <NavItem eventKey={2}>Food</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;  