/* eslint-disable @next/next/no-img-element */
"use client";
import useGetFeaturedProds from "@/api/useGetFeaturedProds";
import { useRouter } from "next/navigation";
import { ResponseType } from "@/types/response";
import { SkeletonSchema } from "./skeletonSchema";
import { productType } from "@/types/product";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Expand, ShoppingCart } from "lucide-react";
import { IconButton } from "../atoms/iconButton";
import useCart from "@/hooks/useCart";
import { useState } from "react";

export const FeaturedProds = () => {
  const router = useRouter();
  const [onTouch, setOnTouch] = useState(false);
  const { result, loading }: ResponseType = useGetFeaturedProds();
  const { addItem } = useCart();

  return (
    <div className="flex flex-col items-center max-w-6xl py-4 mx-auto sm:py-16 sm:px-24 ">
      <h3 className="px-6 text-2xl sm:pb-8">Productos destacados</h3>

      {loading && (
        <div className="flex justify-center gap-4">
          <SkeletonSchema grid={3} />
        </div>
      )}

      <Carousel
        className="w-full max-w-sm md:max-w-full"
        opts={{ loop: true, align: "start" }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent className="-ml-2 md:-ml-4 group">
          {result !== null &&
            result.map((prod: productType) => {
              const { id, slug, taste, origin, productName, image } = prod;
              const url = image[0].url;

              return (
                <CarouselItem
                  key={id}
                  onTouchStart={() => setOnTouch(!onTouch)}
                  className="md:basis-1/2 lg:basis-1/3 "
                >
                  <div className="p-1">
                    <Card className="py-4 border border-gray-200 shadow-none">
                      <CardContent className="relative flex items-center aspect-square justify-center px-6 py-2">
                        <img src={url} alt={`Image featured ${slug}`} />
                        <div
                          className={`absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 ${
                            onTouch && "opacity-100"
                          }  bottom-5`}
                        >
                          <div className="flex justify-center gap-x-3">
                            <IconButton
                              onClick={() => router.push(`product/${slug}`)}
                              icon={<Expand size={20} />}
                              className="text-gray-600"
                            />
                            <IconButton
                              onClick={() => addItem(prod)}
                              icon={
                                <ShoppingCart
                                  size={20}
                                  className="text-gray-600"
                                />
                              }
                            />
                          </div>
                        </div>
                      </CardContent>
                      <div className="flex justify-between items-center gap-4 px-8">
                        <h3 className="text-sm font-bold max-w-[100px] whitespace-nowrap overflow-hidden text-ellipsis">
                          {productName}
                        </h3>
                        <div className="flex items-center justify-between gap-3">
                          <p className="py-0.5 px-3 bg-gray-800 text-gray-200 dark:text-gray-800 dark:bg-gray-200 rounded-full">
                            {taste}
                          </p>
                          <p>{origin}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export const prodCards = () => {
  return <div>featuredProds</div>;
};
