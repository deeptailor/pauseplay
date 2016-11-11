import React from 'react';
import {withRouter} from 'react-router';

class UserView extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchOwnedPlaylists(this.props.params.user_id);
  }

  render(){
    return (
      <h1>I am here</h1>
    )
  }
}

export default withRouter(UserView);
