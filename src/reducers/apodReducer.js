const defaultAPODData = {
  image: require('../assets/star-background.jpg'),
  type: 'image',
  title: 'Loading... Please wait...',
  details: `Loading... Please wait...`
};


export const apodReducer = (state = defaultAPODData, action) => {
  switch(action.type) {
  case 'SET_APOD':
    return action.apodData;
  default:
    return state;
  }
};