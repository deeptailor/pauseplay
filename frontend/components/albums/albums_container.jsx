import { connect } from 'react-redux';
import Albums from './albums';
import { fetchAlbum, playSong, addSongToQue, addAllSongsToQue, pauseSong} from '../../actions/songs_actions';
import { fetchOwnedPlaylists, addSongToPlaylist, clearPlaylistSuccess, clearPlaylistErrors } from '../../actions/playlist_actions'

const mapStateToProps = ({ songInfo, session, playlists }) => {
  return ({
    album: Object.keys(songInfo.albums).map(id => songInfo.albums[id])[0],
    songs: Object.keys(songInfo.songs).map(id => songInfo.songs[id]),
    pause: songInfo.pauseSong,
    currentSong: songInfo.currentSong,
    playing: songInfo.playing,
    currentUser: session.currentUser,
    playlists: Object.keys(playlists.playlists).map(id => playlists.playlists[id]),
    addSongSuccess: playlists.success,
    errors: playlists.errors
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
    clearPlaylistSuccess: () => dispatch(clearPlaylistSuccess()),
    clearPlaylistErrors: () => dispatch(clearPlaylistErrors()),
    pauseSong: () => dispatch(pauseSong())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
