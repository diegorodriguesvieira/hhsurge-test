import { combineReducers } from 'redux';

import auth, { LOGOUT_SUCCESS } from '../containers/login/ducks';
import hero from '../containers/home/ducks';

const appReducer = combineReducers({
  auth,
  hero,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
