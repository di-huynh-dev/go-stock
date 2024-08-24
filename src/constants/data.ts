import { NavItem } from '../types'

export const navItems: NavItem[] = [
  {
    title: 'Home',
    href: '/dashboard/home',
    icon: 'home',
    label: 'Home',
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard',
  },
  {
    title: 'Wallet',
    href: '/dashboard/wallet',
    icon: 'wallet',
    label: 'Wallet',
  },
  {
    title: 'News',
    href: '/dashboard/news',
    icon: 'news',
    label: 'News',
  },
  {
    title: 'Stocks and Funds',
    href: '/dashboard/stocks',
    icon: 'stocks',
    label: 'Stocks and Funds',
    subItems: [
      {
        title: 'Cryptocurrency',
        href: '/dashboard/stocks/cryptocurrency',
        label: 'Cryptocurrency',
      },
      {
        title: 'Mutual Fund',
        href: '/dashboard/stocks/mutual-fund',
        label: 'Mutual Fund',
      },
      {
        title: 'Gold',
        href: '/dashboard/stocks/gold',
        label: 'Gold',
      },
    ],
  },
  {
    title: 'Our Community',
    href: '/dashboard/community',
    icon: 'user',
    label: 'user',
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: 'settings',
    label: 'Settings',
  },
  {
    title: 'Contact us',
    href: '/dashboard/contact',
    icon: 'contact',
    label: 'Contact us',
  },
]
