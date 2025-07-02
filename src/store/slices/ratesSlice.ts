import type { BankRate } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchRates } from '@/store/thunks/ratesThunk.ts';
import type { RootState } from '@/app/store.ts';


interface RatesState {
  rates: BankRate[];
  rate: BankRate | null;
  isLoading: boolean;
  error: boolean;
}

const initialState: RatesState = {
  rates: [],
  rate: null,
  isLoading: false,
  error: false,
};

export const selectAllRates = (state: RootState) => state.rates.rates;
export const selectOneRate = (state: RootState) => state.rates.rate;
export const selectRateLoading = (state: RootState) => state.rates.isLoading;
export const selectRateError = (state: RootState) => state.rates.error;

export const ratesSlice = createSlice({
  name: 'rates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRates.pending, state => {
        state.isLoading = true
        state.error = false
      })

    .addCase(fetchRates.fulfilled, (state, {payload}) => {
      state.isLoading = false
      state.rates = payload;
      state.error = false
    })

      .addCase(fetchRates.rejected, state => {
      state.isLoading = false
      state.error = true
    })
  }
});

export const ratesReducer = ratesSlice.reducer;