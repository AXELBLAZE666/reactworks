import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

      function sidenav() {
        return (
          <>
            <Navbar bg="dark" data-bs-theme="dark" >
              <div >
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <ul>
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/aervices">Services</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </Navbar>
          </>
        );
      }

export default sidenav
