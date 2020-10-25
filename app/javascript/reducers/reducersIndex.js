import { combineReducers } from 'redux';
import initDataReducer from './initDataReducer';

const rootReducer = combineReducers({
  clinicData: initDataReducer,
});

export default rootReducer;
