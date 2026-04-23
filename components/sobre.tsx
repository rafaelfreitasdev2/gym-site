'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Target, Eye, Heart } from 'lucide-react'
import { AnimatedNumber } from '@/components/animated-number'

const stats = [
  { value: 15, suffix: '+', label: 'Years in business' },
  { value: 500, suffix: '+', label: 'Active members' },
  { value: 35, suffix: '+', label: 'Professionals' },
  { value: 2000, suffix: 'm\u00b2', label: 'Facility size' },
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
  const isVisible = useInView(sectionRef, { once: true, amount: 0.12 })
  const statsVisible = useInView(statsRef, { once: true, amount: 0.35 })

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-secondary/30 px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
      <div className="premium-feature-grid absolute inset-0 opacity-45" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-12 text-center sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="premium-kicker mb-4 inline-block text-sm font-bold uppercase tracking-wider text-primary">About Us</span>
          <h2 className="mb-5 text-balance text-3xl font-black text-foreground sm:text-4xl lg:mb-6 lg:text-6xl">
            <AnimatedNumber value={15} start={isVisible} /> years transforming
            <span className="premium-metallic-text ml-2 sm:ml-3">lives</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
            Since <AnimatedNumber value={2009} start={isVisible} />, Warehouse has been synonymous with excellence in the fitness market. We were born with the mission to offer an unparalleled gym experience, and today we are a reference in real transformations.
          </p>
        </motion.div>

        <div className="mb-12 grid grid-cols-1 gap-6 sm:mb-16 md:grid-cols-3 lg:mb-20">
          {values.map((value, idx) => {
            const Icon = value.icon

            return (
              <motion.div
                key={value.title}
                className="group rounded-lg border border-border bg-card/90 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-500 hover:border-primary/50 hover:shadow-[0_24px_64px_rgba(0,0,0,0.24),0_0_42px_rgba(255,208,0,0.08)] sm:p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.55, delay: idx * 0.12, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-500 group-hover:bg-primary group-hover:shadow-[0_0_30px_rgba(255,208,0,0.32)]">
                  <Icon className="h-7 w-7 text-primary transition-colors duration-500 group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">{value.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{value.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          ref={statsRef}
          className="rounded-lg border border-border bg-card/90 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={statsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <div className="grid grid-cols-2 gap-5 sm:gap-8 md:grid-cols-4">
            {stats.map((stat, idx) => (
              <div key={stat.label} className="group text-center">
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
        </motion.div>
      </div>
    </section>
  )
}
