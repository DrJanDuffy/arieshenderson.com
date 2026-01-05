'use client'

import { useState } from 'react'
import SectionTitle from '../Common/SectionTitle'
import FAQSchema from '../SEO/FAQSchema'

const faqs = [
  {
    question: 'Do I really need my own agent for new construction?',
    answer:
      "You don't need one, but you should have one. The builder's agent works for the builder. They're not going to negotiate price, point out contract issues, or fight for you if something goes wrong. We do all of that.",
  },
  {
    question: 'Does this cost me anything?',
    answer:
      'No. The builder pays our commission, just like they pay their own agent. You pay nothing. The difference is we work for you, not the builder.',
  },
  {
    question: "Can I still use the builder's agent?",
    answer:
      "You can, but you shouldn't. When you use the builder's agent, you're in a dual agency situation. They legally represent both you and the builder, which means they can't fully advocate for either. We only represent you.",
  },
  {
    question: "What if I've already talked to a builder?",
    answer:
      "That's fine. As long as you haven't signed a contract, we can still represent you. We'll handle all future negotiations and make sure you get the best deal possible.",
  },
  {
    question: 'How much can you actually save me?',
    answer:
      'It varies, but our clients typically save $10,000 to $50,000 through price negotiation, upgrade discounts, and avoiding unnecessary fees. Sometimes more, depending on the purchase price and what we negotiate.',
  },
  {
    question: 'What areas do you cover?',
    answer:
      'We work throughout the Las Vegas Valley, including Summerlin, Henderson, North Las Vegas, and surrounding areas. We know the new construction market across the region.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="dark:bg-bg-color-dark bg-white relative z-10 py-16 md:py-20 lg:py-28">
      <FAQSchema faqs={faqs} />
      <div className="container">
        <SectionTitle
          title="Common Questions"
          paragraph="Things people ask before working with us:"
          center
        />

        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-black dark:text-white">
                    {faq.question}
                  </h3>
                  <svg
                    className={`h-5 w-5 text-primary transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="border-t border-gray-200 p-6 dark:border-gray-700">
                    <p className="text-body-color dark:text-body-color-dark">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
