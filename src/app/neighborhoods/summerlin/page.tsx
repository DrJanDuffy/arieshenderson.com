import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";
import AdvancedSearch from "@/components/RealScout/AdvancedSearch";

export const metadata: Metadata = {
  title: "Summerlin, NV New Construction Homes | Master-Planned Community",
  description:
    "Explore new construction homes in Summerlin, Las Vegas. Master-planned community with top-rated schools, parks, and shopping. Price range $500K - $1.5M.",
  alternates: {
    canonical: "https://www.arieshenderson.com/neighborhoods/summerlin",
  },
};

export default function SummerlinNeighborhoodPage() {
  return (
    <>
      <Breadcrumb
        pageName="Summerlin Neighborhood"
        description="Master-planned community with top-rated schools, parks, and shopping."
        path="neighborhoods/summerlin"
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
              New Construction Homes in Summerlin, NV
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-body-color dark:text-body-color-dark">
              Summerlin is Las Vegas's premier master-planned community, offering
              luxury new construction homes, world-class amenities, and an
              exceptional quality of life in the foothills of the Red Rock Canyon.
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                Master-Planned Excellence
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                One of America's most successful master-planned communities with
                over 30 years of thoughtful development and world-class amenities.
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                Top-Rated Schools
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Home to some of Nevada's highest-performing public and private
                schools, with many earning national recognition for academic
                excellence.
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
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                Luxury Amenities
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Championship golf courses, community parks, hiking trails, shopping
                centers, and recreational facilities throughout the community.
              </p>
            </div>
          </div>

          {/* About Summerlin */}
          <div className="mb-16">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                Why Choose Summerlin for Your New Home?
              </h2>
              <div className="space-y-4 text-body-color dark:text-body-color-dark">
                <p>
                  Summerlin is one of the nation's most successful master-planned
                  communities, spanning over 22,500 acres in the western Las Vegas
                  Valley. Developed by The Howard Hughes Corporation, Summerlin has
                  been consistently ranked among the best places to live in
                  America.
                </p>
                <p>
                  The community features over 150 parks, more than 150 miles of
                  trails, championship golf courses, and world-class shopping and
                  dining. Summerlin is home to the Las Vegas Ballpark, the
                  headquarters of the Las Vegas Aces WNBA team, and numerous
                  cultural and recreational facilities.
                </p>
                <p>
                  New construction in Summerlin offers luxury homes with modern
                  designs, high-end finishes, and energy-efficient features. Many
                  communities feature gated entrances, resort-style pools, fitness
                  centers, and community gathering spaces. The area's proximity to
                  Red Rock Canyon National Conservation Area provides stunning
                  mountain views and easy access to outdoor recreation.
                </p>
                <p>
                  Summerlin's strong property values, excellent schools, and
                  comprehensive amenities make it an ideal choice for families,
                  professionals, and those seeking an active, upscale lifestyle in
                  Las Vegas.
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
                $500K - $1.5M
              </p>
              <p className="text-body-color dark:text-body-color-dark">
                New construction homes in Summerlin typically range from $500,000
                to $1.5 million, with luxury estates available in the $2M+ range.
                Many communities offer homes starting in the mid-$500s with
                premium options featuring custom finishes and upgraded features.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Popular Areas
              </h3>
              <ul className="space-y-2 text-body-color dark:text-body-color-dark">
                <li className="flex items-center">
                  <span className="mr-2 text-primary">•</span>
                  <span>Summerlin North</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">•</span>
                  <span>Summerlin South</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">•</span>
                  <span>The Ridges</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">•</span>
                  <span>Red Rock Country Club</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">•</span>
                  <span>Sunset</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">•</span>
                  <span>Trail Ridge</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Amenities Section */}
          <div className="mb-16">
            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                Community Amenities
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
                    Recreation & Parks
                  </h3>
                  <ul className="space-y-2 text-body-color dark:text-body-color-dark">
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      <span>150+ parks and playgrounds</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      <span>150+ miles of trails</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      <span>Championship golf courses</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      <span>Community pools and fitness centers</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
                    Shopping & Dining
                  </h3>
                  <ul className="space-y-2 text-body-color dark:text-body-color-dark">
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      <span>Downtown Summerlin shopping district</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      <span>World-class restaurants</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      <span>Entertainment venues</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-primary">•</span>
                      <span>Las Vegas Ballpark</span>
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
                Search New Construction Homes in Summerlin
              </h2>
              <p className="mb-6 text-body-color dark:text-body-color-dark">
                Use our advanced search to find new construction homes in Summerlin
                that match your criteria. Filter by price, size, features, and
                more.
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
              Ready to Explore Summerlin New Construction?
            </h2>
            <p className="mb-6 text-body-color dark:text-body-color-dark">
              Get exclusive buyer representation and expert guidance throughout
              your new construction home purchase in Summerlin. Our team knows
              the builders, communities, and market trends in this premier
              master-planned community.
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
