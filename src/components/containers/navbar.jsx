import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';
import { logout } from "../../slices/auth";
import { useDispatch } from "react-redux";


export default function NavComp() {
  const dispatch = useDispatch();

  function logOut() {
    dispatch(logout());
  }

  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
    <Container>

    <LinkContainer to="/">
      <Navbar.Brand href="#home">Home</Navbar.Brand>
        </LinkContainer>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">

        <LinkContainer to="user">
          <Nav.Link >User</Nav.Link>
        </LinkContainer>

        <LinkContainer to="Admin">
          <Nav.Link >Admin</Nav.Link>
          </LinkContainer>


        </Nav>
        <Nav>
        <LinkContainer to="Login">
          <Nav.Link >Login</Nav.Link>
          </LinkContainer>

          <LinkContainer to="Register">
          <Nav.Link > Register </Nav.Link>
          </LinkContainer>

          <Button variant="dark" onClick={()=>{logOut()}}>LogOut</Button>


        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
