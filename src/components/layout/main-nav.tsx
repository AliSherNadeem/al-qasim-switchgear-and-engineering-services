"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, Home, Menu, Package, Phone, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/site-config";

const navIcons: Record<string, LucideIcon> = {
  Home: Home,
  "About Us": Building2,
  Products: Package,
  "Contact Us": Phone,
};

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

const navLinkClasses = (active: boolean) =>
  cn(
    "inline-flex h-10 items-center gap-2 rounded-lg bg-transparent px-4 text-base font-semibold transition-all duration-200 hover:scale-105",
    "hover:bg-transparent focus:bg-transparent data-open:bg-transparent data-popup-open:bg-transparent",
    "data-open:hover:bg-transparent data-popup-open:hover:bg-transparent data-open:focus:bg-transparent",
    active
      ? "scale-105 font-bold text-primary-foreground"
      : "text-primary-foreground/80 hover:text-primary-foreground data-open:text-primary-foreground data-popup-open:text-primary-foreground"
  );

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-primary shadow-sm">
      <Container className="flex items-center justify-end py-2.5 md:justify-start">
        <NavigationMenu viewport={false} className="hidden max-w-none flex-none justify-start md:flex">
          <NavigationMenuList className="gap-1">
            {navItems.map((item) => {
              const Icon = navIcons[item.label];
              const active = isActive(pathname, item.href);

              return (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    asChild
                    aria-current={active ? "page" : undefined}
                    className={navLinkClasses(active)}
                  >
                    <Link href={item.href}>
                      <Icon className="size-4" aria-hidden="true" />
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-11 text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground md:hidden"
              aria-label="Open menu"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-1 px-4">
              {navItems.map((item) => {
                const Icon = navIcons[item.label];
                const active = isActive(pathname, item.href);

                return (
                  <li key={item.label}>
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex h-11 items-center gap-2.5 rounded-lg px-3 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                          active
                            ? "bg-accent text-accent-foreground"
                            : "text-foreground/80"
                        )}
                      >
                        <Icon className="size-4" aria-hidden="true" />
                        {item.label}
                      </Link>
                    </SheetClose>
                  </li>
                );
              })}
            </ul>
          </SheetContent>
        </Sheet>
      </Container>
    </nav>
  );
}
