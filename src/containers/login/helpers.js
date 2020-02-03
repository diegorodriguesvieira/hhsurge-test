export const findUser = (users, username, password) => {
  return users.find(({ user: itemUsername, email: itemEmail, password: itemPassword }) => {
    return (
      (username === itemUsername || username === itemEmail) &&
      itemPassword.toString() === password.toString()
    );
  });
};

export const isLoggedIn = () => window.localStorage.getItem('user');

export const setUserLocalStorage = user => {
  window.localStorage.setItem('user', JSON.stringify(user));
};
