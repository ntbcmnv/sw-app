import React from 'react';
import type { BankRate } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Clock } from 'lucide-react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru'
import { currencyData } from '@/helpers/globals.ts';
import { Separator } from '@/components/ui/separator.tsx';
import { useBankCard } from '@/components/BankCard/hooks/useBankCard.ts';

dayjs.locale('ru')

interface Props {
  info: BankRate;
}

const BankCard: React.FC<Props> = ({info}) => {
  const {
    logoError,
    setLogoError,
    logoUrl,
  } = useBankCard(info)

  return (
    <Card className="flex flex-col h-full shadow-none">
      <CardHeader>
        <div className="flex justify-start gap-3 items-center">
          {!logoError && logoUrl && (
            <img
              src={logoUrl}
              alt="Bank logo"
              className="w-8 h-8 object-cover"
              onError={() => setLogoError(true)}
            />
          )}
          <CardTitle className="text-sm">{info.title}</CardTitle>
        </div>

        <div className="flex justify-between gap-2 items-center mt-3">
          <div className="flex justify-start items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground"/>
            <p className="text-sm text-muted-foreground">
              {info.rates[0]?.updated_at
                ? dayjs(info.rates[0].updated_at).format('HH:mm')
                : '-'}
            </p>
          </div>

          <div className="flex justify-end gap-2">
            <p className="text-muted-foreground text-sm">Покупка</p>
            <p className="text-muted-foreground text-sm">Продажа</p>
          </div>
        </div>


      </CardHeader>

      <Separator/>

      <CardContent className="flex-grow overflow-auto">
        {(() => {
          const rate = info.rates.find(r => r.type === 'cashless') || info.rates.find(r => r.type === 'regular');

          if (!rate) return <p>Курсы недоступны</p>;

          return (
            <div>
              {Object.entries(currencyData).map(([code, meta]) => {
                const buy = rate[`buy_${meta.key}` as keyof typeof rate];
                const sell = rate[`sell_${meta.key}` as keyof typeof rate];

                if (!buy && !sell) return null;

                return (
                  <div key={code} className="flex justify-between items-center gap-2 mb-2">
                    <img
                      src={meta.flag}
                      alt={`${code} flag`}
                      className="w-6 h-4 object-contain"
                    />
                    <span className="font-medium">{code}</span>
                    <span>{buy ?? '-'}</span>
                    <span>{sell ?? '-'}</span>
                  </div>
                );
              })}
            </div>
          );
        })()}
      </CardContent>
    </Card>
  );
};

export default BankCard;