import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import "./Header.scss";

const Header = () => {

  const [sellerId, setSellerId] = useState("");

  useEffect(() => {
    setSellerId(localStorage.getItem("sellerId"));
  })


  
  const handleLogout = () => {

    setTimeout(() => {
      localStorage.removeItem("token");
      window.location = '/login';
    }, 1000); 
    
    Swal.fire({
      title: `Logged Out Sucessfully`,
      icon: 'success',
      showCloseButton: true
   });
  }  

  return (
    <>
     <div className='header-container'>
     <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Seller Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="/home">Home</Nav.Link>
            <Nav.Link className="nav-link" href={`/getSpecificSeller/${sellerId}`}>Specific Seller</Nav.Link>
          </Nav>

          {
              localStorage.getItem("token") !== null &&      
              <button className='logout-btn' onClick={handleLogout}>Logout</button> 
          }

          {
              localStorage.getItem("token") === null &&
              <div className='nav-btn-container'>
              <button className='nav-btn'><Link to="/login">Login</Link></button>
              <button className='nav-btn'><Link to="/register">Sign Up</Link></button>
              </div>
          }
        </Container>
      </Navbar>
     </div>
    </>
  )
}

export default Header;