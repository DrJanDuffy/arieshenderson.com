import SectionTitle from '../Common/SectionTitle'

const steps = [
  {
    number: '1',
    title: 'Free Consultation',
    description:
      "We talk about what you're looking for, your budget, and your timeline. No obligation. Just a conversation to see if we're a good fit.",
  },
  {
    number: '2',
    title: 'We Find The Right Communities',
    description:
      'Based on what you want, we identify new construction communities that match. We know which builders are reliable, which areas are appreciating, and which developments have the best value.',
  },
  {
    number: '3',
    title: 'We Negotiate Everything',
    description:
      'When you find a home you like, we handle all negotiations. Price, upgrades, timeline, contract terms—we fight for the best deal possible.',
  },
  {
    number: '4',
    title: 'We Protect You Through Closing',
    description:
      "We review every document, attend every inspection, and make sure the builder delivers what they promised. If something's wrong, we fix it before you close.",
  },
  {
    number: '5',
    title: "We're There After You Move In",
    description:
      'New construction comes with warranties and potential issues. We help you navigate warranty claims and make sure the builder honors their commitments.',
  },
]

export default function ProcessSection() {
  return (
    <section className="dark:bg-bg-color-dark bg-white relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="How We Work With You"
          paragraph="Simple, clear process. No surprises. No pressure. Just someone on your side from start to finish."
          center
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                {step.number}
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                {step.title}
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
