import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { playSong, addSongToQue, addAllSongsToQue } from '../../actions/songs_actions'

const mapStateToProps = ({playlists}) =>{
  return ({
    playlist: playlists.playlists
  })
}


const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    playSong: (song) => dispatch(playSong(song)),
    addSongToQue: (song) => dispatch(addSongToQue(song)),
    addAllSongsToQue: (songs) => dispatch(addAllSongsToQue(songs))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
