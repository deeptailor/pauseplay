import { receiveCurrentUser,
         receiveErrors,
         LOGIN,
         LOGOUT,
         SIGNUP
       } from '../actions/session_actions';

import { login, signup, logout} from '../util/session_api_util'

const SessionMiddleware = ({getState, dispatch}) => (next) => (action) => {

  const successCb = (user) => dispatch(receiveCurrentUser(user));
  const errorCb = (errors) => dispatch(receiveErrors(errors.responseJSON));

  switch (action.type){

    case SIGNUP:
      signup(action.user, successCb, errorCb)
      return next(action);

    case LOGIN:
      login(action.user, successCb, errorCb)
      return next(action);

    case LOGOUT:
      logout(()=> next(action));
      break;

    default:
      return next(action);

  }
};

export default SessionMiddleware;
