import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT, CLEAR_ERRORS} from '../actions/session_actions'
import merge from 'lodash/merge'

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState = merge({}, state)


  switch(action.type){

    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      newState.errors = [];
      return newState;

    case RECEIVE_ERRORS:
      newState.currentUser = null;
      newState.errors = action.errors;
      return newState;

    case CLEAR_ERRORS:
      newState.errors = [];
      return newState;

    case LOGOUT:
      return _nullUser;

    default:
      return state;
  }
};

export default SessionReducer;
