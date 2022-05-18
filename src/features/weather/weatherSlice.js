/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Weather from '../../api/Weather';

const initialState = {
  weather: {
    temp: 0,
    icon: '',
    description: '',
    sity: '',
  },
  status: false,
};

export const getWeatherAsync = createAsyncThunk(
  'weather/getWeatherAsync',
  async (city) => {
    const response = await Weather.getWeather(city);
    return response;
  },
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getWeatherAsync.pending]: (state) => {
      state.status = false;
    },
    [getWeatherAsync.fulfilled]: (state, action) => {
      state.status = true;
      state.weather.temp = action.payload.main.temp;
      state.weather.icon = action.payload.weather[0].icon;
      state.weather.description = action.payload.weather[0].description;
      state.weather.city = action.payload.name;
    },
    [getWeatherAsync.rejected]: (state) => {
      state.status = false;
    },
  },
});

export const selectStatus = (state) => state.weather.status;
export const selectWeather = (state) => state.weather.weather;

export default weatherSlice.reducer;
