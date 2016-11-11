import { connect } from 'react-redux';
import UserView from './user_view';
import { fetchOwnedPlaylists } from '../../actions/playlist_actions';

const mapStateToProps = ({ session, playlists }) => {
  return ({
    session: session,
    playlists: playlists
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchOwnedPlaylists: (id) => dispatch(fetchOwnedPlaylists(id))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(UserView);
