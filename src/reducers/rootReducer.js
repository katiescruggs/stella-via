import { combineReducers } from 'redux';
import { locationReducer } from './locationReducer';

const rootReducer = combineReducers({
  location: locationReducer
});

export default rootReducer;