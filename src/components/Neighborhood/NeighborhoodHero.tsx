import Link from "next/link";

type NeighborhoodHeroProps = {
  h1: string;
  subhead: string;
  priceRange: string;
};

export default function NeighborhoodHero({
  h1,
  subhead,
  priceRange,
}: NeighborhoodHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-primary/5 py-16 dark:from-primary/10 dark:via-gray-dark dark:to-primary/10 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl">
            {h1}
          </h1>
          <p className="mb-4 text-xl text-body-color dark:text-body-color-dark sm:text-2xl">
            {subhead}
          </p>
          <div className="mb-8 inline-block rounded-full bg-primary/10 px-6 py-3 text-lg font-semibold text-primary dark:bg-primary/20">
            Price Range: {priceRange}
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/90"
            >
              Get Exclusive Buyer Representation - Free
            </Link>
            <Link
              href="/search"
              className="rounded-xs border-2 border-primary bg-transparent px-8 py-4 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-primary/10"
            >
              Search New Construction Homes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
