import { combineReducers } from 'redux';

import auth, { LOGOUT_SUCCESS } from '../containers/login/ducks';
import comics from '../containers/home/ducks';

const appReducer = combineReducers({
  auth,
  comics,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
