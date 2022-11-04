import React, { Component } from "react";
import {Navbar,Container,Nav} from 'react-bootstrap'

export default class Header extends Component {
  render() {
    return (
      <div >
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/"></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
