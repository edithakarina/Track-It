// import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";

function Header() {
  return (
    <Navbar className="header" expand="lg">
      <Container>
        <Navbar.Brand className="brand black headerText" href="#home">Track it!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="headerText" href="#home">Home</Nav.Link>
            <Nav.Link className="headerText" href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;