import { persistReducer } from 'redux-persist';

import localforage from 'localforage';

import { combineReducers } from '@reduxjs/toolkit';

import iframeSlice from './features/iframe/store/slice';
import logsSlice from './features/logs/store/slice';

export const rootReducer = combineReducers({
  iframe: persistReducer(
    { key: 'iframe2', storage: localforage },
    iframeSlice.reducer,
  ),
  logs: logsSlice.reducer,
});
