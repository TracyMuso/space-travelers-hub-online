import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rocketReducer from './reducers/rocketsReducers';

const reducer = combineReducers({ rocketReducer });

const store = configureStore({ reducer });

export default store;
