import { useAppDispatch, useAppSelector } from '@/app/hooks.ts';
import { selectAllRates } from '@/store/slices/ratesSlice.ts';
import { useEffect } from 'react';
import { fetchRates } from '@/store/thunks/ratesThunk.ts';
import type { BankRate } from '@/types';

export const useBanks = () => {
  const dispatch = useAppDispatch();
  const rates = useAppSelector(selectAllRates);

  useEffect(() => {
    dispatch(fetchRates());
  }, [dispatch]);

  const hasRates = (bank: BankRate): boolean =>
    bank.rates.some((r) =>
      r.buy_usd || r.sell_usd ||
      r.buy_eur || r.sell_eur ||
      r.buy_rub || r.sell_rub ||
      r.buy_kzt || r.sell_kzt
    );

  const filteredRates = rates.filter(hasRates);

  return {
    filteredRates,
  }
}