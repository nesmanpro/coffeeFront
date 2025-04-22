"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const categories: { title: string; href: string; description: string }[] = [
  {
    title: "Café en grano",
    href: "/category/grano",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Café molido",
    href: "/category/molido",
    description:
      "La elección perfecta para los amantes de la Italiana o de filtro.",
  },
  {
    title: "Café de cápsula",
    href: "/category/capsula",
    description:
      " Dos orígenes únicos que te harán gozar con tu cafetera superautomática o de cápsulas.",
  },
]

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/products" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Productos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[300px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                  
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Bambam Dev
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Aquí se sirve Café del Bueno. 
                      Café de Especialidad tostado en Málaga.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/subs" title="Suscripciones">
              ¡Echa un ojo a nuestras suscripciones Coffee Masters y Summum!
              </ListItem>
              <ListItem href="/pakcs" title="Kilazo">
              Kilazo está compuesto por 2 paquetes de café en formato kilo. 
              </ListItem>
              <ListItem href="/moka" title="Moka warrirs">
              La elección perfecta para los amantes de la Italiana. 
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categorías</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-1 lg:w-[500px] ">
              {categories.map((category) => (
                <ListItem
                  key={category.title}
                  title={category.title}
                  href={category.href}
                >
                  {category.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
      </NavigationMenuList>
    </NavigationMenu>
  )
}



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
  )
})
ListItem.displayName = "ListItem"
export default MenuList