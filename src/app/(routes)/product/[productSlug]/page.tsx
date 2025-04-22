"use client";

import useGetProductBySlug from "@/api/useGetProductBySlug";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation";
import { SkeletonProduct } from "./components/SkeletonProduct";
import CarouselProduct from "./components/CarouselProduct";
import InfoProduct from "./components/InfoProduct";
import isFavorite from "@/lib/isFavorite";

export default function page() {
  const { productSlug } = useParams();

  const { result }: ResponseType = useGetProductBySlug(productSlug);

  if (result === null) {
    return <SkeletonProduct />;
  }

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24">
      <div className="grid sm:grid-cols-2 gap-y-5">
        <div>
          <CarouselProduct image={result[0].image} />
        </div>
        <div className="px-12 ">
          <InfoProduct product={result[0]} />
        </div>
      </div>
    </div>
  );
}
