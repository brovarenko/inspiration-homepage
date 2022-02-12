import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import taskReducer from '../features/taskList/taskListSlice';
import weatherSlice from '../features/weather/weatherSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer,
    weather: weatherSlice
  },
});
