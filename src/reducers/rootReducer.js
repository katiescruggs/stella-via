import { combineReducers } from 'redux';
import { locationReducer } from './locationReducer';
import { timeReducer } from './timeReducer';
import { pageReducer } from './pageReducer';

const rootReducer = combineReducers({
  location: locationReducer,
  page: pageReducer,
  now: timeReducer
});

export default rootReducer;