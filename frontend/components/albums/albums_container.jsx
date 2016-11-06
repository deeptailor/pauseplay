import { connect } from 'react-redux';
import Albums from './albums';
import { fetchAlbum, playSong} from '../../actions/songs_actions';


const mapStateToProps = ({ songInfo }) => {
  return ({
    album: Object.keys(songInfo.albums).map(id => songInfo.albums[id])[0],
    songs: Object.keys(songInfo.songs).map(id => songInfo.songs[id]),
    currentSong: songInfo.currentSong,
    playing: songInfo.playing
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    playSong: (song) => dispatch(playSong(song))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
