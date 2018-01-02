export const userReducer = (state = null, action) => {
  switch(action.type) {
  case 'LOGIN':
    return action.userInfo;
  default:
    return state;
  }
};