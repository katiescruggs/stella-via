const defaultAPODData = {
  image: require('../assets/orbit-loader.gif'),
  type: 'image',
  title: 'Loading... Please wait...',
  details: 'Loading... Please wait...'
};

export const apodReducer = (state = defaultAPODData, action) => {
  switch(action.type) {
  case 'SET_APOD':
    return action.apodData;
  default:
    return state;
  }
};