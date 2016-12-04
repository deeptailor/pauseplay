import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { fetchPlaylist, followPlaylistRequest, clearPlaylistFollowErrorAndSuccess, fetchFollowedPlaylists, deletePlaylist } from '../../actions/playlist_actions';
import { playSong, addSongToQue, addAllSongsToQue, pauseSong} from '../../actions/songs_actions'

const mapStateToProps = ({songInfo, playlists, session}) =>{
  return ({
    playlist: playlists.playlists,
    currentUser: session.currentUser,
    success: playlists.followedPlaylists.success,
    currentSong: songInfo.currentSong,
    pause: songInfo.pauseSong,
    error: playlists.followedPlaylists.error,
    followedPlaylistIds: Object.keys(playlists.followedPlaylists.playlists)
  })
}


const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    fetchFollowedPlaylists: (user_id) => dispatch(fetchFollowedPlaylists(user_id)),
    playSong: (song) => dispatch(playSong(song)),
    addSongToQue: (song) => dispatch(addSongToQue(song)),
    addAllSongsToQue: (songs) => dispatch(addAllSongsToQue(songs)),
    followPlaylistRequest: (userId, playlistId) => dispatch(followPlaylistRequest({user_id: userId, playlist_id: playlistId})),
    clearPlaylistErrors: () => dispatch(clearPlaylistErrors()),
    clearPlaylistFollowErrorAndSuccess: () => dispatch(clearPlaylistFollowErrorAndSuccess()),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    pauseSong: () => dispatch(pauseSong())
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
