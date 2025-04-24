"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import SuccessImage from "@/components/atoms/successImage";
import { useEffect } from "react";
import confetti from "canvas-confetti";

const Page = () => {
  useEffect(() => {
    confetti();
  }, []);

  const router = useRouter();
  return (
    <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="flex justify-center items-center w-fit sm:min-w-[400px]">
          <SuccessImage />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-semibold sm:text-3xl">
            ¡Gracias por tu compra!
          </h1>
          <p className="my-3">
            En breve nuestro equipo se pondra manos a la obra para preparar tu
            envío lo más rapido posible!
          </p>
          <p className="my-3">
            Gracias por confiar en nosotros para elegir tu cafe favorito.
          </p>
          <p className="my-3">Disfruta del cafe!</p>
          <Button className="cursor-pointer" onClick={() => router.push("/")}>
            Volver a la tienda
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
