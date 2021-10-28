const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getError = state => state.auth.isError;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getError,
};
export default authSelectors;
