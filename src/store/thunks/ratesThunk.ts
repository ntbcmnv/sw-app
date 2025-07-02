import { createAsyncThunk } from '@reduxjs/toolkit';
import type { BankRate } from '@/types';
import axiosApi from '@/helpers/axiosApi.ts';


export const fetchRates = createAsyncThunk<BankRate[], void>(
  'rates/fetchRates',
  async () => {
    const response = await axiosApi.get<BankRate[]>('current');
    return response.data
  }
);
