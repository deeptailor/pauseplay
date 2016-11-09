import { connect } from 'react-redux';
import Albums from './albums';
import { fetchAlbum, playSong, addSongToQue, addAllSongsToQue } from '../../actions/songs_actions';
import { fetchOwnedPlaylists, addSongToPlaylist, clearPlaylistSuccess } from '../../actions/playlist_actions'

const mapStateToProps = ({ songInfo, session, playlists }) => {
  return ({
    album: Object.keys(songInfo.albums).map(id => songInfo.albums[id])[0],
    songs: Object.keys(songInfo.songs).map(id => songInfo.songs[id]),
    currentSong: songInfo.currentSong,
    playing: songInfo.playing,
    currentUser: session.currentUser,
    playlists: Object.keys(playlists.playlists).map(id => playlists.playlists[id]),
    addSongSuccess: playlists.success
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    playSong: (song) => dispatch(playSong(song)),
    addSongToQue: (song) => dispatch(addSongToQue(song)),
    addAllSongsToQue: (songs) => dispatch(addAllSongsToQue(songs)),
    fetchOwnedPlaylists: (id) => dispatch(fetchOwnedPlaylists(id)),
    addSongToPlaylist: (playlist_id, song_id) => dispatch(addSongToPlaylist({playlist_id: playlist_id, song_id: song_id})),
    clearPlaylistSuccess: () => dispatch(clearPlaylistSuccess())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
