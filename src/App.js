import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Services from './components/services';
import { Col, Row } from 'react-bootstrap';
import Sidenav from './components/sidenav';

function App() {
  const location = useLocation();

  // Check if the current path is the login path
  const isLoginPage = location.pathname === '/login';
  return (
    <div>
      <Router>
        <Row>
            <Col sm={2}>
              <Sidenav/>
            </Col>
          </Row>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
