import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { homeReducer } from './HomeReducer';

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['home'],
};

const combinedReducers = combineReducers({
  home: homeReducer,
});

export const persistedReducer = persistReducer(persistConfig, combinedReducers);
