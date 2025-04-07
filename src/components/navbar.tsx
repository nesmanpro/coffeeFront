'use client'
import { Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menuList";
import ItemsMenuMvl from "./itemsMenuMvl";
import { ModeToggle } from "./modeToggle";

const navItems = [
  {name: (<User strokeWidth='1.7' />), path: '/user'},
  {name: (<Heart strokeWidth='1.7' />), path: '/favorites'},
  {name: (<ShoppingCart strokeWidth='1.7' />), path: '/cart'},
]

export const Navbar = () => {

  const router = useRouter();

  return (
    <div className="flex justify-between items-center p-4 mx-auto cursor-pointer w-full sm:max-w-4xl md:max-x-6xl ">
        <h1 className="text-2xl"
        onClick={()=> router.push('/')}>Bambam
          <span className="font-bold">Dev</span>
        </h1>
        <div className="flex sm:hidden">
          <ItemsMenuMvl />
        </div>
        <div className="hidden sm:flex">
          <MenuList />
        </div>
        <div className="justify-between items-center gap-4 flex">
          {
          navItems.map((item, index) => (
            <a
              key={index}
              className="transition-all duration-400 ease-in-out hover:text-orange-500 cursor-pointer"
              onClick={() => router.push(item.path)}
            >
              {item.name}
            </a>
          ))}
          <ModeToggle />

        </div>
        
    </div>
  )
}
