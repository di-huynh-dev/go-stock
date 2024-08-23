import { Zap } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/src/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/src/components/ui/sheet'
import Link from 'next/link'
import { cn } from '@/src/lib/utils'
import React from 'react'
import { Button } from '../ui/button'
import { ModeToggle } from '../theme-toggle'
import { Menu } from 'lucide-react'
import { House, ActivityIcon, SquareChartGanttIcon, InfoIcon } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/src/components/ui/accordion'

const Header = () => {
  return (
    <header className="bg-[#221C38] dark:bg-[#221C38] fixed top-0 w-full z-30">
      <div className="align-element flex lg:grid lg:grid-cols-3 py-10 text-white justify-between items-center">
        <div className="flex gap-2 items-center lg:justify-start justify-center">
          <div className="p-2 bg-white rounded-full">
            <Zap className="text-[#221C38]" />
          </div>
          <span className="font-bold text-lg">GoStock</span>
        </div>
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            <NavigationMenuItem className="bg-[#221C38]">
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-[#221C38]">Service</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid p-4 md:w-[400px] lg:w-[300px]">
                  <ListItem href="/docs" title="Detect waves">
                    Overview detect waves methods
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Wave industry overview">
                    Industry overview
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Wave industry details">
                    Industry details
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    Instruct about installation on mobile
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="bg-[#221C38]">
              <Link href="/product" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                  )}
                >
                  Product
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="bg-[#221C38]">
              <Link href="/about-us" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                  )}
                >
                  About us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="gap-10 justify-end items-center hidden lg:flex">
          <button>
            <Link href="/auth/login">Login</Link>
          </button>
          <Button asChild className="bg-[#3A3255] rounded-full dark:text-white hover:bg-white hover:text-[#3A3255]">
            <Link href="/auth/signup">Sign up</Link>
          </Button>
          <ModeToggle />
        </div>

        <Sheet>
          <div className="flex gap-2 items-center">
            <ModeToggle />
            <SheetTrigger className="flex gap-2 items-center">
              <Menu className="lg:hidden block" />
            </SheetTrigger>
          </div>
          <SheetContent className="md:w-1/3 w-1/2">
            <Link href="/" className="flex gap-2 items-center my-2">
              <House />
              <SheetTitle className="text-md">Home</SheetTitle>
            </Link>
            <Link href="/" className="flex gap-2 items-center my-2">
              <ActivityIcon />
              <SheetTitle className="text-md">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Services</AccordionTrigger>
                    <AccordionContent>
                      <Link href="/" className="flex gap-2 items-center my-2">
                        <SheetTitle>Service 1</SheetTitle>
                      </Link>
                      <Link href="/" className="flex gap-2 items-center my-2">
                        <SheetTitle>Service 2</SheetTitle>
                      </Link>
                      <Link href="/" className="flex gap-2 items-center my-2">
                        <SheetTitle>Service 3</SheetTitle>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </SheetTitle>
            </Link>
            <Link href="/" className="flex gap-2 items-center my-2">
              <SquareChartGanttIcon />
              <SheetTitle className="text-md">Product</SheetTitle>
            </Link>
            <Link href="/" className="flex gap-2 items-center my-2">
              <InfoIcon />
              <SheetTitle className="text-md">About us</SheetTitle>
            </Link>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = 'ListItem'
export default Header
