'use client'

import React, { useEffect, useState } from 'react'
import Portfoliio from './components/Portfoliio'
import LineChartDetail from './components/LineChartDetail'
import { chartData } from '@/src/data/chart.data'
import WatchList from './components/WatchList'
import Loading from '@/src/components/loading'

const DashboardPage = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    // Render a loading state or placeholder to avoid mismatch
    return <Loading />
  }
  return (
    <div className="lg:mx-10 mx-3">
      <Portfoliio />
      <div className="grid lg:grid-cols-10 gap-2">
        <div className="lg:col-span-7 ">
          <LineChartDetail charts={chartData[0].charts} stockInfo={chartData[0].stockInfo} />
        </div>
        <div className="lg:col-span-3">
          <WatchList />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
