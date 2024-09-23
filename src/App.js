import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Services from './components/services';
import Gamingpc from './pages/gamingpc';
import { Col, Row } from 'react-bootstrap';
import Sidenav from './components/sidenav';
import SingleItem from './pages/singleitem';
import Cart from './pages/cart';

function App() {
  return (
    <Router>
      <RouteHandler />
    </Router>
  );
}

function RouteHandler() {
  const location = useLocation();
  const isAuthPage = ['/reactworks', '/register'].includes(location.pathname);

  return (
    <div>
      {isAuthPage && (
        <Routes>
          <Route path='/reactworks' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      )}
      {!isAuthPage && (
        <Row>
          <Col sm={2}>
            <Sidenav />
          </Col>
          <Col sm={10} >
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/services' element={<Services />} />
              <Route path='/gamingpc' element={<Gamingpc />} />
              <Route path='/gamingpc/:id' element={<SingleItem />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default App;
