"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const dataCarrousel = [
  {
    id: 1,
    text: "Cualquier duda 👉🏼 WhatsApp o mail a soporte@bambam.coffee",
    link: "/",
  },
  {
    id: 2,
    text: "🏎️ ENVÍO GRATIS en pedidos a partir de 60€ y en Packs 📦",
    link: "/",
  },
  {
    id: 3,
    text: "🔥 Pack SILVERBACK: CAFÉ+CACAO TOP 🙌",
    link: "/",
  },
];

const CarrouselText = () => {
  return (
    <section className="flex justify-center items-center bg-[#F4F1E6] dark:bg-[#322c2c]">
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {dataCarrousel.map(({ id, text, link }) => (
            <CarouselItem
              key={id}
              className="flex justify-center text-center items-center h-16"
            >
              <Link href={link}>{text}</Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default CarrouselText;
