import React from 'react';


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

  renderPlaylists(){
    return this.props.playlists.map(
      (playlist, i) =>
      <li key={`playlist-${i}`}>
        <div className="album-art-container" style={albumStyle(playlist.playlist_image_url)}>
          <div className="album-overlay">
            <span onClick={this.routerPush(playlist.id)} className="full-album-span">
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
        <h1>Explore Playlists</h1>
        &nbsp;
        <div className="create-playlist" onClick={this.createPlaylistRouter}>Create Playlist &nbsp;<i className="material-icons">playlist_add</i></div>
        <div className="playlists-container">
          {this.renderPlaylists()}
        </div>
      </div>
    );
  }
}

export default Playlists;
