import { TrendingUp } from 'lucide-react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/src/components/ui/card'
import { ChartConfig, ChartContainer } from '@/src/components/ui/chart'
import { IChartDetail, IStockInfo } from '@/src/types'
import { SocialIcon } from 'react-social-icons'

const chartConfig = {
  desktop: {
    label: 'Stock Price',
    color: 'hsl(160.3125, 100%, 87.45098039215686%)',
  },
} satisfies ChartConfig

interface LineChartDetailProps {
  charts: IChartDetail[]
  stockInfo: IStockInfo
}

const LineChartDetail: React.FC<LineChartDetailProps> = ({ charts, stockInfo }) => {
  return (
    <div>
      <span>Chart Detail</span>
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <SocialIcon url={stockInfo.stock_logo_url} />
                <p className="font-bold">{stockInfo.short_name}</p>
              </div>
              <div className="text-sm md:text-base">
                <p className="text-green-500 ">Buy ${stockInfo.trade_activities.sell}</p>
                <p className="text-red-500">Sell ${stockInfo.trade_activities.buy}</p>
              </div>
            </div>
          </CardTitle>
          <CardDescription>
            <div className="flex justify-between">
              <p>January - June 2024</p>
              <p>Last updated 10:00</p>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={charts}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(120, 100%, 51.5%)" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="hsl(120, 100%, 51.5%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis />
                <CartesianGrid vertical={false} />
                <Area
                  type="monotone"
                  dataKey="desktop"
                  stroke="hsl(120, 100%, 51.5%)"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            <p>Showing total visitors for the last 12 months</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default LineChartDetail
