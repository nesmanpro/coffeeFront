"use client";
import { Separator } from "@/components/ui/separator";
import useFavorites from "@/hooks/useFavorites";
import React from "react";
import LovedProductCard from "./components/productCard";
import { productType } from "@/types/product";

const Page = () => {
  const { items } = useFavorites();

  return (
    <div className="max-w-4xl py-4 mx-auto sm:py-16 sm:px-24">
      <h1 className="sm:text-2xl font-medium">Favorites</h1>

      <Separator />

      <div className="grid sm:grid-cols-3">
        {items.length === 0 && <p>Aun no hay productos en favoritos.</p>}
        {items.length !== 0 &&
          items.map((product: productType) => (
            <LovedProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Page;
