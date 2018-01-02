export const locationReducer = (state = null, action) => {
  switch(action.type) {
  case 'LOGIN':
    return action.userInfo;
  default:
    return state;
  }
};