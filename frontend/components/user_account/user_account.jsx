import React from 'react';
import { Link } from 'react-router';

class UserAccount extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="user_account_container">
        <div className="user_account_sidebar">
          <Link to="/">PAU<span className='pause'>II</span>SEPLA<span className="play">></span>Y</Link>
          <ul>
            <li><Link>Discover</Link></li>
            <li><Link>Playlists</Link></li>
            <li><Link>My Account</Link></li>
          </ul>
        </div>

        <div className="user_account_main">
          <div className="user_account_user_info">
            <h1>{this.props.currentUser.username}</h1>
            <div className="user_account_picture"></div>
            <div className="user_account_description"></div>
          </div>

          <div className="user_account_playlists">
          </div>
        </div>
      </div>
    )
  }
}

export default UserAccount;
