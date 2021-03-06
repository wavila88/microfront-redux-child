import { createStore, applyMiddleware } from 'redux';
import { globalReducers } from './globalReducers';
import { reducers } from './rootReducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import { GlobalStore } from 'redux-micro-frontend';
import thunk from 'redux-thunk';



//My own store

export const store = createStore(reducers, composeWithDevTools());
//Global Store
const globalStore = GlobalStore.Get();
const appGlobalStore = createStore(globalReducers, composeWithDevTools(), applyMiddleware(thunk));
globalStore.RegisterStore("App1", appGlobalStore);
globalStore.RegisterGlobalActions("App1", ['INSERT_MICRO_FRONT1_OBJECT','INSERT_GLOBAL_FRONT1_OBJECT']);






