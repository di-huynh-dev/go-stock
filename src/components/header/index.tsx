"use client";
import { Zap } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../theme-toggle";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#221C38] dark:bg-[#221C38] fixed w-full">
      <main className="align-element flex md:grid md:grid-cols-3 py-10 text-white justify-between items-center mx-10 md:mx:0">
        <div className="flex gap-2 items-center lg:justify-start justify-center">
          <div className="p-2 bg-white rounded-full">
            <Zap className="text-[#221C38]" />
          </div>

          <span className="font-bold text-lg">GoStock</span>
        </div>
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem className="bg-[#221C38]">
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-[#221C38]">
                Service
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid p-4 md:w-[400px] lg:w-[300px]">
                  <ListItem href="/docs" title="Detect waves">
                    Overview detect waves methods
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Wave industry overview"
                  >
                    Industry overview
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Wave industry details"
                  >
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
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  )}
                >
                  About us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="gap-10 justify-center items-center hidden md:flex">
          <button>
            <Link href="/auth/login">Login</Link>
          </button>
          <Button asChild className="bg-[#3A3255] rounded-full dark:text-white">
            <Link href="/auth/signup">Sign up</Link>
          </Button>
          <ModeToggle />
        </div>
        <Menu className="md:hidden block" />
      </main>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
export default Header;
