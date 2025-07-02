import type { ChartConfig } from '@/types';

export const useCreditsDepositsChart = () => {
  const fullData = [
    {year: '2020', credits: 85000, deposits: 25000},
    {year: '2021', credits: 91000, deposits: 27000},
    {year: '2022', credits: 100000, deposits: 30000},
    {year: '2023', credits: 98000, deposits: 35000},
    {year: '2024', credits: 115000, deposits: 40000},
  ];

  const chartConfig: ChartConfig = {
    credits: {
      label: 'Кредиты',
      color: '#3b82f6',
    },
    deposits: {
      label: 'Депозиты',
      color: '#22c55e',
    },
  };

  const yAxisTicks = [20000, 40000, 60000, 80000, 100000, 120000];

  return {
    fullData,
    chartConfig,
    yAxisTicks
  }
}