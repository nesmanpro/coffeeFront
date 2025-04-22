"use client";

import NotFoundImage from "@/components/atoms/404Card";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <div className="py-6">
        <NotFoundImage />
      </div>
      <p className="text-lg mb-8">No encontramos la pagina que buscas.</p>

      <Link href="/">
        <button className="py-2 px-3 border-1 border-black bg-black text-white cursor-pointer rounded-sm hover:bg-transparent hover:text-black transition ease-in-out duration-300">
          Volver al inicio
        </button>
      </Link>
    </div>
  );
}
