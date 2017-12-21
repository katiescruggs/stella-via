export const locationReducer = (state = {}, action) => {
  switch(action.type) {
    case 'GET_LOCATION':
    console.log('locationReducer')
    return state
    default:
    return state
  }
}

