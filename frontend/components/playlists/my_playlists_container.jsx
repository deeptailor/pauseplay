import { connect } from 'react-redux';
import MyPlaylists from './my_playlists';
import { fetchOwnedPlaylists } from '../../actions/playlist_actions';

const mapStateToProps = ({ playlists, session }) => {
  return ({
    playlists: Object.keys(playlists.playlists).map(id => playlists.playlists[id]),
    currentUser: session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchOwnedPlaylists: (id) => dispatch(fetchOwnedPlaylists(id))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPlaylists);
