import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
            Ready to Have Someone Actually Work For You?
          </h2>
          <p className="mb-8 text-lg text-body-color dark:text-body-color-dark">
            Get a free consultation. No pressure. No obligation. Just a conversation
            about how we can help you get the best deal on your new construction home.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="/contact"
              className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="#property-search"
              className="inline-block rounded-xs bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
            >
              See Current Listings
            </Link>
          </div>
          <p className="mt-8 text-sm text-body-color dark:text-body-color-dark">
            60+ professional certifications. Exclusive buyer representation. No dual
            agency. No conflicts of interest.
          </p>
        </div>
      </div>
    </section>
  )
}
