import React from 'react';

const albumStyle = (imgUrl) =>({
  backgroundImage: 'url(' + imgUrl + ')',
  backgroundPosition: 'center',
  backgroundSize: 'contain'
})



class Albums extends React.Component {
  constructor(props){
    super(props)

    this.state = {usersPlaylistFormDisplay: 'none', selectedSongId:0}

    this.renderSongs = this.renderSongs.bind(this);
    this.renderAddToPlaylist = this.renderAddToPlaylist.bind(this);
    this.renderUsersPlaylists = this.renderUsersPlaylists.bind(this);

    this.playSong = this.playSong.bind(this);

    this.addSongToQue = this.addSongToQue.bind(this);
    this.addAllSongsToQue = this.addAllSongsToQue.bind(this);

    this.toggleOnPlaylistAddForm = this.toggleOnPlaylistAddForm.bind(this);
    this.toggleOffPlaylistAddForm = this.toggleOffPlaylistAddForm.bind(this);
  }

  componentDidMount(){
    this.props.fetchAlbum(this.props.params.album_id)
    if(this.props.currentUser){
      this.fetchOwnedPlaylists(this.props.currentUser.id)
    }
  }

  fetchOwnedPlaylists(id){
    if(this.props.currentUser){
      this.props.fetchOwnedPlaylists(id)
    }
  }

  playSong(song){
    return (e) => {
      e.preventDefault();
      return this.props.playSong(song)
    };
  }

  addSongToQue(song){
    return (e) => {
      return this.props.addSongToQue(song)
    }
  }

  addAllSongsToQue(songs){
    return (e) => {
      return this.props.addAllSongsToQue(songs)
    }
  }

  toggleOnPlaylistAddForm(){
    if(this.state.usersPlaylistFormDisplay === "none"){
      this.setState({usersPlaylistFormDisplay: "block"})
    }
  }

  toggleOffPlaylistAddForm(){
    if(this.state.usersPlaylistFormDisplay === "block"){
      this.setState({usersPlaylistFormDisplay: "none"})
    }
  }

  renderUsersPlaylists(){
    if (this.props.playlists.length > 0){
      return (
        <div className="users-playlists-container" style={{display:this.state.usersPlaylistFormDisplay}}>
          <ul className="users-playlists-ul">
            <div className="close-button" onClick={this.toggleOffPlaylistAddForm}><i className="material-icons">close</i></div>
            <h3>Your Playlists</h3>
            {this.props.playlists.map((playlist, i) => <li key={`userPlaylist-${i}`}>{playlist.title}</li>)}
          </ul>
        </div>
      )
    }
  }

  renderAddToPlaylist(){
    if (this.props.currentUser){
      return (
        <div className="add-song-to-playlist" onClick={this.toggleOnPlaylistAddForm}>
          <i className="material-icons">playlist_add</i>
          <div className="add-song-to-playlist-popup">Add Song To Playlist</div>
       </div>
      );
    }
  }

  renderSongs(){
    if(this.props.songs){
      return this.props.songs.map(song =>
        <li key= {`song-${song.id}`} className="song-title-container">
          <div className="song-title">
            {song.title}
          </div>

          <div className="add-song-to-que">Add Song To Queue</div>

          <div className="buttons-on-songs">
            <div className="play-song"><i className="material-icons" onClick={this.playSong(song)}>play_circle_outline</i></div>
            {this.renderAddToPlaylist()}
            <div className="add-song-que"><i className="material-icons" onClick={this.addSongToQue(song)}>queue_music</i></div>
            <div className="add-song-to-que">Add Song To Queue</div>
          </div>
        </li>)
    }
  }

  render(){
    let album_art_url = '';
    let album_name = '';
    let artist_name = '';
    if(this.props.album){
      album_art_url = this.props.album.album_art_url;
      album_name = this.props.album.name;
      if (this.props.album.artist){
        artist_name = this.props.album.artist.name;
      }
    }
    return (
      <div className="albums-showpage-container">

        <div className="albums-showpage-right-column">
          <div className="album-art-container-album-showpage" style={albumStyle(album_art_url)}>
          </div>
          <div className="albums-showpage-album-name">{`${album_name} - ${artist_name}`}</div>
        </div>

        {this.renderUsersPlaylists()}

        <div className="song-list-container">
          <div className="song-list-header">
            <h2>Songs</h2>
            <div className="add-all-songs-to-que" onClick={this.addAllSongsToQue(this.props.songs)}>
              <i className="material-icons">play_arrow</i>
              &nbsp;
              <div>Play All</div>
            </div>
          </div>
          <ol className="song-list-ol">
            {this.renderSongs()}
          </ol>
        </div>

      </div>
    )
  }
}

export default Albums;
