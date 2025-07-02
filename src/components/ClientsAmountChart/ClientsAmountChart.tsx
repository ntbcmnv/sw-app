import { Cell, Pie, PieChart, Tooltip } from 'recharts'

interface TooltipPayloadEntry {
  name: string;
  value?: number;
  [key: string]: unknown;
}

const chartData = [
  {region: 'Чуй', clients: 207000, color: '#2F80ED'},
  {region: 'Ош', clients: 154000, color: '#27AE60'},
  {region: 'Нарын', clients: 106000, color: '#9B51E0'},
  {region: 'Жалал-Абад', clients: 121000, color: '#F2994A'},
  {region: 'Баткен', clients: 110000, color: '#EB5757'},
  {region: 'Талас', clients: 83000, color: '#56CCF2'},
  {region: 'Иссык-Куль', clients: 190000, color: '#2D9CDB'},
]

const totalClients = chartData.reduce((sum, item) => sum + item.clients, 0)

const chartConfig = Object.fromEntries(
  chartData.map(({region, color}) => [region, {label: region, color}])
)

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean
  payload?: TooltipPayloadEntry[]
}) {
  if (!active || !payload || payload.length === 0) return null

  const data = payload[0]
  const region = data.name
  const clients = data.value
  const color = chartConfig[region]?.color || '#000'

  return (
    <div className="rounded bg-white dark:bg-gray-800 p-3 shadow-md max-w-[200px]">
      <div className="flex items-center gap-2 mb-2">
        <div className="h-3 w-3 rounded-full" style={{backgroundColor: color}}/>
        <span className="font-semibold text-sm">{region}</span>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs text-muted-foreground">Клиентов: </span>
        <span className="text-sm font-medium">{clients}</span>
      </div>
    </div>
  )
}

export default function ClientsAmountChart() {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:gap-8 gap-1">
      <div className="relative w-[375px] h-[375px]">
        <PieChart width={375} height={375} className="relative z-20">
          <Pie
            data={chartData}
            dataKey="clients"
            nameKey="region"
            cx="50%"
            cy="50%"
            innerRadius={90}
            outerRadius={140}
            paddingAngle={1}
            stroke="none"
          >
            {chartData.map((entry) => (
              <Cell key={entry.region} fill={entry.color}/>
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip/>}/>
        </PieChart>

        <div
          className="absolute top-1/2 left-1/2 flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 z-10">
          <p className="text-md font-semibold">Итого</p>
          <p className="text-sm text-gray-500">
            {totalClients.toLocaleString()} +
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {chartData.map(({region, color}) => (
          <div key={region} className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full" style={{backgroundColor: color}}/>
            <span className="text-sm">{region}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
