import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { CircleChevronDown } from "lucide-react"
import Link from "next/link"


const categories: { title: string; href: string; }[] = [
    {
      title: "Café en grano",
      href: "/category/grano",
    },
    {
      title: "Café molido",
      href: "/category/molido",
    },
    {
      title: "Café de cápsula",
      href: "/category/capsula"
    },
  ]

const ItemsMenuMvl = ()=> {
  return (
    <Popover>
  <PopoverTrigger><CircleChevronDown strokeWidth='1.7' /></PopoverTrigger>
  <PopoverContent className="flex flex-col gap-1 items-center">
    {
        categories.map((item)=>(
            <Link key={item.href} href={item.href}>{item.title}</Link>
        ))
    }
  </PopoverContent>
</Popover>
  )
}


export default ItemsMenuMvl;