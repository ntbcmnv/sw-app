'use client';

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, } from 'recharts';

interface ChartConfig {
  [key: string]: {
    label: string;
    color: string;
  };
}

interface ChartTooltipEntry {
  dataKey: string;
  value: number;
  payload: Record<string, unknown>;
}

interface ChartTooltipContentProps {
  payload?: ChartTooltipEntry[];
  active?: boolean;
  config: ChartConfig;
}

function ChartTooltipContent({
  payload,
  active,
  config,
}: ChartTooltipContentProps) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="max-w-[300px] rounded border bg-background p-4 shadow-sm">
      <p className="text-sm font-medium text-muted-foreground">
        {String(payload[0].payload.year)}
      </p>
      {payload.map((entry, index) => (
        <div key={index} className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{backgroundColor: config[entry.dataKey]?.color}}
            />
            <span className="text-xs text-muted-foreground">
              {config[entry.dataKey]?.label}
            </span>
            <span className="text-sm font-medium">
            {entry.value.toLocaleString('ru-RU')}
          </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CreditsDepositsChart() {
  const chartData = [
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

  return (
    <div className="m-6 text-sm">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={chartData}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis
            dataKey="year"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            ticks={yAxisTicks}
            tickFormatter={(value) =>
              typeof value === 'number' ? value.toLocaleString('ru-RU') : value
            }
          />
          <Tooltip
            cursor={false}
            content={<ChartTooltipContent config={chartConfig}/>}
          />
          {Object.keys(chartConfig).map((key) => (
            <Area
              key={key}
              dataKey={key}
              type="basis"
              stroke={chartConfig[key].color}
              fill={chartConfig[key].color}
              fillOpacity={0.3}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>

      <div className="mt-4 flex flex-wrap justify-center gap-4">
        {Object.entries(chartConfig).map(([key, item]) => (
          <div key={key} className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{backgroundColor: item.color}}
            />
            <span className="text-xs text-muted-foreground">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
