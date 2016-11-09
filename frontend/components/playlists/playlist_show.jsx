import React from 'react';

const playlistStyle = (imgUrl) =>({
  backgroundImage: 'url(' + imgUrl + ')',
  backgroundPosition: 'center',
  backgroundSize: 'contain'
})

class PlaylistShow extends React.Component {
  constructor(props){
    super(props);
    this.renderSongs = this.renderSongs.bind(this);
    this.playSong = this.playSong.bind(this);
    this.addSongToQue = this.addSongToQue.bind(this);
    this.addAllSongsToQue = this.addAllSongsToQue.bind(this);
    this.renderSongsContainer = this.renderSongsContainer.bind(this);
  }

  componentDidMount(){
    this.props.fetchPlaylist(this.props.params.playlist_id)
  }

  componentWillUnmount(){
    if(this.props.clearErrors){
      this.props.clearErrors();
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

  renderSongs(){
    if(this.props.playlist.songs){
      return this.props.playlist.songs.map(song =>
        <li key= {`song-${song.id}`} className="song-title-container">
          <div className="song-title">
            {song.title}
          </div>

          <div className="add-song-to-que">Add Song To Que</div>

          <div className="buttons-on-songs">
            <div className="play-song"><i className="material-icons" onClick={this.playSong(song)}>play_circle_outline</i></div>
            <div className="add-song-que"><i className="material-icons" onClick={this.addSongToQue(song)}>queue_music</i></div>
            <div className="add-song-to-que">Add Song To Queue</div>
          </div>
        </li>)
    }
  }

  renderSongsContainer(){
    if (this.props.playlist.songs && this.props.playlist.songs.length > 0){
      return (
        <div className="song-list-container">
          <div className="song-list-header">
            <h2>Songs</h2>
            <div className="add-all-songs-to-que" onClick={this.addAllSongsToQue(this.props.playlist.songs)}>
              <i className="material-icons">play_arrow</i>
              &nbsp;
              <div>Play All</div>
            </div>
          </div>
          <ol className="song-list-ol">
            {this.renderSongs()}
          </ol>
        </div>
      )
    }
    else{
      return (
        <div className="song-list-empty">
          <h2>Add Songs To Your Playlist</h2>
        </div>
      )
    }
  }

  render(){
    let playlist_art_url = '';
    let playlist_name = '';
    let owner_name = '';
    let playlist_description = '';
    if(this.props.playlist.id){
      playlist_art_url = this.props.playlist.playlist_image_url;
      playlist_name = this.props.playlist.title;
      playlist_description = this.props.playlist.description;
      if (this.props.playlist.owner){
        owner_name = this.props.playlist.owner.username
      }
    }
    return (
      <div className="playlist-showpage-container">

        <div className="albums-showpage-right-column">
          <div className="playlist-showpage-playlist-name">{`${playlist_name} - ${owner_name}`}</div>
          <div className="album-art-container-album-showpage" style={playlistStyle(playlist_art_url)}>
          </div>
          <div className="playlist-description">
            <h3>Description</h3>
            <div className="description-text">{playlist_description}</div>
          </div>
        </div>
        {this.renderSongsContainer()}
      </div>
    )
  }
}

export default PlaylistShow;
