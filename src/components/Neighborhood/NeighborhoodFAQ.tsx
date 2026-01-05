import FAQSchema from "@/components/SEO/FAQSchema";

type FAQ = {
  question: string;
  answer: string;
};

type NeighborhoodFAQProps = {
  faqs: FAQ[];
};

export default function NeighborhoodFAQ({ faqs }: NeighborhoodFAQProps) {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-body-color dark:text-body-color-dark">
              Common questions about new construction homes in this area.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900"
                >
                  <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
