import Link from "next/link";
import { buttonVariants } from "../ui/button";

const BannerProducts = () => {
  return (
    <>
      <div className="mt-4 text-center px-18">
        <p>
          Explora, descubre, saborea y dejate sorprender por los matices que
          cada café de origen ofrece
        </p>
        <h4 className="mt-2 text-4xl uppercase font-extrabold">
          PACKS DEGUSTACIÓN
        </h4>
        <p className="my-2 text-lg">
          Descubre los nuevos packs y explora nuevas fincas
        </p>
        <Link href="#" className={buttonVariants()}>
          Comprar
        </Link>
      </div>
      <div className="h-[350px] lg:h-[750px] bg-[url('/sliderb-img.webp')] bg-cover bg-center mt-5"></div>
    </>
  );
};

export default BannerProducts;
