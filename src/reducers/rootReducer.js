import { combineReducers } from 'redux';
import { locationReducer } from './locationReducer';
import { pageReducer } from './pageReducer';
import { skyCoordsReducer } from './skyCoordsReducer';
import { apodReducer } from './apodReducer';
import { constellationReducer } from './constellationReducer';

const rootReducer = combineReducers({
  location: locationReducer,
  page: pageReducer,
  skyCoords: skyCoordsReducer,
  apodData: apodReducer,
  constellation: constellationReducer
});

export default rootReducer;