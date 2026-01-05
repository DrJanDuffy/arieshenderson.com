import SectionTitle from '../Common/SectionTitle'

type Certification = {
  name: string
  logo?: string
}

const certifications: Certification[] = [
  { name: 'ABR (Accredited Buyer Representative)' },
  { name: 'CSP (Certified New Home Specialist)' },
  { name: 'GRI (Graduate Realtor Institute)' },
  { name: 'SRS (Seller Representative Specialist)' },
  { name: '60+ Professional Certifications' },
]

export default function CredentialsSection() {
  return (
    <section className="dark:bg-bg-color-dark bg-white relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Specialized Training & Credentials"
          paragraph="Our team holds 60+ professional certifications and specialized training in new construction, buyer representation, and real estate negotiation."
          center
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-6 text-center transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-black dark:text-white">
                {cert.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-body-color dark:text-body-color-dark">
            <strong className="text-black dark:text-white">
              Why certifications matter:
            </strong>{' '}
            Specialized training means better negotiation, deeper market knowledge,
            and protection of your interests throughout the homebuying process.
          </p>
        </div>
      </div>
    </section>
  )
}
