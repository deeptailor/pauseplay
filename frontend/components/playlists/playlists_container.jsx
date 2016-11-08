import { connect } from 'react-redux';
import Playlists from './playlists';
import { fetchPlaylists } from '../../actions/playlist_actions'

const mapStateToProps = ({ playlists }) => {
  return ({
    playlists: Object.keys(playlists.playlists).map(id => playlists.playlists[id])
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPlaylists: () => dispatch(fetchPlaylists())
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);
