import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

const initialState = {
  things: [
    {
      name: 'test 1',
      guid: '123',
    },
    {
      name: 'test 2',
      guid: '123-123',
    },
    {
      name: 'test 3',
      guid: '123-123-123',
    },
  ],
};

function rootReducer(state, action) {
  // console.log(action.type);
  switch (action.type) {
    case 'GET_THINGS_SUCCESS':
      return { things: action.json.things };
    default:
      return state;
  }
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
  );
  return store;
}
