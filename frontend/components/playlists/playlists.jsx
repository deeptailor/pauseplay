import React from 'react';
import { withRouter } from 'react-router'


const albumStyle = (imgUrl) =>({
  backgroundImage: 'url(' + imgUrl + ')',
  backgroundPosition: 'center',
  backgroundSize: 'contain'
})

class Playlists extends React.Component {
  constructor(props){
    super(props);
    this.renderPlaylists = this.renderPlaylists.bind(this);
    this.routerPush = this.routerPush.bind(this);
    this.createPlaylistRouter = this.createPlaylistRouter.bind(this);
    this.myPlaylistsRouter = this.myPlaylistsRouter.bind(this);
    this.followedPlaylistsRouter = this.followedPlaylistsRouter.bind(this);
  }

  componentDidMount(){
    this.props.fetchPlaylists();
  }

  routerPush(id){
    return () => this.props.router.push(`playlists/${id}`);
  }

  createPlaylistRouter(){
    this.props.router.push(`playlists/create`)
  }

  myPlaylistsRouter(){
    this.props.router.push(`myplaylists`)
  }

  followedPlaylistsRouter(){
    this.props.router.push(`followedplaylists`)
  }

  renderPlaylists(){
    return this.props.playlists.map(
      (playlist, i) =>
      <li key={`playlist-${i}`}>
        <div className="album-art-container" style={albumStyle(playlist.playlist_image_url)}>
          <div onClick={this.routerPush(playlist.id)} className="album-overlay">
            <span className="full-album-span">
              <p className="full-album-text">View Playlist</p>
            </span>
            <p className="overlay-album-name">{playlist.title}</p>
          </div>
        </div>
      </li>
    )
  }

  render(){
    return (
      <div className="playlist-index-container">

        <div className="playlists-navigate">
          <div className="create-playlist" onClick={this.createPlaylistRouter}>Create Playlist &nbsp;<i className="material-icons">playlist_add</i></div>
          <div className="my-playlists" onClick={this.myPlaylistsRouter}>My Playlists</div>
          <div className="my-playlists" onClick={this.followedPlaylistsRouter}>Followed Playlists</div>
        </div>

        <h1>Browse Playlists</h1>

        <div className="playlists-container">
          {this.renderPlaylists()}
        </div>
      </div>
    );
  }
}

export default withRouter(Playlists);
