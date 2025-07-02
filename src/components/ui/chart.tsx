'use client';

import React from 'react';

export type ChartConfig = Record<
  string,
  {
    label: string;
    color: string;
  }
>;

interface ChartContainerProps {
  config: ChartConfig;
  children: React.ReactNode;
  className?: string;
}

export function ChartContainer({
  config,
  children,
  className,
}: ChartContainerProps) {
  return (
    <div className={className}>
      {children}
      <div className="mt-4 flex flex-wrap justify-center gap-6 border-0">
        {Object.entries(config).map(([key, item]) => (
          <div key={key} className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{backgroundColor: item.color}}
            />
            <span className="text-xs text-muted-foreground">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
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

export function ChartTooltipContent({
  payload,
  active,
  config,
}: ChartTooltipContentProps) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="max-w-[150px] rounded bg-background">
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
          </div>
          <span className="text-sm font-medium">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}