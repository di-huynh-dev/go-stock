'use client'

import { ArrowUpIcon, ChevronLeftIcon, ZapIcon } from 'lucide-react'
import React from 'react'
import { cn } from '@/src/lib/utils'
import { useSidebar } from '@/src/hooks/useSidebar'
import Link from 'next/link'
import DashboardNavItems from './DashboardNavItems'
import { navItems } from '@/src/constants/data'

type SidebarProps = {
  className?: string
}

const Sidebar = ({ className }: SidebarProps) => {
  const { isMinimized, toggle } = useSidebar()

  const handleToggle = () => {
    toggle()
  }

  return (
    <aside
      className={cn(
        `relative  hidden h-screen flex-none border-r bg-card transition-[width] duration-500 md:block`,
        !isMinimized ? 'w-72' : 'w-[72px]',
        className,
      )}
    >
      <div className="hidden py-4 lg:block">
        <Link href="/">
          <div className="flex gap-2 items-center justify-center">
            <div className="p-2 bg-[#221C38] rounded-full">
              <ZapIcon className="text-white" />
            </div>
            <span className={cn('font-bold text-lg', isMinimized && 'hidden')}>GoStock</span>
          </div>
        </Link>
        {!isMinimized && (
          <div className="grid grid-cols-2 gap-2 p-4 mx-3 mt-6 bg-[#221C38] text-white rounded text-sm ">
            <div>
              <p>Total Investment</p>
              <span className="font-bold text-xl">$123.00</span>
            </div>
            <div className="flex gap-2 justify-center items-center text-green-500">
              <p>+18.01%</p>
              <ArrowUpIcon />
            </div>
          </div>
        )}
      </div>

      <ChevronLeftIcon
        className={cn(
          'absolute -right-3 top-10 z-50  cursor-pointer rounded-full border bg-background text-3xl text-foreground',
          isMinimized && 'rotate-180',
        )}
        onClick={handleToggle}
      />

      <div className="px-3 py-2">
        <div className="mt-3 space-y-1">
          <DashboardNavItems items={navItems} />
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
