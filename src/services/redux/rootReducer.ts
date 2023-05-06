import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { weatherReducer } from './weatherReducer';

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['weather'],
};

const combinedReducers = combineReducers({
  weather: weatherReducer,
});

export const persistedReducer = persistReducer(persistConfig, combinedReducers);
