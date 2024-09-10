import React from 'react';
import { Mail } from 'react-ionicons';
import { LockClosed } from 'react-ionicons';
import { Link } from 'react-router-dom';
import '../App.css'

function login() {
  return (
    <section>
      <div className="login-box">
            <form>
                <h2>Login</h2>
                <div className="input-box">
                    <span className="icon"><Mail /></span>
                    <input type="email" required/>
                    <label>Email</label>
                </div>
                <div className="input-box">
                        <span className="icon"><LockClosed/></span>
                        <input type="password" required/>
                        <label>Password</label>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a>Forgot Password</a>
                </div>
                <Link to='/dashboard'><button type="submit">Login</button></Link>
                <div className="register-link">
                    <p>Dont't have an account?<Link to='/register'>Register</Link></p>
                </div>
            </form>
        </div>
    </section>
  )
}

export default login
