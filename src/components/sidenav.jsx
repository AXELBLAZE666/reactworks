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
                <div><h1 href="#home">Navbar</h1></div>
                <ul>
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/aervices">Services</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li></li>
                </ul>
                <div>
                <Link to="/cart"><CartOutline color={'#ffffff'}/></Link>
                <Link to='/reactworks'><h2>signout</h2></Link>
                </div>
              </div>
            </navbar>
          </>
        );
      }

export default sidenav
