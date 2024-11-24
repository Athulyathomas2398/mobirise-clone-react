import { Link } from '@mui/material';
import { Button } from 'bootstrap';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
    
  return (
    <>
     <Navbar  style={{backgroundColor:"#323232"}} data-bs-theme="dark">
        <Container>
            <img src="https://mobirise.com/extensions/wowslider/assets/images/logo.png" style={{width:"30px"}} alt="" />
          <Navbar.Brand href="#home" className='fs-5 fw-bold'>MOBIRISE</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home" style={{color:"white",fontWeight:"bolder"}}>HOME</Nav.Link>
            <Nav.Link href="#demo"style={{color:"white",fontWeight:"bolder"}}>DEMO</Nav.Link>
            
          </Nav>
          <button className='btn   ms-3 fw-bolder' style={{border:"2px solid white" ,color:"white",fontSize:"13px"}}>BUY NOW</button>
          
        </Container>
      </Navbar>
      
     

    
    </>
  )
}

export default Header