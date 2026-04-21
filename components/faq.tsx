'use client'

import { useState, useEffect, useRef } from 'react'
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
  const [isVisible, setIsVisible] = useState(false)
  const [activeIdx, setActiveIdx] = useState<number | null>(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-secondary/30 px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className={`mb-12 text-center transition-all duration-700 sm:mb-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary text-sm font-bold tracking-wider uppercase mb-4">FAQ</span>
          <h2 className="mb-5 text-3xl font-black text-foreground text-balance sm:text-4xl lg:mb-6 lg:text-5xl">
            Frequently asked
            <span className="ml-2 text-primary sm:ml-3">questions</span>
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            Get answers about plans, facilities, and how we operate.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isActive = activeIdx === idx

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-lg border bg-card transition-all duration-500 ${isActive ? 'border-primary/50 shadow-[0_0_30px_rgba(255,208,0,0.1)]' : 'border-border'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 75}ms` }}
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
              </div>
            )
          })}
        </div>

        {/* More Questions */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-muted-foreground">
            Still have questions?{' '}
            <a href="#contact" className="text-primary font-bold hover:underline">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
