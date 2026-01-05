import SectionTitle from '../Common/SectionTitle'

export default function DifferentiatorSection() {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Exclusive Buyer Representation vs. Dual Agency"
          paragraph="Most agents work for the builder—we work exclusively for you. Understand the critical difference and why it matters for your home purchase."
          center
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-4 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                <svg
                  className="h-6 w-6 text-red-600 dark:text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white">
                Dual Agency Problem
              </h3>
            </div>
            <ul className="space-y-3 text-body-color dark:text-body-color-dark">
              <li className="flex items-start">
                <span className="mr-2 text-red-600">•</span>
                <span>
                  Agent represents both you and the builder (conflict of interest)
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-600">•</span>
                <span>
                  Builder&apos;s interests come first—not yours
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-600">•</span>
                <span>
                  You pay full price while agent gets builder commission
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-600">•</span>
                <span>
                  No negotiation leverage or price protection
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-4 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                <svg
                  className="h-6 w-6 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white">
                Our Exclusive Buyer Representation
              </h3>
            </div>
            <ul className="space-y-3 text-body-color dark:text-body-color-dark">
              <li className="flex items-start">
                <span className="mr-2 text-green-600">✓</span>
                <span>
                  We work exclusively for YOU—no builder conflicts
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">✓</span>
                <span>
                  Aggressive negotiation to get you the best price
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">✓</span>
                <span>
                  Builder incentives and upgrades negotiated on your behalf
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">✓</span>
                <span>
                  Full transparency—you know exactly what you&apos;re getting
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
