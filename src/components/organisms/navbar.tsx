"use client";
import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "../templates/menuList";
import ItemsMenuMvl from "../molecules/itemsMenuMvl";
import { ModeToggle } from "../molecules/modeToggle";
import Logo from "../atoms/logo";
import useCart from "@/hooks/useCart";
import useFavorites from "@/hooks/useFavorites";

export const Navbar = () => {
  const router = useRouter();
  const cart = useCart();
  const { items } = useFavorites();

  const navItems = [
    { name: <User strokeWidth="1.7" />, path: "/" },
    {
      name: (
        <Heart
          strokeWidth="1.7"
          className={`${items.length > 0 && "fill-black dark:fill-white"}`}
        />
      ),
      path: "/favorites",
    },
    {
      name:
        cart.items.length > 0 ? (
          <div className="flex gap-2 items-center">
            <BaggageClaim strokeWidth="1.7" />
            <span className="transition-all duration-400 ease-in-out px-[5px] bg-black text-white rounded-full group-hover:bg-primary dark:bg-white dark:text-black dark:group-hover:bg-primary">
              {cart.items.length}
            </span>
          </div>
        ) : (
          <ShoppingCart strokeWidth="1.7" />
        ),
      path: "/cart",
    },
  ];

  return (
    <div className="flex justify-between items-center p-4 mx-auto cursor-pointer w-full sm:max-w-4xl md:max-x-6xl ">
      <div className="text-2xl" onClick={() => router.push("/")}>
        <Logo />
      </div>
      <div className="flex sm:hidden">
        <ItemsMenuMvl />
      </div>
      <div className="hidden sm:flex">
        <MenuList />
      </div>
      <div className="justify-between items-center gap-4 flex">
        {navItems.map((item, index) => (
          <a
            key={index}
            className="transition-all duration-400 ease-in-out hover:text-primary cursor-pointer group"
            onClick={() => router.push(item.path)}
          >
            {item.name}
          </a>
        ))}
        <ModeToggle />
      </div>
    </div>
  );
};
