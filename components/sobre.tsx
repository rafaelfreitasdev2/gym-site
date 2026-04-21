'use client'

import { useEffect, useRef, useState } from 'react'
import { Target, Eye, Heart } from 'lucide-react'
import { AnimatedNumber } from '@/components/animated-number'

const stats = [
  { value: 15, suffix: '+', label: 'Years in business' },
  { value: 500, suffix: '+', label: 'Active members' },
  { value: 35, suffix: '+', label: 'Professionals' },
  { value: 2000, suffix: 'm²', label: 'Facility size' },
]

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'Transform lives through a complete fitness ecosystem, where every detail is designed to maximize your results and experience.',
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'To be a European reference in premium gyms, recognized for excellence in services, constant innovation, and engaged community.',
  },
  {
    icon: Heart,
    title: 'Values',
    description: 'Excellence in everything we do. Respect for every individual. Constant innovation. Commitment to real results.',
  },
]

export function Sobre() {
  const sectionRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true)
        }
      },
      { threshold: 0.35 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-secondary/30 px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,208,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,208,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto relative">
        <div className={`mb-12 text-center transition-all duration-700 sm:mb-16 lg:mb-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary text-sm font-bold tracking-wider uppercase mb-4">About Us</span>
          <h2 className="mb-5 text-3xl font-black text-foreground text-balance sm:text-4xl lg:mb-6 lg:text-6xl">
            <AnimatedNumber value={15} start={isVisible} /> years transforming
            <span className="ml-2 text-primary sm:ml-3">lives</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
            Since <AnimatedNumber value={2009} start={isVisible} />, Warehouse has been synonymous with excellence in the fitness market. We were born with the mission to offer an unparalleled gym experience, and today we are a reference in real transformations.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 sm:mb-16 md:grid-cols-3 lg:mb-20">
          {values.map((value, idx) => {
            const Icon = value.icon

            return (
              <div
                key={value.title}
                className={`group rounded-lg border border-border bg-card p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(255,208,0,0.1)] sm:p-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-6 transition-all duration-500">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>

        <div ref={statsRef} className={`rounded-lg border border-border bg-card p-5 transition-all duration-700 delay-500 sm:p-8 md:p-12 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 gap-5 sm:gap-8 md:grid-cols-4">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`text-center group transition-all duration-700 ${statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <p className={`mb-2 text-3xl font-black text-primary transition-all duration-700 group-hover:scale-110 sm:text-4xl md:text-5xl ${statsVisible ? 'tracking-normal' : 'tracking-[0.35em]'}`}>
                  <AnimatedNumber
                    value={stat.value}
                    start={statsVisible}
                    duration={2200}
                    delay={idx * 220}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="text-sm font-medium text-muted-foreground sm:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
