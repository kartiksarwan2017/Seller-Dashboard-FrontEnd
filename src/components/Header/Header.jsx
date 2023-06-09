import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';

const Header = () => {

  return (
    <>
     <div>
     <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Seller Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     </div>
    </>
  )
}

export default Header;