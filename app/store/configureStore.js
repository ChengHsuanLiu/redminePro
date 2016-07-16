import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';

export default function configureStore(initialState) {
  const createStoreWithMiddleware = applyMiddleware(
    thunk,
  )(createStore);

  const store = createStoreWithMiddleware(reducer, initialState);

  return store;
}
