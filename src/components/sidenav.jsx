import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartOutline } from 'react-ionicons';
import '../App.css';

      function sidenav() {
        return (
          <>
            <navbar>
              <div className='sideNav'>
                <h1 href="#home">Navbar</h1>
                <ul>
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/aervices">Services</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/cart"><CartOutline color={'#ffffff'}/></Link></li>
                </ul>
              </div>
            </navbar>
          </>
        );
      }

export default sidenav
