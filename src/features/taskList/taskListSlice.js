import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    task:[
       
    ],
  };

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.task.push(action.payload);
        },
        removeTask: (state, action) => {
            state.task = state.task.filter(e => e.id !== action.payload);
        },
        finishTask:(state, action) => {
            state.task.map(e =>  { if (e.id === action.payload) e.isDone = !e.isDone });
        
        }
    }

});

export const { addTask, removeTask, finishTask } =  taskSlice.actions;

export const selectTask = (state) => state.task.task;

export default taskSlice.reducer;
