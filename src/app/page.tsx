import BannerDiscount from "@/components/organisms/bannerDiscount";
import BannerProducts from "@/components/organisms/bannerProduicts";
import CarrouselText from "@/components/molecules/carrouselText";
import { ChooseCategory } from "@/components/organisms/chooseCategory";
import { FeaturedProds } from "@/components/organisms/featuredProds";

export default function Home() {
  return (
    <main className="">
      <CarrouselText />
      <FeaturedProds />
      <BannerDiscount />
      <ChooseCategory />
      <BannerProducts />
    </main>
  );
}
