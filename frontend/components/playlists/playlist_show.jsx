import React from 'react';
import {Link, withRouter} from 'react-router';

const playlistStyle = (imgUrl) =>({
  backgroundImage: 'url(' + imgUrl + ')',
  backgroundPosition: 'center',
  backgroundSize: 'contain'
})

class PlaylistShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {user_id: 0, playlist_id: 0, error: [], success: [], following: false}
    this.renderSongs = this.renderSongs.bind(this);
    this.linkToHomePage = this.linkToHomePage.bind(this);
    this.playSong = this.playSong.bind(this);
    this.addSongToQue = this.addSongToQue.bind(this);
    this.addAllSongsToQue = this.addAllSongsToQue.bind(this);
    this.addSongsForOwner = this.addSongsForOwner.bind(this);
    this.renderSongsContainer = this.renderSongsContainer.bind(this);
    this.followPlaylist = this.followPlaylist.bind(this);
    this.renderFollowOrFollowing = this.renderFollowOrFollowing.bind(this);
    this.deletePlaylist = this.deletePlaylist.bind(this);
  }

  componentDidMount(){
    this.props.fetchPlaylist(this.props.params.playlist_id);
    this.props.fetchFollowedPlaylists(this.props.currentUser.id);
    this.setState({user_id: this.props.currentUser.id, playlist_id: this.props.params.playlist_id});
  }

  componentWillUnmount(){
    if(this.props.clearErrors){
      this.props.clearErrors();
    }
    this.props.clearPlaylistFollowErrorAndSuccess();
  }

  componentWillReceiveProps(newProps){
    if(newProps.error){
      this.setState({error: newProps.error})
    }
    if(newProps.success){
      this.setState({success: newProps.success})
    }
    if(newProps.followedPlaylistIds.length > 0){
      if(newProps.followedPlaylistIds.includes(this.props.params.playlist_id)){
        this.setState({following: true})
      }
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

  followPlaylist(e){
    this.props.followPlaylistRequest(this.state.user_id, this.state.playlist_id);
    this.setState({following: true})
  }

  linkToHomePage(){
    this.props.router.push('/');
  }

  deletePlaylist(id){
    return (e) => {
      this.props.deletePlaylist(id);
      this.props.router.push('/');
    }
  }

  renderFollowOrFollowing(){
    if(this.state.following){
      return (
        <h3 className="following">Following</h3>
      );
    }else{
      return (
        <h3>Follow</h3>
      );
    }
  }

  addSongsForOwner(){
    if(this.props.currentUser.id === this.props.playlist.owner_id){
      return (
        <div className="owner-playlist-options">
          <div className="owner-add-songs-playlist" onClick={this.linkToHomePage}>
            <h3>Add Songs</h3>
          </div>

          <div className="delete-playlist" onClick={this.deletePlaylist(this.props.playlist.id)}>
            <h3>Delete Playlist</h3>
          </div>
        </div>
      )
    }
    else{
      return(
      <div className="owner-add-songs-playlist" onClick={this.followPlaylist}>
        {this.renderFollowOrFollowing()}
      </div>
    );
    }
  }

  renderSongs(){
    if(this.props.playlist.songs){
      return (this.props.playlist.songs.map(song => (
        <li key= {`playlistSong-${song.id}`} className="song-title-container">
          <div className="song-title">
            {song.title}
          </div>

          <div className="add-song-to-que">Add Song To Que</div>

          <div className="buttons-on-songs">
            <div className="play-song"><i className="material-icons" onClick={this.playSong(song)}>play_circle_outline</i></div>
            <div className="add-song-que"><i className="material-icons" onClick={this.addSongToQue(song)}>queue_music</i></div>
            <div className="add-song-to-que">Add Song To Queue</div>
          </div>
        </li>)))
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
          <ul className="song-list-ol">
            {this.renderSongs()}
          </ul>
        </div>
      )
    }
    else{
      return (
        <div className="song-list-empty">
          <h1>Playlist Is Empty</h1>
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
          <div className="album-art-container-album-showpage" style={playlistStyle(playlist_art_url)}></div>
          {this.addSongsForOwner()}
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

export default withRouter(PlaylistShow);
