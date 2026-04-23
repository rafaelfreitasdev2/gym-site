'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Plus, Minus } from 'lucide-react'

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Is the first class really free?',
    answer: 'Yes! Your first visit is 100% free with no obligation. You can explore the entire facility, talk to our professionals, and even take a trial class.'
  },
  {
    question: 'Can I cancel my plan anytime?',
    answer: "Absolutely. We don't require any commitment. You can cancel your plan at any time, with no penalties or additional fees. Just give us 30 days notice."
  },
  {
    question: "What's included in the Premium plan?",
    answer: 'The Premium plan includes: 24/7 gym access, all class types, monthly fitness assessment, personalized training program, lounge area access, and exclusive app with tracking.'
  },
  {
    question: 'Do you have personal trainers?',
    answer: 'Yes! We have a team of certified personal trainers available for all plans (at additional cost). Elite members already have 4 monthly sessions included.'
  },
  {
    question: "What's the minimum age to train?",
    answer: 'We accept members from 14 years old. Those under 18 need parental consent. We have specific programs for teenagers with specialized guidance.'
  },
  {
    question: 'Do you have parking?',
    answer: 'Yes! We have free private parking for all members. There are 50 spaces available in the basement with direct access to reception.'
  }
]

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useInView(sectionRef, { once: true, amount: 0.12 })
  const [activeIdx, setActiveIdx] = useState<number | null>(0)

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-secondary/30 px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,208,0,0.045),transparent_34%)]" />
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 text-center sm:mb-16"
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="premium-kicker mb-4 inline-block text-sm font-bold uppercase tracking-wider text-primary">FAQ</span>
          <h2 className="mb-5 text-balance text-3xl font-black text-foreground sm:text-4xl lg:mb-6 lg:text-5xl">
            Frequently asked
            <span className="premium-metallic-text ml-2 sm:ml-3">questions</span>
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            Get answers about plans, facilities, and how we operate.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isActive = activeIdx === idx

            return (
              <motion.div
                key={faq.question}
                className={`overflow-hidden rounded-lg border bg-card/90 shadow-[0_18px_50px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-500 ${isActive ? 'border-primary/50 shadow-[0_0_30px_rgba(255,208,0,0.1)]' : 'border-border'}`}
                initial={{ opacity: 0, y: 24 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: 'easeOut' }}
              >
                <button
                  type="button"
                  aria-expanded={isActive}
                  aria-controls={`faq-panel-${idx}`}
                  id={`faq-trigger-${idx}`}
                  onClick={() => setActiveIdx(isActive ? null : idx)}
                  className="flex w-full items-center justify-between px-5 py-5 text-left transition-colors duration-300 hover:bg-secondary/50 sm:px-6"
                >
                  <span className={`font-bold transition-colors duration-300 ${isActive ? 'text-primary' : 'text-foreground'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 ${isActive ? 'bg-primary' : 'bg-secondary'}`}>
                    {isActive ? (
                      <Minus className={`w-4 h-4 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                    ) : (
                      <Plus className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                </button>

                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${idx}`}
                  className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed border-t border-border pt-4">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* More Questions */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-muted-foreground">
            Still have questions?{' '}
            <a href="#contact" className="text-primary font-bold hover:underline">
              Get in touch
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
