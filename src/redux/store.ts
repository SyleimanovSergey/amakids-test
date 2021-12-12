import { applyMiddleware, compose, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { rootReducer } from './reducers';

const composeDev = composeWithDevTools || compose;
const devTools = composeDev(applyMiddleware());

const store: Store = createStore(rootReducer, devTools);

export default store;
