import { createStore } from 'redux';
import { mainReducer } from './reducers';
import { combineReducers } from 'redux';

export const store = createStore(combineReducers({
  mainReducer: mainReducer
}));

export type RootState = ReturnType<typeof mainReducer>;
