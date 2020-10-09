import { combineReducers } from 'redux';
import departmentsReducer from './departmentsReducer';

const rootReducer = combineReducers({
  clinicData: departmentsReducer,
});

export default rootReducer;
