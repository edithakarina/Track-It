// import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { makeStyles } from '@mui/styles';
import LoginButton from "./button/loginBtn";
import LoginDialog from "./dialogs/loginDialog";

const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main + " !important"
  },
  link: {
    color: theme.palette.white.main + " !important"
  }
}));

function Header({ login = false }) {
  const classes = useStyles();

  function handleClick(e) {

  }

  return (
    <Navbar className={classes.bgColor + " header"} expand="lg">
      <Container>
        <Navbar.Brand className={classes.bgColor + " brand black"} href="#home">Track it!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ alignItems: "center" }}>
            <Nav.Link href="#home" className={classes.link}>Home</Nav.Link>
            <Nav.Link href="#link" className={classes.link}>Link</Nav.Link>
            {
              login ? <Nav.Link className={classes.link}>
                <LoginDialog/>
              </Nav.Link> : null
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;