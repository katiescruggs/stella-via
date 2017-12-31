export const skyCoordsReducer = (state = null, action) => {
  switch(action.type) {
    case 'SET_SKY_COORDS':
      return action.skyCoords;
    default: 
      return state;
  }
};