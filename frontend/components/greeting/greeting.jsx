import React from 'react';
import { Link } from 'react-router';

const Greeting = (props) => (
  <nav className='nav-container'>

    <div className="nav-bar-top">
      <div className="logo-header">
        <Link>PAU<span className='pause'>II</span>SEPLA<span className="play">></span>Y</Link>
      </div>

      <div className='login-signup'>
      <Link to="/login" className='login'>Log In</Link>
      <Link to="/signup" className='signup'>Sign Up</Link>
      </div>
    </div>

  </nav>
);

export default Greeting;
