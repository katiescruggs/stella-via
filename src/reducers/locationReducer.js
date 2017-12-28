const defaultLocation = {
  lat: '',
  lon: ''
};

export const locationReducer = (state = defaultLocation, action) => {
  switch(action.type) {
    case 'SET_LOCATION':
      return action.location;
    default:
      return state;
  }
};

