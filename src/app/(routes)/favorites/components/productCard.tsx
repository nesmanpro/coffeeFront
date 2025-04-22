/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import { productType } from "@/types/product";
import formatPrice from "@/lib/formatPrice";
import { Expand, Heart, ShoppingCart } from "lucide-react";
import { IconButton } from "@/components/atoms/iconButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useCart from "@/hooks/useCart";
import formatURL from "@/lib/formatURL";
import useFavorites from "@/hooks/useFavorites";
import CustomBadge from "@/components/atoms/Badge";

type ProductCardProps = {
  product: productType;
};

const LovedProductCard = (props: ProductCardProps) => {
  const router = useRouter();

  const { product } = props;
  const { origin, image, slug, taste, price, productName, id } = product;

  const { addItem } = useCart();
  const { removeFavorite } = useFavorites();

  return (
    <div className="relative max-w-70 p-2 transition-all duration-100 rounded-lg hover:shadow-md group">
      <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
        <CustomBadge
          text={taste}
          className={"text-white bg-black dark:text-black dark:bg-white"}
        />
        <CustomBadge text={origin} className={"text-white bg-yellow-900"} />
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
            <CarouselItem
              className="cursor-grab active:cursor-grabbing"
              key={img.id}
            >
              <img src={formatURL(img.url)} alt={productName} />
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
                  <IconButton
                    onClick={() => removeFavorite(id)}
                    icon={<Heart size={20} className="fill-black" />}
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

export default LovedProductCard;
