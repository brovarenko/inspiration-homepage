/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Background from '../../api/Background';

const initialState = {
  background: [],
  status: false,
  count: 0,
};

export const getBackgroundAsync = createAsyncThunk(
  'background/getBackgroundAsync',
  async () => {
    const response = await Background.getBackground();
    return response;
  },
);

const backgroundSlice = createSlice({
  name: 'background',
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
  },
  extraReducers: {
    [getBackgroundAsync.pending]: (state) => {
      state.status = false;
    },
    [getBackgroundAsync.fulfilled]: (state, action) => {
      state.status = true;
      state.background = action.payload;
    },
    [getBackgroundAsync.rejected]: (state) => {
      state.status = false;
    },
  },
});

export const selectStatus = (state) => state.background.status;
export const selectCount = (state) => state.background.count;
export const selectBackground = (state) => state.background.background[state.background.count];
export const { increment, decrement } = backgroundSlice.actions;

export default backgroundSlice.reducer;
