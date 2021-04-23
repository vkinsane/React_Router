import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

class MainNavbar extends Component {
  state = {
    logout: false,
  };
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>React Router</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default MainNavbar;
