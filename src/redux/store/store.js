/* eslint-disable */
import { createStore, applyMiddleware } from 'redux';

import reducer from '../reducers/reducers.js';

const store = createStore(
  reducer
)

export default store