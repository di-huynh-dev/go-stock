import React from 'react'
import { LineChartCard } from './LineChartCard'
import { chartData } from '@/src/data/chart.data'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/src/components/ui/carousel'

const PortfolioCard = () => {
  const chunkSize = 4
  const chunks = []

  // Split chartData into chunks of 3
  for (let i = 0; i < chartData.length; i += chunkSize) {
    chunks.push(chartData.slice(i, i + chunkSize))
  }

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {chunks.map((chunk, index) => (
          <CarouselItem key={index}>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
              {chunk.map((chart, subIndex) => (
                <LineChartCard
                  key={subIndex}
                  charts={chart.charts}
                  totalShares={chart.totalShares}
                  totalReturns={chart.totalReturns}
                  stockInfo={chart.stockInfo}
                />
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default PortfolioCard
