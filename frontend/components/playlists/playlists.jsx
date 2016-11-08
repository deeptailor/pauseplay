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
  }

  componentDidMount(){
    this.props.fetchPlaylists();
  }

  routerPush(id){
    return () => this.props.router.push(`playlists/${id}`);
  }

  renderPlaylists(){
    return this.props.playlists.map(
      playlist =>
      <li key={`playlist-${playlist.id}`}>
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
        <div className="playlists-container">
          {this.renderPlaylists()}
        </div>
      </div>
    );
  }
}

export default Playlists;
