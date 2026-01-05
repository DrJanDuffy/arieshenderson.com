import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";
import AdvancedSearch from "@/components/RealScout/AdvancedSearch";

export const metadata: Metadata = {
  title: "Henderson, NV New Construction Homes | Neighborhood Guide",
  description:
    "Explore new construction homes in Henderson, Nevada. Family-friendly community with excellent schools, parks, and amenities. Price range $400K - $900K.",
};

export default function HendersonNeighborhoodPage() {
  return (
    <>
      <Breadcrumb
        pageName="Henderson Neighborhood"
        description="Family-friendly area with excellent schools and community amenities."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
              New Construction Homes in Henderson, NV
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-body-color dark:text-body-color-dark">
              Henderson is one of Nevada's fastest-growing cities, offering
              family-friendly neighborhoods, top-rated schools, and a wide range
              of new construction home options.
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                Top-Rated Schools
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Henderson is home to some of Nevada's highest-rated public and
                private schools, making it ideal for families.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                Prime Location
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Just 16 miles from the Las Vegas Strip, Henderson offers easy
                access to entertainment while maintaining a suburban feel.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                New Construction
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Active new construction communities with modern floor plans,
                energy-efficient features, and builder warranties.
              </p>
            </div>
          </div>

          {/* About Henderson */}
          <div className="mb-16">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                Why Choose Henderson for Your New Home?
              </h2>
              <div className="space-y-4 text-body-color dark:text-body-color-dark">
                <p>
                  Henderson, Nevada's second-largest city, has consistently
                  ranked as one of the safest cities in America. With a
                  population of over 300,000, Henderson offers a perfect blend
                  of suburban tranquility and urban convenience.
                </p>
                <p>
                  The city is experiencing significant growth in new
                  construction, with master-planned communities offering
                  amenities like community pools, parks, walking trails, and
                  recreational facilities. Many new construction homes in
                  Henderson feature modern designs, energy-efficient systems,
                  and smart home technology.
                </p>
                <p>
                  Henderson's strong economy, low crime rate, and excellent
                  quality of life make it an attractive destination for families,
                  professionals, and retirees alike. The city's proximity to Las
                  Vegas provides access to world-class entertainment, dining, and
                  employment opportunities while maintaining a family-friendly
                  atmosphere.
                </p>
              </div>
            </div>
          </div>

          {/* Price Range & Market Info */}
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Price Range
              </h3>
              <p className="mb-2 text-3xl font-bold text-primary">
                $400K - $900K
              </p>
              <p className="text-body-color dark:text-body-color-dark">
                New construction homes in Henderson typically range from $400,000
                to $900,000, depending on size, location, and builder. Many
                communities offer homes starting in the mid-$400s with luxury
                options available in the $800K+ range.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Popular Areas
              </h3>
              <ul className="space-y-2 text-body-color dark:text-body-color-dark">
                <li className="flex items-center">
                  <span className="mr-2 text-primary">•</span>
                  <span>Green Valley</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">•</span>
                  <span>Anthem</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">•</span>
                  <span>MacDonald Ranch</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">•</span>
                  <span>Seven Hills</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">•</span>
                  <span>Inspirada</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Property Search */}
          <div className="mb-16">
            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                Search New Construction Homes in Henderson
              </h2>
              <p className="mb-6 text-body-color dark:text-body-color-dark">
                Use our advanced search to find new construction homes in
                Henderson that match your criteria. Filter by price, size,
                features, and more.
              </p>
              <div className="flex justify-center">
                <div className="w-full max-w-4xl">
                  <AdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-8 text-center dark:bg-primary/10">
            <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
              Ready to Explore Henderson New Construction?
            </h2>
            <p className="mb-6 text-body-color dark:text-body-color-dark">
              Get exclusive buyer representation and expert guidance throughout
              your new construction home purchase in Henderson. Our team knows
              the builders, communities, and market trends.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/search"
                className="inline-block rounded-xs border border-primary bg-white px-8 py-4 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-primary/5 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                View All Listings
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
