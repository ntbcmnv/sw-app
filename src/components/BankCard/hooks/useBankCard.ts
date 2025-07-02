import { useState } from 'react';
import type { BankRate } from '@/types';

export const useBankCard = (info: BankRate) => {
  const [logoError, setLogoError] = useState(false);

  let logoUrl = '';

  try {
    if (info.website_url?.startsWith('http')) {
      const domain = new URL(info.website_url).hostname;
      logoUrl = `https://logo.clearbit.com/${domain}`;
    }
  } catch (error) {
    logoUrl = '';
    console.error('Invalid website_url:', info.website_url, error);
  }

  return {
    logoError,
    setLogoError,
    logoUrl,
  }
}