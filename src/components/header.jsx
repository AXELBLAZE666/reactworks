import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

      function header() {
        return (
          <>
            <Navbar bg="dark" data-bs-theme="dark" >
              <Container  style={{display : 'flex', justifyContent:'space-between'}}>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav>
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#About">About</Nav.Link>
                  <Nav.Link href="#Services">Services</Nav.Link>
                  <Nav.Link href="#Contact">Contact</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </>
        );
      }

export default header
