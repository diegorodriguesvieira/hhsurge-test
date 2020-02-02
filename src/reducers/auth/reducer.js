import { isLoggedIn } from '../../helpers';

const INITIAL_STATE = {
  user: isLoggedIn(),
};

export default (state = INITIAL_STATE) => {
  return state;
};
