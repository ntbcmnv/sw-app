import type { ChartConfig } from '@/types';

export const useClientsTypesChart = () => {
  const fullData = [
    {year: '2018', individuals: 350000, juridical: 19000},
    {year: '2019', individuals: 380000, juridical: 11000},
    {year: '2020', individuals: 390000, juridical: 13000},
    {year: '2021', individuals: 440000, juridical: 15000},
    {year: '2022', individuals: 467000, juridical: 20000},
    {year: '2023', individuals: 546000, juridical: 21000},
    {year: '2024', individuals: 580000, juridical: 22000},
  ];

  const chartConfig: ChartConfig = {
    individuals: {
      label: 'Физические лица',
      color: '#22c55e',
    },
    juridical: {
      label: 'Юридические лица',
      color: '#3b82f6',
    },
  };

  const yAxisTicks = [0, 100000, 200000, 300000, 400000, 500000];

  return {
    fullData,
    chartConfig,
    yAxisTicks,
  }
}