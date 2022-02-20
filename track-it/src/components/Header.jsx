// import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";

import { makeStyles } from '@mui/styles';

const useStyles= makeStyles((theme)=>({
  bgColor:{
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main+" !important"
  },
  link:{
    color: theme.palette.white.main+" !important"
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <Navbar className={classes.bgColor+" header"} expand="lg">
      <Container>
        <Navbar.Brand className={classes.bgColor+" brand black"} href="#home">Track it!</Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={classes.link}>Home</Nav.Link>
            <Nav.Link href="#link" className={classes.link}>Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;