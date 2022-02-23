import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Background from '../../api/Background';

const initialState = {
  background: {},
  status: false
};

export const getBackgroundAsync = createAsyncThunk(
  'background/getBackgroundAsync',
  async () => {
    
    const response = await Background.getBackground();
    
    return response;
  }
);

const backgroundSlice = createSlice({
  name: 'background',
  initialState,
  reducers: {
  },
  extraReducers:{
    
    [getBackgroundAsync.pending]: (state) => {
        state.status = false;
      },
    [getBackgroundAsync.fulfilled]: (state, action) => {
        state.status = true;
        state.background = action.payload;
      },
    [getBackgroundAsync.rejected]: (state) => {
        state.status = false;
      }
  },
});


export const selectStatus = (state) => state.background.status;
export const selectBackground = (state) => state.background.background;



export default backgroundSlice.reducer;