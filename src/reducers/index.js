import { combineReducers } from 'redux';

import auth from '../containers/login/ducks';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
