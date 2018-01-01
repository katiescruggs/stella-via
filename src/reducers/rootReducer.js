import { combineReducers } from 'redux';
import { locationReducer } from './locationReducer';
import { pageReducer } from './pageReducer';
import { skyCoordsReducer } from './skyCoordsReducer';
import { apodReducer } from './apodReducer';

const rootReducer = combineReducers({
  location: locationReducer,
  page: pageReducer,
  skyCoords: skyCoordsReducer,
  apodData: apodReducer
});

export default rootReducer;