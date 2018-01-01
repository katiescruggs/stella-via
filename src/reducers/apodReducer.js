export const apodReducer = (state = null, action) => {
  switch(action.type) {
  case 'SET_APOD':
    return action.apodData;
  default:
    return state;
  }
};