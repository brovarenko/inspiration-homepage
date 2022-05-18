import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/taskList/taskListSlice';
import weatherSlice from '../features/weather/weatherSlice';
import backgroundSlice from '../features/background/backgroundSlice';
import quoteSlice from '../features/quote/quoteSlice';

const store = configureStore({
  reducer: {
    task: taskReducer,
    weather: weatherSlice,
    background: backgroundSlice,
    quotes: quoteSlice,
  },
});

export default store;
