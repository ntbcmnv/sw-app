import type { ChartConfig } from '@/types';

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

export function ChartTooltipContent({
  payload,
  active,
  config,
}: ChartTooltipContentProps) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="max-w-[300px] rounded bg-background p-4 shadow-sm">
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