import { receiveCurrentUser,
         receiveErrors,
         LOGIN,
         LOGOUT,
         SIGNUP
       } from '../actions/session_actions';

import { login, signup, logout} from '../util/session_api_util'

const SessionMiddleware = (state) => (next) => (action) => {

  const successCb = (user) => store.dispatch(receiveCurrentUser(user));
  const errorCb = (errors) => store.dispatch(receiveErrors(errors.responseJSON));


  switch (action.type){

    case SIGNUP:
      signup(action.user, successCb, errorCb)
      return next(action);

    case LOGIN:
      login(action.user, successCb, errorCb)
      return next(action);

    case LOGOUT:
      logout(() => next(action));
      break

    default:
      return next(action);

  }
};

export default SessionMiddleware;
