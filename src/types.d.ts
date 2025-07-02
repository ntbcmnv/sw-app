export interface CurrencyRate {
  id: number;
  organization_id: number;
  type: string;
  base_currency_id: number;
  buy_usd: string | null;
  sell_usd: string | null;
  buy_eur: string | null;
  sell_eur: string | null;
  buy_rub: string | null;
  sell_rub: string | null;
  buy_kzt: string | null;
  sell_kzt: string | null;
  created_at: string;
  updated_at: string;
  is_current: number;
}

export interface BankRate {
  id: number;
  official_title: string;
  title: string;
  rates: CurrencyRate[];
  website_url: string;
}

export interface ChartConfig {
  [key: string]: {
    label: string;
    color: string;
  };
}