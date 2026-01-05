import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";
import AdvancedSearch from "@/components/RealScout/AdvancedSearch";

export const metadata: Metadata = {
  title: "North Las Vegas, NV New Construction Homes | Affordable Housing",
  description:
    "Explore new construction homes in North Las Vegas, Nevada. Growing area with affordable housing options and new construction communities. Price range $350K - $700K.",
  alternates: {
    canonical: "https://www.arieshenderson.com/neighborhoods/north-las-vegas",
  },
};

export default function NorthLasVegasNeighborhoodPage() {
  return (
    <>
      <Breadcrumb
        pageName="North Las Vegas Neighborhood"
        description="Growing area with new construction and affordable housing options."
        path="neighborhoods/north-las-vegas"
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
              New Construction Homes in North Las Vegas, NV
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-body-color dark:text-body-color-dark">
              North Las Vegas is one of the fastest-growing areas in the Las Vegas
              Valley, offering affordable new construction homes, modern
              communities, and excellent value for homebuyers.
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                Affordable Options
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                North Las Vegas offers some of the most affordable new construction
                homes in the Las Vegas Valley, making homeownership accessible to
                more buyers.
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
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                Rapid Growth
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                One of the fastest-growing cities in Nevada with new communities
                and developments constantly being added, offering fresh inventory
                and modern amenities.
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
                energy-efficient features, and builder warranties at competitive
                prices.
              </p>
            </div>
          </div>

          {/* About North Las Vegas */}
          <div className="mb-16">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                Why Choose North Las Vegas for Your New Home?
              </h2>
              <div className="space-y-4 text-body-color dark:text-body-color-dark">
                <p>
                  North Las Vegas is one of Nevada's fastest-growing cities,
                  experiencing significant expansion in recent years. With a
                  population of over 250,000, the city offers a diverse community
                  and a strong sense of growth and opportunity.
                </p>
                <p>
                  The area is home to numerous new construction communities
                  featuring modern designs, energy-efficient systems, and
                  contemporary amenities. Many developments include community
                  pools, parks, playgrounds, and recreational facilities. New
                  construction in North Las Vegas often provides more square footage
                  and modern features for the price compared to other areas in the
                  Las Vegas Valley.
                </p>
                <p>
                  North Las Vegas offers convenient access to major employment
                  centers, including Nellis Air Force Base, the Las Vegas Motor
                  Speedway, and various industrial and commercial developments. The
                  city's strategic location provides easy access to downtown Las
                  Vegas, the Strip, and other major destinations while maintaining
                  a more suburban, family-friendly atmosphere.
                </p>
                <p>
                  With ongoing infrastructure improvements, new schools, and
                  expanding commercial development, North Las Vegas represents an
                  excellent value for homebuyers seeking new construction homes at
                  competitive prices. The area's growth trajectory and affordable
                  housing options make it an attractive choice for first-time
                  homebuyers, growing families, and investors.
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
                $350K - $700K
              </p>
              <p className="text-body-color dark:text-body-color-dark">
                New construction homes in North Las Vegas typically range from
                $350,000 to $700,000, offering excellent value for buyers. Many
                communities offer homes starting in the mid-$300s with larger
                homes and upgraded features available in the $600K+ range.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Popular Areas
              </h3>
              <ul className="space-y-2 text-body-color dark:text-body-color-dark">
                <li className="flex items-center">
                  <span className="mr-2 text-primary">•</span>
                  <span>Aliante</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">•</span>
                  <span>Skye Canyon</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">•</span>
                  <span>Craig Ranch</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">•</span>
                  <span>Eldorado</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">•</span>
                  <span>Centennial Hills Area</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">•</span>
                  <span>North Valley</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Advantages Section */}
          <div className="mb-16">
            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                Advantages of Buying in North Las Vegas
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
                    Value & Affordability
                  </h3>
                  <ul className="space-y-2 text-body-color dark:text-body-color-dark">
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      <span>More square footage for your budget</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      <span>Lower property taxes</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      <span>Competitive pricing on new construction</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      <span>Great for first-time homebuyers</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
                    Growth & Development
                  </h3>
                  <ul className="space-y-2 text-body-color dark:text-body-color-dark">
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      <span>New schools and infrastructure</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      <span>Expanding commercial development</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      <span>Job growth opportunities</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      <span>Strong potential for appreciation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Property Search */}
          <div className="mb-16">
            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                Search New Construction Homes in North Las Vegas
              </h2>
              <p className="mb-6 text-body-color dark:text-body-color-dark">
                Use our advanced search to find new construction homes in North
                Las Vegas that match your criteria. Filter by price, size,
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
              Ready to Explore North Las Vegas New Construction?
            </h2>
            <p className="mb-6 text-body-color dark:text-body-color-dark">
              Get exclusive buyer representation and expert guidance throughout
              your new construction home purchase in North Las Vegas. Our team
              knows the builders, communities, and market trends in this
              fast-growing area.
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
