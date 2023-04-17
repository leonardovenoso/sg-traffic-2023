import { combineReducers, configureStore } from '@reduxjs/toolkit';
import locationsReducer from './slices/locationsSlice';

export default configureStore({
  reducer: combineReducers({
    locations: locationsReducer,
  }),
});