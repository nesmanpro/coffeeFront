/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselProductPage {
  image: {
    id: number;
    name: string;
    url: string;
  }[];
}

const CarouselProduct = (props: CarouselProductPage) => {
  const { image } = props;

  return (
    <div className="px-12 sm:px-16">
      <Carousel>
        <CarouselContent>
          {image.map((img) => {
            const { id, url } = img;
            return (
              <CarouselItem key={id}>
                <img src={url} alt="product image" className="rounded-lg" />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
