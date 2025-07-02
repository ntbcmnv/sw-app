'use client';

import {
  Line,
  LineChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

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
              style={{ backgroundColor: config[entry.dataKey]?.color }}
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

export default function ClientsTypesChart() {
  const chartData = [
    { year: '2018', individuals: 350000, juridical: 19000 },
    { year: '2019', individuals: 380000, juridical: 11000 },
    { year: '2020', individuals: 390000, juridical: 13000 },
    { year: '2021', individuals: 440000, juridical: 15000 },
    { year: '2022', individuals: 467000, juridical: 20000 },
    { year: '2023', individuals: 546000, juridical: 21000 },
    { year: '2024', individuals: 580000, juridical: 22000 },
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

  return (
    <div className="m-6 text-sm">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 0, bottom: 0, left: 16 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
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
            content={<ChartTooltipContent config={chartConfig} />}
          />
          {Object.keys(chartConfig).map((key) => (
            <Line
              key={key}
              dataKey={key}
              type="monotone"
              stroke={chartConfig[key].color}
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-4 flex flex-wrap justify-center gap-4">
        {Object.entries(chartConfig).map(([key, item]) => (
          <div key={key} className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-xs text-muted-foreground">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
