import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useCart from "@/hooks/useCart";
import useFavorites from "@/hooks/useFavorites";
import formatPrice from "@/lib/formatPrice";
import isFavorite from "@/lib/isFavorite";
import { productType } from "@/types/product";
import { Heart } from "lucide-react";

export type InfoProductProps = {
  product: productType;
};

const InfoProduct = (props: InfoProductProps) => {
  const { product } = props;
  const { productName, description, price, taste, origin, id } = product;
  const { addItem } = useCart();
  const { addFavorite, removeFavorite, items } = useFavorites();

  const isFav = items.some((item) => item.id === id);

  const handleFav = () => {
    isFav ? removeFavorite(id) : addFavorite(product);
  };

  return (
    <div className="px-6">
      <div className="justify-between mb-3 sm:flex gap-5">
        <h1 className="text-2xl">{productName}</h1>
        <div className="flex items-center justify-between gap-3">
          <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:text-black dark:bg-white w-fit">
            {taste}
          </p>
          <p className="px-2 py-1 text-xs text-white bg-yellow-800 rounded-full w-fit">
            {origin}
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <p>{description}</p>
      <Separator className="my-4" />
      <p className="my-4 text-1xl">{formatPrice(price)}</p>
      <div className="flex items-center gap-5">
        <Button
          className="w-fit cursor-pointer"
          onClick={() => addItem(product)}
        >
          Comprar
        </Button>
        <Heart
          width={30}
          strokeWidth={1.5}
          className={`transition duration-300 cursor-pointer hover:fill-black ${
            isFav && "fill-black"
          }`}
          onClick={handleFav}
        />
      </div>
    </div>
  );
};

export default InfoProduct;
