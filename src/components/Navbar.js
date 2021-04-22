import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
function MainNavbar() {
  // const [logout, setLogout] = useState(false);
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

export default MainNavbar;
