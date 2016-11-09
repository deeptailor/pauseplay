import { connect } from 'react-redux';
import PlaylistCreate from './playlist_create';
import { createPlaylist } from '../../actions/playlist_actions';
import { clearErrors } from '../../actions/session_actions';


const mapStateToProps = ({ playlists, session }) => {
  return ({
    owner: session.currentUser,
    playlist: playlists.playlists,
    errors: playlists.errors
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    clearErrors: () => dispatch(clearErrors())
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistCreate);
