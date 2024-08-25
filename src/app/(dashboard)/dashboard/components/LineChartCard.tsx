import { TrendingDownIcon, TrendingUpIcon } from 'lucide-react'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'
import { Card, CardContent } from '@/src/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/src/components/ui/chart'
import { SocialIcon } from 'react-social-icons'
import { IChart } from '@/src/types'
import { cn } from '@/src/lib/utils'

export const LineChartCard: React.FC<IChart> = ({ charts, totalShares, totalReturns, stockInfo }) => {
  const chartConfig = {
    desktop: {
      label: 'Stock Price',
      color: totalReturns > 0 ? 'hsl(var(--chart-1))' : 'hsl(var(--chart-2))',
    },
  }

  return (
    <Card>
      <CardContent>
        <div className="grid grid-cols-2">
          <div className="flex gap-1 items-center">
            <SocialIcon url={stockInfo.stock_logo_url} />
            <p className="font-bold">{stockInfo.short_name}</p>
          </div>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={charts}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Line dataKey="desktop" type="linear" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
            </LineChart>
          </ChartContainer>
        </div>
        <div>
          <div className="flex gap-2 items-center justify-between">
            <span className="text-gray-500 text-sm">Total Shares</span>
            <span className="font-bold">${totalShares}</span>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <span className="text-gray-500 text-sm">Total Returns</span>
            <div
              className={cn('text-gray-500 font-bold flex gap-2', totalReturns > 0 ? 'text-green-500' : 'text-red-500')}
            >
              {totalReturns}%{totalReturns > 0 ? <TrendingUpIcon /> : <TrendingDownIcon />}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
