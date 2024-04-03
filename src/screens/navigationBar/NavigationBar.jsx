import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { navigationLinks } from "../../helpers/navigationLinks";

function createLinks() {
  return navigationLinks.map((e, idx) => (
    <Nav.Link key={idx} href={e.ref}>
      {e.name}
    </Nav.Link>
  ));
}

function NavigationBar() {
  return (
    <div id="home">
      <Navbar>
        <Navbar.Brand href="#home">Obiora Ezeasor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            {createLinks()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
