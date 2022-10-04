import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './mission/missions';

const rootReducer = combineReducers({
  missionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(thunk),
});

export default store;
