export const findUser = (users, username, password) => {
  return users.find(({ user: itemUsername, email: itemEmail, password: itemPassword }) => {
    return (
      (username === itemUsername || username === itemEmail) &&
      itemPassword.toString() === password.toString()
    );
  });
};

export const isLoggedIn = () => {
  const user = window.localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const setUserLocalStorage = user => {
  window.localStorage.setItem('user', JSON.stringify(user));
};

export const removeUserLocalStorage = () => {
  window.localStorage.removeItem('user');
};
