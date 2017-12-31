import { combineReducers } from 'redux';
import { locationReducer } from './locationReducer';
import { pageReducer } from './pageReducer';
import { skyCoordsReducer } from './skyCoordsReducer';

const rootReducer = combineReducers({
  location: locationReducer,
  page: pageReducer,
  skyCoords: skyCoordsReducer
});

export default rootReducer;