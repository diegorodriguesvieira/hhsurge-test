import { combineReducers } from 'redux';

import auth from '../containers/login/ducks';
import comics from '../containers/home/ducks';

const rootReducer = combineReducers({
  auth,
  comics,
});

export default rootReducer;
