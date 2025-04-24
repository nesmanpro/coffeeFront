/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";

import { productType } from "@/types/product";
import formatPrice from "@/lib/formatPrice";

import { Expand, ShoppingCart } from "lucide-react";
import { IconButton } from "@/components/atoms/iconButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useCart from "@/hooks/useCart";

type ProductCardProps = {
  product: productType;
};

const ProductCard = (props: ProductCardProps) => {
  const router = useRouter();
  const { product } = props;
  const { origin, image, slug, taste, price, productName } = product;

  const { addItem } = useCart();

  return (
    <div className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md group">
      <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
        <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:text-black dark:bg-white w-fit">
          {taste}
        </p>
        <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit">
          {origin}
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className={`w-full max-w-sm group`}
      >
        <CarouselContent>
          {image.map((img) => (
            <CarouselItem key={img.id}>
              <img src={img.url} alt={img.hash} />
              <div className="absolute w-full px-6 transition duration-200 opacity-0 z-30 group-hover:opacity-100 bottom-5">
                <div className="flex justify-center gap-x-6">
                  <IconButton
                    onClick={() => router.push(`/product/${slug}`)}
                    icon={<Expand size={20} />}
                    className="text-gray-600 cursor-pointer"
                  />
                  <IconButton
                    onClick={() => addItem(product)}
                    icon={<ShoppingCart size={20} />}
                    className="text-gray-600 cursor-pointer"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="font-semibold text-sm py-1">{productName}</p>
      <p className="text-xs"> {formatPrice(price)}</p>
    </div>
  );
};

export default ProductCard;
