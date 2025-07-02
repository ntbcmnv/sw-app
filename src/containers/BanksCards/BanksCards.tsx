'use client'

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks.ts';
import { fetchRates } from '@/store/thunks/ratesThunk.ts';
import { selectAllRates } from '@/store/slices/ratesSlice.ts';
import BankCard from '@/components/BankCard/BankCard.tsx';
import type { BankRate } from '@/types';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from '@/components/ui/carousel';

const BanksCards = () => {
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

  return (
    <div className="px-6 sm:px-8">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto relative"
      >
        <CarouselContent className="items-stretch -mx-2">
          {filteredRates.map((rate) => (
            <CarouselItem
              key={rate.id}
              className="px-2 md:basis-1/2 lg:basis-1/4"
            >
              <div className="h-full">
                <BankCard info={rate}/>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="-left-8 sm:-left-10"/>
        <CarouselNext className="-right-8 sm:-right-10"/>
      </Carousel>
    </div>
  );
};

export default BanksCards;