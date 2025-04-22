/* eslint-disable @next/next/no-img-element */
"use client";

import useGetCategory from "@/api/useGetCategory";
import { categoryType } from "@/types/category";
import { ResponseType } from "@/types/response";
import Link from "next/link";

export const ChooseCategory = () => {
  const url = process.env.NEXT_PUBLIC_BACKEND_URL;
  const { result, loading }: ResponseType = useGetCategory();

  return (
    <div className="flex flex-col items-center max-w-6xl py-4 mx-auto sm:py-16 sm:px-24 ">
      <h3 className="px-6 pb-4 text-3xl sm:pb-8">
        Elige tu categoria favorita
      </h3>
      <div className="grid gap-5 sm:grid-cols-3">
        {!loading &&
          result !== undefined &&
          result.map((category: categoryType) => {
            const { id, categoryName, mainImage, slug }: categoryType =
              category;

            return (
              <Link
                key={id}
                href={`/category/${slug}`}
                className="relative max-w-xs mx-auto bg-no-repeat bg-cover rounded-lg"
              >
                <img
                  className="max-h-[220px] transition duration-300 ease-in-out hover:scale-105"
                  src={`${url}${mainImage.url}`}
                  alt={categoryName}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};
