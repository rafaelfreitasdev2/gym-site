'use client'

import { Dumbbell, Users, Zap, Clock, MapPin, Sparkles } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { type CSSProperties, type MouseEvent, useRef, useState } from 'react'
import { AnimatedNumber } from '@/components/animated-number'

const features = [
  {
    icon: Dumbbell,
    title: 'Technogym Equipment',
    description: 'State-of-the-art Italian technology in strength training, cardio, and functional fitness. The same equipment used by Olympic athletes.',
    highlight: 'Premium',
    metric: { value: 1, suffix: 'st', label: 'Olympic-grade setup' }
  },
  {
    icon: Users,
    title: 'Elite Team',
    description: 'Internationally certified personal trainers with proven experience in real transformations.',
    highlight: 'Certified',
    metric: { value: 15, suffix: '+', label: 'certified coaches' }
  },
  {
    icon: Zap,
    title: 'Premium Environment',
    description: 'Perfect climate control, designed lighting, and acoustics engineered for your best performance.',
    highlight: 'Comfort',
    metric: { value: 24, suffix: '/7', label: 'climate controlled' }
  },
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'For Premium and Elite members, the gym never closes. Train at the time that works best for you.',
    highlight: 'Flexible',
    metric: { value: 24, suffix: '/7', label: 'member access' }
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'City center with easy public transport access and free private parking for members.',
    highlight: 'Accessible',
    metric: { value: 1, suffix: '', label: 'prime central address' }
  },
  {
    icon: Sparkles,
    title: 'Unique Experience',
    description: 'More than training: exclusive app, nutritional guidance, and an engaged community.',
    highlight: 'Complete',
    metric: { value: 360, suffix: '\u00b0', label: 'complete fitness support' }
  }
]

type FeatureCardStyle = CSSProperties & {
  '--mouse-x': string
  '--mouse-y': string
  '--rotate-x': string
  '--rotate-y': string
}

const easeOutPremium = [0.22, 1, 0.36, 1] as const

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.34,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutPremium },
  },
}

export function Diferenciais() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useInView(sectionRef, { once: true, amount: 0.15 })
  const [activeFeature, setActiveFeature] = useState<number | null>(null)

  const handleFeatureMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rotateY = (x / rect.width - 0.5) * 5
    const rotateX = (0.5 - y / rect.height) * 5

    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
    card.style.setProperty('--rotate-x', `${rotateX}deg`)
    card.style.setProperty('--rotate-y', `${rotateY}deg`)
  }

  const resetFeatureTilt = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty('--rotate-x', '0deg')
    event.currentTarget.style.setProperty('--rotate-y', '0deg')
    setActiveFeature(null)
  }

  return (
    <section ref={sectionRef} id="features" className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
      <div className="premium-feature-grid absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(255,208,0,0.08),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,208,0,0.35),transparent)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-12 text-center sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7, ease: easeOutPremium }}
        >
          <span className="premium-kicker mb-4 inline-block text-sm font-bold uppercase tracking-wider text-primary">Why Choose Us</span>
          <h2 className="mb-5 text-balance text-3xl font-black text-foreground sm:text-4xl lg:mb-6 lg:text-6xl">
            What makes us
            <span className="premium-metallic-text ml-2 sm:ml-3">unique</span>
          </h2>
          <motion.p
            className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
            animate={isVisible ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 14, filter: 'blur(8px)' }}
            transition={{ duration: 0.65, delay: 0.18, ease: 'easeOut' }}
          >
            An exclusive combination of premium infrastructure, excellence professionals, and a philosophy focused on real results.
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-6 flex items-center justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, delay: 0.28, ease: 'easeOut' }}
        >
          <div className="premium-reasons-counter rounded-full border border-primary/20 bg-card/70 px-4 py-2 text-sm font-semibold text-foreground shadow-[0_0_30px_rgba(255,208,0,0.06)] backdrop-blur">
            <span className="text-primary">
              <AnimatedNumber value={6} start={isVisible} duration={900} />
            </span>{' '}
            reasons serious athletes choose Warehouse
          </div>
        </motion.div>

        <motion.div
          className="relative grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={gridVariants}
        >
          <div className="premium-feature-rail pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,rgba(255,208,0,0.24),transparent)] lg:block" />

          {features.map((feature, idx) => {
            const Icon = feature.icon
            const isActive = activeFeature === idx

            return (
              <motion.div
                key={feature.title}
                className="h-full"
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
              >
                <div
                  data-active={isActive ? 'true' : undefined}
                  className="premium-feature-card group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-lg border border-border bg-card/90 p-6 transition-all duration-500 sm:p-8"
                  style={{
                    '--mouse-x': '50%',
                    '--mouse-y': '50%',
                    '--rotate-x': '0deg',
                    '--rotate-y': '0deg',
                  } as FeatureCardStyle}
                  onFocus={() => setActiveFeature(idx)}
                  onBlur={() => setActiveFeature(null)}
                  onMouseMove={handleFeatureMove}
                  onMouseEnter={() => setActiveFeature(idx)}
                  onMouseLeave={resetFeatureTilt}
                >
                  <div className="premium-card-spotlight pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="premium-card-edge pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 mb-7 flex min-h-16 items-start justify-between gap-4">
                    <motion.div
                      className={`premium-feature-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-all duration-500 group-hover:bg-primary group-hover:shadow-[0_0_30px_rgba(255,208,0,0.34)] ${isVisible ? 'animate-feature-icon-pop' : ''}`}
                      whileHover={{ scale: 1.04, rotate: -2 }}
                      transition={{ duration: 0.24, ease: 'easeOut' }}
                    >
                      <Icon className="h-7 w-7 text-primary transition-colors duration-500 group-hover:text-primary-foreground" />
                    </motion.div>

                    <span className="premium-shine-badge relative overflow-hidden rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                      {feature.highlight}
                    </span>
                  </div>

                  <div className="relative z-10 flex flex-1 flex-col">
                    <h3 className="mb-3 min-h-7 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="premium-metric-box mt-auto flex min-h-20 items-center gap-3 rounded-lg border border-border/80 bg-background/45 p-3">
                      <span className="min-w-16 text-2xl font-black text-primary">
                        <AnimatedNumber
                          value={feature.metric.value}
                          start={isVisible}
                          duration={1400}
                          delay={idx * 140}
                          suffix={feature.metric.suffix}
                        />
                      </span>
                      <span className="text-sm font-medium leading-tight text-foreground/80">
                        {feature.metric.label}
                      </span>
                    </div>
                  </div>

                  <span className="pointer-events-none absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-0 left-0 h-1 w-0 rounded-b-lg bg-gradient-to-r from-primary to-primary/40 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
