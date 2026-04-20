'use client'

import { Star, Quote } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { AnimatedNumber } from '@/components/animated-number'

const testimonials = [
  {
    name: 'James Wilson',
    result: { value: 12, prefix: '+', suffix: 'kg muscle mass' },
    duration: { value: 8, suffix: ' months' },
    feedback: 'Warehouse completely changed my relationship with exercise. The professionals understand exactly what you need.',
    avatar: 'JW'
  },
  {
    name: 'Sophie Laurent',
    result: { value: 18, prefix: '-', suffix: 'kg body fat' },
    duration: { value: 6, suffix: ' months' },
    feedback: 'Welcoming environment, top-notch equipment, and a team that truly cares about your results.',
    avatar: 'SL'
  },
  {
    name: 'Robert Mueller',
    result: { label: 'Marathon finisher' },
    duration: { value: 1, suffix: ' year' },
    feedback: 'From sedentary to marathon runner. The structure and support at Warehouse were essential to this achievement.',
    avatar: 'RM'
  },
  {
    name: 'Emma Thompson',
    result: { label: 'Full flexibility' },
    duration: { value: 4, suffix: ' months' },
    feedback: 'The pilates classes are incredible. Attentive instructors and an environment that inspires you to push beyond.',
    avatar: 'ET'
  }
]

const stats = [
  { value: 98, suffix: '%', label: 'Satisfaction' },
  { value: 500, suffix: '+', label: 'Transformations' },
  { value: 4.9, decimals: 1, label: 'Google Rating' },
  { value: 85, suffix: '%', label: 'Referrals' }
]

export function Depoimentos() {
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
    <section ref={sectionRef} className="py-32 px-6 lg:px-12 bg-secondary/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary text-sm font-bold tracking-wider uppercase mb-4">Testimonials</span>
          <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-6 text-balance">
            Stories of
            <span className="text-primary ml-3">transformation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Over <AnimatedNumber value={500} start={isVisible} /> lives transformed. Discover some of the stories from those who are already part of the Warehouse family.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,208,0,0.1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-foreground text-lg leading-relaxed mb-8">
                &quot;{testimonial.feedback}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">
                      Member for{' '}
                      <AnimatedNumber
                        value={testimonial.duration.value}
                        start={isVisible}
                        duration={1600}
                        delay={idx * 150}
                        suffix={testimonial.duration.suffix}
                      />
                    </p>
                  </div>
                </div>

                {/* Result Badge */}
                <div className="hidden sm:block bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold text-sm">
                    {'label' in testimonial.result ? (
                      testimonial.result.label
                    ) : (
                      <AnimatedNumber
                        value={testimonial.result.value}
                        start={isVisible}
                        duration={1600}
                        delay={idx * 150}
                        prefix={testimonial.result.prefix}
                        suffix={testimonial.result.suffix}
                      />
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div ref={statsRef} className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-500 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`text-center p-6 bg-card border border-border rounded-xl transition-all duration-700 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(255,208,0,0.1)] ${statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${idx * 140}ms` }}
            >
              <p className={`text-3xl font-black text-primary mb-1 transition-all duration-700 hover:scale-110 ${statsVisible ? 'tracking-normal' : 'tracking-[0.35em]'}`}>
                <AnimatedNumber
                  value={stat.value}
                  start={statsVisible}
                  duration={2200}
                  delay={idx * 220}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
