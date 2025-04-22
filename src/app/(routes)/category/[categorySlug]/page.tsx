"use client";

import useGetCategoryProds from "@/api/useGetCategoryProds";
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation";
import FiltersControlCategory from "../components/filtersControlCategory";
import { SkeletonSchema } from "@/components/organisms/skeletonSchema";
import ProductCard from "../components/productCard";
import { productType } from "@/types/product";
import { useState } from "react";

export default function Page() {
  const { categorySlug } = useParams();
  const { result, loading }: ResponseType = useGetCategoryProds(categorySlug);

  const [filterOrigin, setFilterOrigin] = useState("");

  const filteredProds =
    result !== null &&
    !loading &&
    (filterOrigin === ""
      ? result
      : result.filter(
          (product: productType) => product.origin === filterOrigin
        ));

  return (
    <div className="max-w-6xl min-w-full py-4 mx-auto sm:py-16 px-6 sm:px-24">
      {result !== null && !loading && (
        <h1 className="text-3xl font-medium">
          Café {result[0].category.categoryName}
        </h1>
      )}
      <Separator />

      <div className="sm:flex sm:justify-between">
        <FiltersControlCategory setFilterOrigin={setFilterOrigin} />

        <div className="lg:flex-1 grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {loading && <SkeletonSchema grid={3} />}

          {!result !== null &&
            !loading &&
            filteredProds.map((product: productType) => (
              <ProductCard key={product.id} product={product} />
            ))}
          {!filteredProds !== null && !loading && filteredProds.length < 1 && (
            <p>No hay productos de este origen.</p>
          )}
        </div>
      </div>
    </div>
  );
}
