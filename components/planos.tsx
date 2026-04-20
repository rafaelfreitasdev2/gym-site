'use client'

import { Check, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useRef, useState } from 'react'
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

export function Planos() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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
    <section ref={sectionRef} id="pricing" className="py-32 px-6 lg:px-12 bg-secondary/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary text-sm font-bold tracking-wider uppercase mb-4">Pricing</span>
          <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-6 text-balance">
            Invest in
            <span className="text-primary ml-3">yourself</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Flexible plans with no commitment. Cancel anytime, hassle-free.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${plan.featured ? 'md:-mt-8 md:mb-8' : ''}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Popular Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-[0_0_30px_rgba(255,208,0,0.5)]">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`h-full bg-card rounded-3xl p-8 transition-all duration-500 ${plan.featured ? 'border-2 border-primary shadow-[0_0_60px_rgba(255,208,0,0.2)]' : 'border border-border hover:border-primary/30'}`}>
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8 pb-8 border-b border-border">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-6xl font-black ${plan.featured ? 'text-primary' : 'text-foreground'}`}>
                      <AnimatedNumber value={plan.price} start={isVisible} prefix="€" />
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                {/* Benefits */}
                <ul className="space-y-4 mb-8">
                  {plan.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.featured ? 'bg-primary' : 'bg-primary/20'}`}>
                        <Check className={`w-3 h-3 ${plan.featured ? 'text-primary-foreground' : 'text-primary'}`} />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className={`w-full py-6 font-bold text-lg h-auto transition-all duration-300 ${
                    plan.featured
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-[0_0_40px_rgba(255,208,0,0.4)]'
                      : 'bg-secondary hover:bg-secondary/80 text-foreground border border-border hover:border-primary/50'
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Signals */}
        <div className={`mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground text-sm transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            No commitment
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            First class free
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            Cancel anytime
          </div>
        </div>
      </div>
    </section>
  )
}
