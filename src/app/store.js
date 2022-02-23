import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import taskReducer from '../features/taskList/taskListSlice';
import weatherSlice from '../features/weather/weatherSlice';
import backgroundSlice from '../features/background/backgroundSlice';
import quoteSlice from '../features/quote/quoteSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer,
    weather: weatherSlice,
    background: backgroundSlice,
    quotes: quoteSlice
  },
});
