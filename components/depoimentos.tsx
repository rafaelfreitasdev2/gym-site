'use client'

import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { AnimatedNumber } from '@/components/animated-number'

const testimonials = [
  {
    name: 'James Wilson',
    result: { value: 12, prefix: '+', suffix: 'kg muscle mass' },
    duration: { value: 8, suffix: ' months' },
    feedback: 'Warehouse completely changed my relationship with exercise. The professionals understand exactly what you need.',
    avatarImage: '/images/testemonials/James Wilson.png'
  },
  {
    name: 'Sophie Laurent',
    result: { value: 18, prefix: '-', suffix: 'kg body fat' },
    duration: { value: 6, suffix: ' months' },
    feedback: 'Welcoming environment, top-notch equipment, and a team that truly cares about your results.',
    avatarImage: '/images/testemonials/Sophie Laurent.png'
  },
  {
    name: 'Robert Mueller',
    result: { label: 'Marathon finisher' },
    duration: { value: 1, suffix: ' year' },
    feedback: 'From sedentary to marathon runner. The structure and support at Warehouse were essential to this achievement.',
    avatarImage: '/images/testemonials/Robert Mueller.png'
  },
  {
    name: 'Emma Thompson',
    result: { label: 'Full flexibility' },
    duration: { value: 4, suffix: ' months' },
    feedback: 'The pilates classes are incredible. Attentive instructors and an environment that inspires you to push beyond.',
    avatarImage: '/images/testemonials/Emma Thompson.png'
  },
  {
    name: 'Lucas Martins',
    result: { value: 9, prefix: '+', suffix: 'kg strength gain' },
    duration: { value: 5, suffix: ' months' },
    feedback: 'The structure, the classes, and the coaches made training feel consistent for the first time in my life.',
    avatarImage: '/images/testemonials/Lucas Martins.png'
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
  const autoScroll = useMemo(
    () =>
      AutoScroll({
        direction: 'forward',
        playOnInit: true,
        speed: 0.8,
        startDelay: 0,
        stopOnFocusIn: false,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    []
  )
  const [emblaRef] = useEmblaCarousel(
    {
      align: 'start',
      containScroll: false,
      dragFree: true,
      loop: true,
      skipSnaps: true,
    },
    [autoScroll]
  )
  const [isVisible, setIsVisible] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)
  const carouselTestimonials = [...testimonials, ...testimonials, ...testimonials]

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
    <section ref={sectionRef} id="testimonials" className="relative overflow-hidden bg-secondary/30 px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-28">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className={`mb-10 text-center transition-all duration-700 sm:mb-12 lg:mb-14 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="premium-kicker mb-4 inline-block text-sm font-bold uppercase tracking-wider text-primary">Testimonials</span>
          <h2 className="mb-5 text-3xl font-black text-foreground text-balance sm:text-4xl lg:mb-6 lg:text-6xl">
            Stories of
            <span className="premium-metallic-text ml-2 sm:ml-3">transformation</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Over <AnimatedNumber value={500} start={isVisible} /> lives transformed. Discover some of the stories from those who are already part of the Warehouse family.
          </p>
        </div>

        {/* Testimonials Marquee */}
        <div className={`relative -mx-4 overflow-hidden sm:-mx-6 lg:-mx-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-secondary/30 to-transparent sm:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-secondary/30 to-transparent sm:w-28" />

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y gap-5 px-4 sm:gap-6 sm:px-6 lg:px-12">
              {carouselTestimonials.map((testimonial, idx) => (
            <div
              key={`${testimonial.name}-${idx}`}
              className="group flex min-h-[300px] w-[min(82vw,420px)] shrink-0 flex-col rounded-lg border border-border bg-card/90 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-500 hover:border-primary/50 hover:shadow-[0_24px_64px_rgba(0,0,0,0.24),0_0_42px_rgba(255,208,0,0.08)] sm:w-[500px] sm:p-8 lg:w-[560px]"
              aria-hidden={idx >= testimonials.length}
            >
              {/* Quote Icon */}
              <Quote className="mb-6 h-10 w-10 text-primary/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Feedback */}
              <p className="mb-8 text-base leading-relaxed text-foreground sm:text-lg">
                &quot;{testimonial.feedback}&quot;
              </p>

              {/* Author */}
              <div className="mt-auto flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-primary/20 bg-primary/10">
                    <Image
                      src={testimonial.avatarImage}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
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
                <div className="w-fit rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
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
          </div>
        </div>

        {/* Stats Row */}
        <div ref={statsRef} className={`mt-12 grid grid-cols-2 gap-4 transition-all duration-700 delay-500 sm:mt-16 sm:gap-6 md:grid-cols-4 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`rounded-lg border border-border bg-card/90 p-4 text-center shadow-[0_18px_50px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-700 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_24px_64px_rgba(0,0,0,0.22),0_0_42px_rgba(255,208,0,0.08)] sm:p-6 ${statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${idx * 140}ms` }}
            >
              <p className={`mb-1 text-2xl font-black text-primary transition-all duration-700 hover:scale-110 sm:text-3xl ${statsVisible ? 'tracking-normal' : 'tracking-[0.35em]'}`}>
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
