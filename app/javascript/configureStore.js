import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducersIndex';

const initialState = {
  clinicData: {
    departments: [],
    doctors: [],
  },
};

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
  );
  return store;
}
