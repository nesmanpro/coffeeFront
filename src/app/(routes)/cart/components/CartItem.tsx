/* eslint-disable @next/next/no-img-element */
import CustomBadge from "@/components/atoms/Badge";
import useCart from "@/hooks/useCart";
import formatPrice from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { productType } from "@/types/product";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface CartItemsProps {
  product: productType;
}
const CartItem = (props: CartItemsProps) => {
  const { product } = props;
  const router = useRouter();
  const { removeItem } = useCart();
  return (
    <li className="flex justify-between w-full py-6 border-b gap-3">
      <div
        onClick={() => router.push(`/product/${product.slug}`)}
        className="cursor-pointer"
      >
        <img
          className="w-14 h-14 overflow-hidden rounded-sm sm:w-auto sm:h-24"
          src={product.image[0].url}
          alt={product.productName}
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 items-start">
        <div className="flex w-full justify-between gap-2">
          <h1 className="text-sm">{product.productName}</h1>
          <p className="font-bold">{formatPrice(product.price)}</p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <CustomBadge
            text={product.taste}
            className={"text-white bg-black dark:text-black dark:bg-white"}
          />
          <CustomBadge
            text={product.origin}
            className={"text-white bg-yellow-900"}
          />
        </div>
      </div>
      <div>
        <button
          className={cn(
            "rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition cursor-pointer"
          )}
          onClick={() => removeItem(product.id)}
        >
          <X size={20} strokeWidth={1.5} />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
