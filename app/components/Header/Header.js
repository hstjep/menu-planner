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
            <NavDropdown eventKey={3} title="Administration" id="nav-dropdown">
              <LinkContainer to="/food">
                <MenuItem eventKey={3.1}>Food</MenuItem>
              </LinkContainer>
              <LinkContainer to="/food-category">
                <MenuItem eventKey={3.2}>Food Category</MenuItem>
              </LinkContainer>
              {/* <MenuItem divider /> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;  