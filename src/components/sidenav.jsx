import React from 'react';
import { Link } from 'react-router-dom';
import { CartOutline } from 'react-ionicons';
import '../App.css';

      function sidenav() {

         const menuToggle = document.getElementById('menu-toggle');

         if(menuToggle){
        document.getElementById('menu-toggle').addEventListener('click', function() {
          const sideNav = document.querySelector('.sideNav');
          sideNav.classList.toggle('active'); // Toggle sidebar visibility
        });
      }

        return (
          <>
            <nav className="sideNav">
              <div className="menu-toggle" id="menu-toggle">
                <span className='toogle'>☰</span>
              </div>
              <div className="nav-content">
                <div>
                  <h1><Link to="/home">Navbar</Link></h1>
                </div>
                <ul>
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="nav-icons">
                  <Link to="/cart"><CartOutline color={'#ffffff'}/></Link>
                  <Link to='/reactworks'><h2>Sign Out</h2></Link>
                </div>
              </div>
            </nav>

          </>
        );
      }

export default sidenav
