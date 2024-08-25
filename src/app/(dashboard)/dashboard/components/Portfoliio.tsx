import React from 'react'
import PortfoliioCard from './PortfoliioCard'
import BreadscumbComponent from '@/src/components/breadcrumb'

const Portfoliio = () => {
  return (
    <div>
      <BreadscumbComponent currentPage="Dashboard" />
      <span>My Portfolio</span>
      <PortfoliioCard />
    </div>
  )
}

export default Portfoliio
