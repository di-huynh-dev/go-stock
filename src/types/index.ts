import { Icons } from '../components/dashboard/Icons'

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
  description?: string
  subItems?: NavItem[]
}

export type IStockInfo = {
  stock_name: string
  short_name: string
  stock_logo_url: string
  company: string
  market_cap: string
  volume: string
  supply: string
  trade_activities: {
    buy: string
    sell: string
  }
}

export type IChartDetail = { month: string; desktop: number }

export type IChart = {
  stockInfo: IStockInfo
  charts: IChartDetail[]
  totalShares: number
  totalReturns: number
}
