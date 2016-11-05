import React from 'react';
import { Link } from 'react-router';


const currentUserNull = () => {
  return(
    <nav className='nav-container'>

      <div className="nav-bar-top">
        <div className="logo-header">
          <Link to="/">PAU<span className='pause'>II</span>SEPLA<span className="play">></span>Y</Link>
        </div>

        <div className='login-signup'>
        <Link to="/login" className='login'>Log In</Link>
        <Link to="/signup" className='signup'>Sign Up</Link>
        </div>
      </div>

    </nav>
  )
}

const currentUserNotNull = (user, logout) => {
  return (
    <nav className='nav-container'>

      <div className="nav-bar-top">
        <div className="logo-header">
          <Link to="/">PAU<span className='pause'>II</span>SEPLA<span className="play">></span>Y</Link>
        </div>

        <div className="nav-bar-center-tabs">
          <Link to={`albums`} className="nav-bar-explore">Explore</Link>
        </div>

        <div className='login-signup'>
        <Link to={`/users/${user.id}`} className='login'>{user.username}</Link>
        <Link to="/" onClick={logout} className='signup'>Log Out</Link>
        </div>
      </div>

    </nav>
  )
}

const Greeting = ({currentUser, logout}) => (
  currentUser ? currentUserNotNull(currentUser, logout) : currentUserNull()
);

export default Greeting;
