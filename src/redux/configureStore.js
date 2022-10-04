import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './mission/missions';
import rocketReducer from './reducers/rocketsReducers';

const rootReducer = combineReducers({
  missionsReducer,
  rocketReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(thunk),
});

export default store;
