import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, } from 'recharts';
import { useChartZoom } from '@/components/ChartZoomControls/hooks/useChartZoom.ts';
import { ChartZoomControls } from '@/components/ChartZoomControls/ChartZoomControls.tsx';
import { useClientsTypesChart } from '@/components/ClientsTypesChart/hooks/useClientsTypesChart.ts';
import { ChartTooltipContent } from '@/components/ui/chart.tsx';

const ClientsTypesChart = () => {
  const {
    fullData,
    chartConfig,
    yAxisTicks,
  } = useClientsTypesChart()

  const {
    visibleData,
    zoomIn,
    zoomOut,
    moveLeft,
    moveRight,
    reset,
    canZoomIn,
    canZoomOut,
    canMoveLeft,
    canMoveRight,
  } = useChartZoom(fullData, 3);

  return (
    <div className="m-6 text-sm">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h3 className="font-bold text-sm ms-2 sm:ms-0">Распределение клиентов по типам</h3>
        <ChartZoomControls
          zoomIn={zoomIn}
          zoomOut={zoomOut}
          moveLeft={moveLeft}
          moveRight={moveRight}
          reset={reset}
          canZoomIn={canZoomIn}
          canZoomOut={canZoomOut}
          canMoveLeft={canMoveLeft}
          canMoveRight={canMoveRight}
        />
      </div>

      <div className="">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={visibleData}
            margin={{top: 20, right: 0, bottom: 0, left: 16}}
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
              <Line
                key={key}
                dataKey={key}
                type="monotone"
                stroke={chartConfig[key].color}
                strokeWidth={3}
                dot={false}
                activeDot={{r: 6}}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

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

export default ClientsTypesChart;