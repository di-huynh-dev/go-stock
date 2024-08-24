'use client'

import { NavItem } from '@/src/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Dispatch, SetStateAction, useState } from 'react'
import { useSidebar } from '@/src/hooks/useSidebar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { cn } from '@/src/lib/utils'
import { Icons } from './Icons'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'
import { Button } from '../ui/button'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'

interface DashboardNavProps {
  items: NavItem[]
  setOpen?: Dispatch<SetStateAction<boolean>>
  isMobileNav?: boolean
}

const DashboardNavItems = ({ items, setOpen, isMobileNav = false }: DashboardNavProps) => {
  const path = usePathname()
  const { isMinimized } = useSidebar()
  const [isOpenCollapsible, setIsOpenCollapsible] = useState(false)

  if (!items?.length) {
    return null
  }
  return (
    <nav className="grid items-start gap-2">
      <TooltipProvider>
        {items.map((item, index) => {
          const Icon = Icons[item.icon || 'arrowRight']

          return (
            <div key={index}>
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Collapsible open={isOpenCollapsible} onOpenChange={setIsOpenCollapsible}>
                    <div className={cn('', item.subItems && 'flex items-center justify-between gap-2')}>
                      <Link
                        href={item.disabled ? '/' : item.href ?? '/'}
                        className={cn(
                          'flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                          path === item.href ? 'bg-accent' : 'transparent',
                          item.disabled && 'cursor-not-allowed opacity-80',
                        )}
                        onClick={() => {
                          if (setOpen) setOpen(false)
                        }}
                      >
                        <Icon className={`ml-3 size-5 flex-none`} />

                        {isMobileNav || (!isMinimized && !isMobileNav) ? (
                          <span className="mr-2 truncate">{item.title}</span>
                        ) : (
                          ''
                        )}
                      </Link>
                      {isMobileNav || (!isMinimized && !isMobileNav && item.subItems) ? (
                        <>
                          <Collapsible open={isOpenCollapsible} onOpenChange={setIsOpenCollapsible}>
                            <div className="flex items-center justify-between gap-2">
                              <CollapsibleTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  {isOpenCollapsible ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                  <span className="sr-only">Toggle</span>
                                </Button>
                              </CollapsibleTrigger>
                            </div>
                          </Collapsible>
                        </>
                      ) : (
                        ''
                      )}
                    </div>
                    <CollapsibleContent className="space-y-2">
                      <div className="ml-6 mt-2">
                        {item.subItems &&
                          !isMinimized &&
                          item.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href ?? '/'}
                              className={cn(
                                'flex items-center gap-2 rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                                path === subItem.href ? 'bg-accent' : 'transparent',
                                subItem.disabled && 'cursor-not-allowed opacity-80',
                              )}
                              onClick={() => {
                                if (setOpen) setOpen(false)
                              }}
                            >
                              <span className="truncate">{subItem.title}</span>
                            </Link>
                          ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </TooltipTrigger>
                <TooltipContent
                  align="center"
                  side="right"
                  sideOffset={8}
                  className={!isMinimized ? 'hidden' : 'inline-block'}
                >
                  {item.subItems ? (
                    <>
                      {item.subItems.map((subItem) => (
                        <p key={subItem.title}>{subItem.title}</p>
                      ))}
                    </>
                  ) : (
                    item.title
                  )}
                </TooltipContent>
              </Tooltip>
            </div>
          )
        })}
      </TooltipProvider>
    </nav>
  )
}

export default DashboardNavItems
