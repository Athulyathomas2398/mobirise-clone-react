import { Link } from '@mui/material';
import { Button } from 'bootstrap';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function Header() {
    
  return (
    <>
     <Navbar className='nav'  style={{backgroundColor:"#323232"}} data-bs-theme="dark">
        <Container>
            <img src="https://mobirise.com/extensions/wowslider/assets/images/logo.png" style={{width:"15px"}} alt="" />
          <Navbar.Brand href="#home" style={{fontSize:"20px"}}  className=' fw-bold'>MOBIRISE</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home" style={{color:"white",fontWeight:"bolder" ,fontSize:"15px"}}>HOME</Nav.Link>
            <Nav.Link href="#demo"style={{color:"white",fontWeight:"bolder",fontSize:"15px"}}>DEMO</Nav.Link>
            
          </Nav>
          <button className='btn ms-3 fw-bolder' style={{border:"2px solid white" ,color:"white",fontSize:"15px"}}>BUY NOW</button>
          
        </Container>
      </Navbar>
      
     

    
    </>
  )
}

export default Header