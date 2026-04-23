'use client'

import { Check, Sparkles } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { AnimatedNumber } from '@/components/animated-number'

const plans = [
  {
    name: 'Essential',
    price: 49,
    period: '/month',
    description: 'For those starting their fitness journey',
    featured: false,
    benefits: [
      'Weight training access',
      'Premium equipment',
      'Full locker room',
      'Hours: 6am - 10pm',
      'Training app'
    ]
  },
  {
    name: 'Premium',
    price: 59,
    period: '/month',
    description: 'The most popular choice among our members',
    featured: true,
    benefits: [
      'Everything in Essential',
      '24/7 access',
      'All class types',
      'Unlimited classes',
      'Monthly assessment',
      'Personalized program',
      'Lounge area'
    ]
  },
  {
    name: 'Elite',
    price: 69,
    period: '/month',
    description: 'The complete experience for maximum results',
    featured: false,
    benefits: [
      'Everything in Premium',
      'Personal trainer (4x/month)',
      'Nutrition consultation',
      'Exclusive locker',
      'Premium towels',
      'Post-workout shake',
      'VIP events'
    ]
  }
]

const easeOutPremium = [0.22, 1, 0.36, 1] as const

export function Planos() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useInView(sectionRef, { once: true, amount: 0.12 })

  return (
    <section ref={sectionRef} id="pricing" className="relative overflow-hidden bg-secondary/30 px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(255,208,0,0.07),transparent_38%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-12 text-center sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7, ease: easeOutPremium }}
        >
          <span className="premium-kicker mb-4 inline-block text-sm font-bold uppercase tracking-wider text-primary">Pricing</span>
          <h2 className="mb-5 text-balance text-3xl font-black text-foreground sm:text-4xl lg:mb-6 lg:text-6xl">
            Invest in
            <span className="premium-metallic-text ml-2 sm:ml-3">yourself</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Flexible plans with no commitment. Cancel anytime, hassle-free.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.22 } },
          }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              className={`relative group ${plan.featured ? 'md:-mt-6 md:mb-6 lg:-mt-8 lg:mb-8' : ''}`}
              variants={{
                hidden: { opacity: 0, y: 34 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutPremium } },
              }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
                  <div className="premium-shine-badge relative flex items-center gap-2 overflow-hidden rounded-full border border-primary/30 bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-[0_0_30px_rgba(255,208,0,0.35)]">
                    <Sparkles className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`h-full rounded-lg bg-card/90 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-500 sm:p-8 ${plan.featured ? 'border-2 border-primary shadow-[0_0_60px_rgba(255,208,0,0.16)]' : 'border border-border hover:border-primary/50 hover:shadow-[0_24px_64px_rgba(0,0,0,0.28),0_0_42px_rgba(255,208,0,0.08)]'}`}>
                <div className="mb-8">
                  <h3 className="mb-2 text-2xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-8 border-b border-border pb-8">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-black sm:text-6xl ${plan.featured ? 'text-primary' : 'text-foreground'}`}>
                      <AnimatedNumber value={plan.price} start={isVisible} prefix="EUR " />
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <ul className="mb-8 space-y-4">
                  {plan.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <div className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${plan.featured ? 'bg-primary' : 'bg-primary/20'}`}>
                        <Check className={`h-3 w-3 ${plan.featured ? 'text-primary-foreground' : 'text-primary'}`} />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`h-auto w-full py-4 text-base font-bold transition-all duration-300 sm:py-6 sm:text-lg ${
                    plan.featured
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_40px_rgba(255,208,0,0.35)]'
                      : 'border border-border bg-secondary text-foreground hover:border-primary/50 hover:bg-secondary/80'
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground sm:mt-16 sm:gap-8"
          initial={{ opacity: 0, y: 18 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.55, delay: 0.58, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            No commitment
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            First class free
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            Cancel anytime
          </div>
        </motion.div>
      </div>
    </section>
  )
}
