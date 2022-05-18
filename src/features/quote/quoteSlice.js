/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getRandomQuote from '../../api/Quote';

export const fetchQuotes = createAsyncThunk('quotes/fetchQuotes', async () => {
  const response = await getRandomQuote();
  return response;
});

export const quotesSlice = createSlice({
  name: 'quotes',
  initialState: {
    quote: {},
    status: '',
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuotes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.quote = action.payload;
      })
      .addCase(fetchQuotes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default quotesSlice.reducer;

export const selectQuote = (state) => state.quotes.quote;
export const selectQuoteStatus = (state) => state.quotes.status;
