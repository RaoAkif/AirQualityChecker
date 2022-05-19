import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import { logger } from 'redux-logger';
import weatherReducer from './weather/weatherSlice';

export default configureStore({
  reducer: weatherReducer,
  // middleware: [thunk, logger],
});
