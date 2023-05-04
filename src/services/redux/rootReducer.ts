import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { homeReducer } from './HomeReducer';

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

// const combinedReducers = {
//   user: {} as any,
// };

// const reducer = (state: any, action: any) => combineReducer(state, action);

export const persistedReducer = persistReducer(persistConfig, homeReducer);
