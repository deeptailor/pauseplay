import { connect } from 'react-redux';
import FollowedPlaylists from './followed_playlists';
import { fetchFollowedPlaylists } from '../../actions/playlist_actions';

const mapStateToProps = ({ playlists, session }) => {
  return ({
    playlists: Object.keys(playlists.followedPlaylists.playlists).map(id => playlists.followedPlaylists.playlists[id]),
    currentUser: session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchFollowedPlaylists: (id) => dispatch(fetchFollowedPlaylists(id))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowedPlaylists);
