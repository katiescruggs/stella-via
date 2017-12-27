import { combineReducers } from 'redux';
import { locationReducer } from './locationReducer';
import { timeReducer } from './timeReducer';

const rootReducer = combineReducers({
  location: locationReducer,
  now: timeReducer
});

export default rootReducer;