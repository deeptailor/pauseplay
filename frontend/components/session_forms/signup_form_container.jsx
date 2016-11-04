import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import SignupForm from './signup_form'

const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
});

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
