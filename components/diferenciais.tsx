'use client'

import { Dumbbell, Users, Zap, Clock, MapPin, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const features = [
  {
    icon: Dumbbell,
    title: 'Technogym Equipment',
    description: 'State-of-the-art Italian technology in strength training, cardio, and functional fitness. The same equipment used by Olympic athletes.',
    highlight: 'Premium'
  },
  {
    icon: Users,
    title: 'Elite Team',
    description: 'Internationally certified personal trainers with proven experience in real transformations.',
    highlight: 'Certified'
  },
  {
    icon: Zap,
    title: 'Premium Environment',
    description: 'Perfect climate control, designed lighting, and acoustics engineered for your best performance.',
    highlight: 'Comfort'
  },
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'For Premium and Elite members, the gym never closes. Train at the time that works best for you.',
    highlight: 'Flexible'
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'City center with easy public transport access and free private parking for members.',
    highlight: 'Accessible'
  },
  {
    icon: Sparkles,
    title: 'Unique Experience',
    description: 'More than training: exclusive app, nutritional guidance, and an engaged community.',
    highlight: 'Complete'
  }
]

export function Diferenciais() {
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
    <section ref={sectionRef} id="features" className="relative bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,208,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,208,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className={`mb-12 text-center transition-all duration-700 sm:mb-16 lg:mb-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary text-sm font-bold tracking-wider uppercase mb-4">Why Choose Us</span>
          <h2 className="mb-5 text-3xl font-black text-foreground text-balance sm:text-4xl lg:mb-6 lg:text-6xl">
            What makes us
            <span className="ml-2 text-primary sm:ml-3">unique</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            An exclusive combination of premium infrastructure, excellence professionals, and a philosophy focused on real results.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className={`group relative rounded-lg border border-border bg-card p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(255,208,0,0.1)] sm:p-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Highlight Badge */}
                <span className="absolute right-4 top-4 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary sm:right-6 sm:top-6">
                  {feature.highlight}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:shadow-[0_0_30px_rgba(255,208,0,0.4)] flex items-center justify-center mb-6 transition-all duration-500">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
