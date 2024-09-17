import React from 'react';
import { Mail } from 'react-ionicons';
import { LockClosed } from 'react-ionicons';
import { Person } from 'react-ionicons';
import { Call } from 'react-ionicons';
import { Link } from 'react-router-dom';
import '../App.css';

function register() {
  return (
    <div>
      <section>
      <div className="login-box">
            <form>
                <h2>Register</h2>
                <div className='register-input'>
                  <div className="input-box">
                      <span className="icon"><Person color={'#ffffff'}/></span>
                      <input type="text" required/>
                      <label>FULL NAME</label>
                  </div>
                  <div className="input-box">
                      <span className="icon"><Person color={'#ffffff'}/></span>
                      <input type="text" required/>
                      <label>USER NAME</label>
                  </div>
                </div>
                <div className='register-input'>
                  <div className="input-box">
                      <span className="icon"><Mail color={'#ffffff'}/></span>
                      <input type="email" required/>
                      <label>EMAIL</label>
                  </div>
                  <div className="input-box">
                      <span className="icon"><Call color={'#ffffff'}/></span>
                      <input type="number" required/>
                      <label>MOBILE.NO</label>
                  </div>
                </div>
                <div className='register-input'>
                  <div className="input-box" style={{marginRight: 20}}>
                          <span className="icon"><LockClosed color={'#ffffff'}/></span>
                          <input type="password" required/>
                          <label>Create Password</label>
                  </div>
                  <div className="input-box" style={{marginLeft: 20}}>
                          <span className="icon"><LockClosed color={'#ffffff'}/></span>
                          <input type="password" required/>
                          <label>Confirm Password</label>
                  </div>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a>Forgot Password</a>
                </div>
                <Link to='/'><button className='loginbtn' type="submit">Register</button></Link>
            </form>
        </div>
    </section>
    </div>
  )
}

export default register
