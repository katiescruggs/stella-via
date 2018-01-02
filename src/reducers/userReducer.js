export const userReducer = (state = null, action) => {
  console.log(action.type)
  switch(action.type) {
  case 'LOGIN':
    return action.userInfo;
  case 'LOGOUT':
    return null;
  default:
    return state;
  }
};