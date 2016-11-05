import { connect } from 'react-redux';
import Albums from './albums';
import { fetchAlbum } from '../../actions/songs_actions';


const mapStateToProps = ({ songInfo }) => {
  return ({
    album: Object.keys(songInfo.albums).map(id => songInfo.albums[id])[0],
    songs: Object.keys(songInfo.songs).map(id => songInfo.songs[id])
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchAlbum: (id) => dispatch(fetchAlbum(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
