import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import taskReducer from '../features/taskList/taskListSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer
  },
});
