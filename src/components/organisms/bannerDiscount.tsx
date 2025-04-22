import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function BannerDiscount() {
  return (
    <div className="p-5 sm:p-20 text-center">
      <h2 className="uppercase font-black text-primary">
        Consigue hasta un -25%
      </h2>
      <h3 className="mt-3 font-semibold">
        -20% al gastar 70€ o -25% al gastar 100€. Usa el codigo promocional.
      </h3>
      <div className="max-w-md mx-auto flex justify-center gap-6 mt-5">
        <Link href="#" className={buttonVariants()}>
          Comprar
        </Link>
        <Link
          href="#"
          className={buttonVariants({ variant: "outline", border: true })}
        >
          Más info
        </Link>
      </div>
    </div>
  );
}
