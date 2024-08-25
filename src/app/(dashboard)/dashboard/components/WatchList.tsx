import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card'
import { PlusIcon } from 'lucide-react'
import { stocks } from '@/src/data/stock.data'
import { SocialIcon } from 'react-social-icons'

const WatchList = () => {
  return (
    <div>
      <h2>Watch List</h2> {/* Use h2 for section headings */}
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center justify-between">
              <span>Watch List</span> {/* Changed to span for consistency */}
              <PlusIcon />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-7">
            {stocks.map((stockInfo) => (
              <div className="flex justify-between border-b-2 py-2" key={stockInfo.short_name}>
                <div className="flex gap-2 items-center justify-center">
                  <SocialIcon url={stockInfo.stock_logo_url} />
                  <div>
                    <p className="font-bold">{stockInfo.stock_name}</p>
                    <p>{stockInfo.short_name}</p>
                  </div>
                </div>
                <div>
                  <p className="text-green-500">{stockInfo.trade_activities.buy} Buy</p>
                  <p className="text-red-500">{stockInfo.trade_activities.sell} Sell</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default WatchList
