import { combineReducers, configureStore } from '@reduxjs/toolkit';
import trafficReducer from './slices/trafficSlice';

export default configureStore({
  reducer: combineReducers({
    traffic: trafficReducer,
  }),
});