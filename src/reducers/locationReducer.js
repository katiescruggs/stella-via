const defaultLocation = {
  lat: '',
  lon: '',
  city: '',
  state: ''
};

export const locationReducer = (state = defaultLocation, action) => {
  switch(action.type) {
    case 'SET_LOCATION':
      return action.location;
    default:
      return state;
  }
}

