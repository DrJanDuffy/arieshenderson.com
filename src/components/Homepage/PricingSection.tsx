import SectionTitle from '../Common/SectionTitle'

export default function PricingSection() {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="How Much Does This Cost?"
          paragraph="Here's the thing: you don't pay us. The builder pays our commission, just like they pay their own agent. The difference is we work for you, not them."
          center
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          <div className="rounded-lg border-2 border-primary bg-white p-8 shadow-lg dark:border-primary dark:bg-gray-800">
            <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
              New Construction Buyer Representation
            </h3>
            <div className="mb-4 text-3xl font-bold text-primary">Free to You</div>
            <p className="mb-6 text-body-color dark:text-body-color-dark">
              Full representation through your new construction purchase. We negotiate
              price, review contracts, handle inspections, and protect your interests.
            </p>
            <ul className="mb-6 space-y-3">
              {[
                'Price and upgrade negotiations',
                'Contract review and negotiation',
                'Inspection coordination',
                'Timeline management',
                'Issue resolution',
                'Post-closing support',
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-body-color dark:text-body-color-dark"
                >
                  <svg
                    className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary"
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
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm font-semibold text-primary">
              Builder pays our commission. You pay nothing.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
              First-Time Homebuyer Package
            </h3>
            <div className="mb-4 text-3xl font-bold text-primary">Free to You</div>
            <p className="mb-6 text-body-color dark:text-body-color-dark">
              Everything above, plus education and guidance specific to first-time
              buyers. We explain the process, help with financing, and make sure you
              understand every step.
            </p>
            <ul className="mb-6 space-y-3">
              {[
                'Everything in New Construction package',
                'First-time buyer education',
                'Financing guidance',
                'Down payment assistance programs',
                'Process walkthrough',
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-body-color dark:text-body-color-dark"
                >
                  <svg
                    className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary"
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
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm font-semibold text-primary">
              Builder pays our commission. You pay nothing.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-body-color dark:text-body-color-dark">
            We&apos;re paid by the builder, just like their agent. The difference is we work
            exclusively for you. No dual agency. No conflicts of interest.
          </p>
        </div>
      </div>
    </section>
  )
}
