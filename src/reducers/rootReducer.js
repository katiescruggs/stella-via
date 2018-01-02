import { combineReducers } from 'redux';
import { locationReducer } from './locationReducer';
import { pageReducer } from './pageReducer';
import { skyCoordsReducer } from './skyCoordsReducer';
import { apodReducer } from './apodReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  location: locationReducer,
  page: pageReducer,
  skyCoords: skyCoordsReducer,
  apodData: apodReducer,
  user: userReducer
});

export default rootReducer;