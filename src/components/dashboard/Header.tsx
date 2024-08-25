import React from 'react'
import { ModeToggle } from '../theme-toggle'
import UserNav from './UserNav'
import { cn } from '@/src/lib/utils'
import FormInput from '../form/FormInput'
import { BellIcon, MailIcon, SearchIcon } from 'lucide-react'
import { Separator } from '../ui/separator'
import { MobileSidebar } from './MobileSidebar'

const Header = () => {
  return (
    <header className="w-full sticky inset-x-0 top-0 z-40 shadow-md ">
      <div className="flex items-center justify-between px-4 py-2">
        <>
          <div className={cn('block md:!hidden')}>
            <MobileSidebar />
          </div>
          <div className="hidden md:block">
            <FormInput
              name=""
              placeholder='Press "Enter" to search stocks'
              type="text"
              icon={<SearchIcon className="w-8 h-8" />}
            />
          </div>
        </>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4">
            <ModeToggle />
            <MailIcon />
            <BellIcon />
          </div>
          <Separator orientation="vertical" />
          <UserNav />
        </div>
      </div>
    </header>
  )
}

export default Header
