import { combineReducers, configureStore } from '@reduxjs/toolkit';
import trafficReducer from './slices/trafficSlice';
import weatherReducer from './slices/weatherSlice';

export default configureStore({
  reducer: combineReducers({
    traffic: trafficReducer,
    weather: weatherReducer,
  }),
});