import SectionTitle from '../Common/SectionTitle'

export default function ValuePropsSection() {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Happens When You Have Someone Actually Working For You"
          paragraph="We're exclusive buyer agents. That means we only represent you. No builder relationships. No conflicts of interest. Just someone who fights to get you the best deal possible."
          center
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-4 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
              <h3 className="text-xl font-bold text-black dark:text-white">
                We Negotiate Everything
              </h3>
            </div>
            <p className="text-body-color dark:text-body-color-dark">
              Base price, upgrades, closing costs, timeline—we negotiate it all.
              Builders expect to negotiate, but most buyers don&apos;t because they&apos;re
              working with the builder&apos;s agent. We change that.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-4 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white">
                We Review Every Contract
              </h3>
            </div>
            <p className="text-body-color dark:text-body-color-dark">
              Builder contracts are written to protect builders. We read every line,
              explain what it means, and push back on clauses that don&apos;t serve you.
              You&apos;ll know exactly what you&apos;re signing.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-4 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
              <h3 className="text-xl font-bold text-black dark:text-white">
                We Save You Real Money
              </h3>
            </div>
            <p className="text-body-color dark:text-body-color-dark">
              Between negotiating the base price, getting upgrades at cost, and avoiding
              unnecessary fees, our clients typically save $10,000 to $50,000 on their
              new construction purchase. Sometimes more.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-4 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white">
                We&apos;re There Through Everything
              </h3>
            </div>
            <p className="text-body-color dark:text-body-color-dark">
              From your first visit to the model home through final walkthrough and
              closing, we&apos;re with you. If something goes wrong, we handle it. If the
              builder tries to cut corners, we catch it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
