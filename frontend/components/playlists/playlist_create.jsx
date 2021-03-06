import React from 'react';
import { withRouter } from 'react-router'


class PlaylistCreate extends React.Component {
  constructor(props){
    super(props);
    this.state = {title: '', description: '', owner_id:(this.props.owner.id), playlist_image_url:'', public:true };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidUpdate(){
    this.redirectIfPlaylistCreated();
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  update(field){
    return e => this.setState({
      [field]:e.currentTarget.value
    });
  }

  redirectIfPlaylistCreated(){
    if (this.props.playlist.id){
      this.props.router.push(`/playlists/${this.props.playlist.id}`)
    }
  }

  handleSubmit(e){
    e.preventDefault()
    const playlistParams = this.state;
    this.props.createPlaylist(playlistParams);
  }

  renderErrors(){
    return(
      <ul className="errors">
        {this.props.errors.map((error,i) => <li
          className="errors"key={`error-${i}`}>{error}</li>)}
      </ul>
    );
  }

  render(){
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form">
          <p>Create Playlist</p>
          {this.renderErrors()}
          <input type="text"
								value={this.state.title}
								onChange={this.update("title")}
                placeholder="Title"
								className="login-input" />
          <br/>

          <input type="text"
								value={this.state.description}
								onChange={this.update("description")}
                placeholder="Description(optional)"
								className="login-input"/>
          <br/>

          <input type="text"
                value={this.state.playlist_image_url}
                onChange={this.update("playlist_image_url")}
                placeholder="Playlist Image URL(optional)"
                className="login-input" />
          <br/>

          <div className="login-buttons">
            <input type="submit" value="Create" className="submit-login" />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(PlaylistCreate);
