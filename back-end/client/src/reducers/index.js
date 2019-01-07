import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import boardReducer from './boardReducer';
import tripReducer from './tripReducer';


export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  board: boardReducer,
  trip: tripReducer
});