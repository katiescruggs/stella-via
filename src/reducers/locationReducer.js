export const locationReducer = (state = {lat: 'searching', lon: '...'}, action) => {
  switch(action.type) {
    case 'SET_LOCATION':
      return {lat: action.location.lat, lon: action.location.lon};
    default:
      return state;
  }
}

