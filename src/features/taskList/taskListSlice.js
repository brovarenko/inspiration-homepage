import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    task:[],
  };

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.task.push(action.payload)
        },
        removeTask: (state,action) => {
            state.task.filter(e => e.id !== action.payload)
        }
    }

});

export const { addTask, removeTask } =  taskSlice.actions;

export const selectTask = (state) => state.task.task;

export default taskSlice.reducer;
