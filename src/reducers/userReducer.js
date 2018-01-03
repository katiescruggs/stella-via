export const userReducer = (state = null, action) => {
  switch(action.type) {
  case 'LOGIN':
    return action.userInfo;
  case 'LOGOUT':
    return null;
  default:
    return state;
  }
};