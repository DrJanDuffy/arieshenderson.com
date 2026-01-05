import Link from "next/link";

type Community = {
  name: string;
  builder: string;
  priceRange: string;
  sqftRange: string;
  lotSizes: string;
  amenities: string[];
  ageRestricted: boolean;
};

type BuilderCommunitiesProps = {
  communities: Community[];
  neighborhoodName: string;
};

export default function BuilderCommunities({
  communities,
  neighborhoodName,
}: BuilderCommunitiesProps) {
  const currentDate = new Date();
  const monthYear = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Active Builder Communities in {neighborhoodName}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-body-color dark:text-body-color-dark">
            Explore current new construction communities with available homes and
            upcoming phases.
          </p>
          <p className="mt-4 text-sm text-body-color/70 dark:text-body-color-dark/70">
            Communities updated {monthYear}. Contact us for current availability.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {communities.map((community, index) => (
            <div
              key={index}
              className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-xl font-bold text-black dark:text-white">
                  {community.name}
                </h3>
                {community.ageRestricted && (
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    55+
                  </span>
                )}
              </div>

              <div className="mb-4 space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="font-semibold text-body-color dark:text-body-color-dark">
                    Builder:
                  </span>
                  <span className="ml-2 text-black dark:text-white">
                    {community.builder}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-body-color dark:text-body-color-dark">
                    Price:
                  </span>
                  <span className="ml-2 text-black dark:text-white">
                    {community.priceRange}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-body-color dark:text-body-color-dark">
                    Size:
                  </span>
                  <span className="ml-2 text-black dark:text-white">
                    {community.sqftRange} sq ft
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-body-color dark:text-body-color-dark">
                    Lot:
                  </span>
                  <span className="ml-2 text-black dark:text-white">
                    {community.lotSizes}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <p className="mb-2 text-sm font-semibold text-body-color dark:text-body-color-dark">
                  Amenities:
                </p>
                <div className="flex flex-wrap gap-2">
                  {community.amenities.map((amenity, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs text-body-color dark:bg-gray-700 dark:text-body-color-dark"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="block w-full rounded-xs bg-primary px-4 py-2 text-center text-sm font-semibold text-white duration-300 ease-in-out hover:bg-primary/90"
              >
                Get Community Info
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
