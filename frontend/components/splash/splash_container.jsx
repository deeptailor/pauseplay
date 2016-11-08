import { connect } from 'react-redux';
import Splash from './splash';
import {fetchAlbums} from '../../actions/songs_actions'


const mapStateToProps = ({songInfo}) => {
  return {
    albums: Object.keys(songInfo.albums).map(id => songInfo.albums[id])
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
