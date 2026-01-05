import SectionTitle from '../Common/SectionTitle'

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="dark:bg-bg-color-dark bg-white relative z-10 py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="The Problem Most Homebuyers Don't See Coming"
          paragraph="You think you're getting help, but you're actually getting sold. Here's what happens when you work with the builder's agent:"
          center
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
              They&apos;re Not On Your Side
            </h3>
            <p className="text-body-color dark:text-body-color-dark">
              The agent showing you that new construction home? They work for the
              builder. Their commission comes from the builder, not you. So when they
              say &quot;this is a great deal,&quot; they mean it&apos;s great for the builder.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
              You Pay Full Price (Or More)
            </h3>
            <p className="text-body-color dark:text-body-color-dark">
              Builder agents don&apos;t negotiate. Why would they? Their job is to get you
              to pay asking price, add expensive upgrades, and close quickly. You end
              up paying thousands more than you should.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
              You Miss Red Flags
            </h3>
            <p className="text-body-color dark:text-body-color-dark">
              That contract has clauses that protect the builder, not you. Those
              upgrades cost way more than they should. That timeline might slip, and
              you&apos;ll have no recourse. A builder&apos;s agent won&apos;t point any of this out.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
              You&apos;re On Your Own
            </h3>
            <p className="text-body-color dark:text-body-color-dark">
              Once you sign, you&apos;re stuck. If something goes wrong, if the builder
              delays, if quality isn&apos;t what you expected—the agent who &quot;helped&quot; you
              isn&apos;t going to fight for you. They already got paid.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
