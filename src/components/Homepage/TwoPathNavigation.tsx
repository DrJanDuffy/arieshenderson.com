import Link from 'next/link'
import SectionTitle from '../Common/SectionTitle'

type PathOption = {
  title: string
  description: string
  href: string
  features: string[]
  icon: React.ReactNode
}

const paths: PathOption[] = [
  {
    title: 'New Construction Homebuyer',
    description:
      'Navigate new construction with an expert who knows builder contracts, upgrades, and negotiation strategies.',
    href: '/new-construction',
    features: [
      'Builder contract review & negotiation',
      'Upgrade cost analysis',
      'Warranty & inspection guidance',
      'Timeline & closing coordination',
    ],
    icon: (
      <svg
        className="h-12 w-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: 'First Time Homebuyer',
    description:
      'Get step-by-step guidance through your first home purchase with education, support, and expert representation.',
    href: '/first-time-buyer',
    features: [
      'First-time buyer education',
      'Mortgage & financing guidance',
      'Down payment assistance programs',
      'Complete purchase process support',
    ],
    icon: (
      <svg
        className="h-12 w-12"
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
    ),
  },
]

export default function TwoPathNavigation() {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Choose Your Homebuying Path"
          paragraph="Whether you're buying new construction or purchasing your first home, we have specialized guides and expertise to help you succeed."
          center
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {paths.map((path, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-6 flex items-center">
                <div className="mr-4 text-primary">{path.icon}</div>
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  {path.title}
                </h3>
              </div>

              <p className="mb-6 text-body-color dark:text-body-color-dark">
                {path.description}
              </p>

              <ul className="mb-8 space-y-3">
                {path.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
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
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={path.href}
                className="inline-block rounded-xs bg-primary px-6 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Get Started →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
