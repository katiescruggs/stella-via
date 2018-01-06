export const constellationReducer = (state = null, action) => {
  switch(action.type) {
  case 'SET_CONSTELLATION':
    return action.constellation;
  default:
    return state;
  }
};