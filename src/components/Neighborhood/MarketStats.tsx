import StructuredData from "@/components/SEO/StructuredData";

type MarketStatsProps = {
  medianPrice: number;
  pricePerSqft: number;
  daysOnMarket: number;
  activeListings: number;
  yoyChange: string;
  neighborhoodName: string;
  lastUpdated: string;
};

export default function MarketStats({
  medianPrice,
  pricePerSqft,
  daysOnMarket,
  activeListings,
  yoyChange,
  neighborhoodName,
  lastUpdated,
}: MarketStatsProps) {
  const statsSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: `${neighborhoodName} New Construction Market Statistics`,
    description: `Current market statistics for new construction homes in ${neighborhoodName}`,
    datePublished: lastUpdated,
    variableMeasured: [
      {
        "@type": "PropertyValue",
        name: "Median Price",
        value: medianPrice,
      },
      {
        "@type": "PropertyValue",
        name: "Price Per Square Foot",
        value: pricePerSqft,
      },
      {
        "@type": "PropertyValue",
        name: "Days on Market",
        value: daysOnMarket,
      },
      {
        "@type": "PropertyValue",
        name: "Active Listings",
        value: activeListings,
      },
    ],
  };

  return (
    <>
      <StructuredData data={statsSchema} />
      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              {neighborhoodName} New Construction Market Stats
            </h2>
            <p className="text-sm text-body-color/70 dark:text-body-color-dark/70">
              Data as of {lastUpdated}. Source: Local MLS and builder data.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-sm font-medium text-body-color dark:text-body-color-dark">
                Median Price
              </p>
              <p className="text-2xl font-bold text-black dark:text-white">
                ${medianPrice.toLocaleString()}
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-sm font-medium text-body-color dark:text-body-color-dark">
                Price Per Sq Ft
              </p>
              <p className="text-2xl font-bold text-black dark:text-white">
                ${pricePerSqft}
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-sm font-medium text-body-color dark:text-body-color-dark">
                Days on Market
              </p>
              <p className="text-2xl font-bold text-black dark:text-white">
                {daysOnMarket}
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-sm font-medium text-body-color dark:text-body-color-dark">
                Active Listings
              </p>
              <p className="text-2xl font-bold text-black dark:text-white">
                {activeListings}
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-sm font-medium text-body-color dark:text-body-color-dark">
                YoY Change
              </p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {yoyChange}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
