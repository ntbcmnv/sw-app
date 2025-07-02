import type { BankRate } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchRates } from '@/store/thunks/ratesThunk.ts';
import type { RootState } from '@/app/store.ts';

interface RatesState {
  rates: BankRate[];
}

const initialState: RatesState = {
  rates: [],
};

export const selectAllRates = (state: RootState) => state.rates.rates;

export const ratesSlice = createSlice({
  name: 'rates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRates.pending, state => {
        state.rates = []
      })

      .addCase(fetchRates.fulfilled, (state, {payload}) => {
        state.rates = payload;
      })

      .addCase(fetchRates.rejected, state => {
        state.rates = []
      })
  }
});

export const ratesReducer = ratesSlice.reducer;