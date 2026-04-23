'use client'

import Image from 'next/image'
import { ArrowUpRight, Bike, CalendarCheck, CalendarDays, Dumbbell, Flame, HeartPulse, MessageCircle, Music, Swords, Target, UserRound, Wind, X, Zap } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

const whatsappNumber = '31612345678'

const classes = [
  {
    title: 'Weight Training',
    description: 'Strength training with expert guidance',
    details: 'A complete strength class focused on technique, progressive overload, and confident movement through machines, cables, and free weights.',
    professionals: [
      { name: 'Marcus Vella', role: 'Strength Coach', specialty: 'Hypertrophy and compound lifting technique' },
      { name: 'Elena Grech', role: 'Personal Trainer', specialty: 'Beginner strength plans and posture correction' },
    ],
    schedule: ['Mon, Wed, Fri: 7am strength fundamentals', 'Tue, Thu: 6pm hypertrophy class', 'Sat: 10am assisted lifting'],
    benefits: ['Builds lean muscle and strength', 'Improves posture and joint stability', 'Supports fat loss through higher daily energy use'],
    image: '/images/atividades/weight-train.png',
    icon: Dumbbell,
  },
  {
    title: 'Functional',
    description: 'Dynamic exercises for total conditioning',
    details: 'Dynamic circuit training built around mobility, coordination, endurance, and everyday athletic performance.',
    professionals: [
      { name: 'Sofia Borg', role: 'Functional Coach', specialty: 'Conditioning and movement quality' },
      { name: 'Daniel Azzopardi', role: 'Performance Trainer', specialty: 'Agility, balance, and endurance circuits' },
    ],
    schedule: ['Mon to Fri: 12pm express circuit', 'Mon, Wed: 7pm athletic conditioning', 'Sun: 9am mobility flow'],
    benefits: ['Improves full-body coordination', 'Increases stamina and agility', 'Builds useful strength for daily movement'],
    image: '/images/atividades/functional.png',
    icon: Flame,
  },
  {
    title: 'Dance',
    description: 'Rhythm, fun, and intense calorie burn',
    details: 'A music-led class with energetic choreography, simple progressions, and a strong cardio pulse from start to finish.',
    professionals: [
      { name: 'Mia Caruana', role: 'Dance Instructor', specialty: 'Cardio dance and rhythm coaching' },
      { name: 'Lea Micallef', role: 'Group Instructor', specialty: 'Beginner-friendly choreography' },
    ],
    schedule: ['Mon, Wed: 6:30pm dance cardio', 'Fri: 7pm club rhythm session', 'Sat: 11am open level dance'],
    benefits: ['Burns calories with low pressure', 'Improves rhythm and coordination', 'Boosts mood, confidence, and consistency'],
    image: '/images/atividades/dance.png',
    icon: Music,
  },
  {
    title: 'Pilates',
    description: 'Flexibility, posture, and body balance',
    details: 'Controlled sessions focused on core strength, posture, breathing, flexibility, and precise movement.',
    professionals: [
      { name: 'Clara Zammit', role: 'Pilates Instructor', specialty: 'Core control and posture work' },
      { name: 'Isabella Fenech', role: 'Mobility Specialist', specialty: 'Flexibility and recovery routines' },
    ],
    schedule: ['Tue, Thu: 8am classic pilates', 'Mon, Wed: 5:30pm posture and core', 'Sun: 10am stretch pilates'],
    benefits: ['Strengthens deep core muscles', 'Improves posture and body awareness', 'Reduces stiffness and supports recovery'],
    image: '/images/atividades/pilates.png',
    icon: Wind,
  },
  {
    title: 'HIIT',
    description: 'High-intensity interval training',
    details: 'Short, powerful intervals combining bodyweight drills, explosive movements, and active recovery for maximum training density.',
    professionals: [
      { name: 'Andre Pace', role: 'HIIT Coach', specialty: 'Interval programming and cardio conditioning' },
      { name: 'Tom Ellis', role: 'Performance Coach', specialty: 'Safe intensity scaling for all levels' },
    ],
    schedule: ['Mon, Wed, Fri: 6am HIIT express', 'Tue, Thu: 6:30pm full-body HIIT', 'Sat: 9am weekend burn'],
    benefits: ['Improves cardiovascular capacity', 'Burns calories in a shorter session', 'Develops power, speed, and resilience'],
    image: '/images/atividades/hit.png',
    icon: Zap,
  },
  {
    title: 'Combat',
    description: 'Boxing, Muay Thai, and Jiu-Jitsu',
    details: 'Technique-driven combat training with striking drills, footwork, conditioning, and controlled partner exercises.',
    professionals: [
      { name: 'Noah Camilleri', role: 'Combat Coach', specialty: 'Boxing fundamentals and conditioning' },
      { name: 'Owen Galea', role: 'Martial Arts Instructor', specialty: 'Muay Thai technique and defensive movement' },
    ],
    schedule: ['Mon, Wed: 8pm boxing fundamentals', 'Tue, Thu: 7:30pm Muay Thai conditioning', 'Sat: 12pm combat skills'],
    benefits: ['Builds endurance and coordination', 'Develops discipline and confidence', 'Relieves stress through focused intensity'],
    image: '/images/atividades/combat.png',
    icon: Swords,
  },
  {
    title: 'Spinning',
    description: 'Indoor cycling with full immersion',
    details: 'Immersive indoor cycling with coached pacing, climbs, sprints, rhythm intervals, and endurance blocks.',
    professionals: [
      { name: 'Clara Zammit', role: 'Ride Coach', specialty: 'Endurance rides and rhythm intervals' },
      { name: 'Tom Ellis', role: 'Cycling Instructor', specialty: 'Power climbs and sprint programming' },
    ],
    schedule: ['Mon, Wed, Fri: 6:30am sunrise ride', 'Tue, Thu: 7pm power climb', 'Sat: 9am 45-minute endurance ride'],
    benefits: ['Improves cardiovascular endurance', 'Strengthens legs with low joint impact', 'Helps control pacing and breathing'],
    image: '/images/atividades/spinning area.png',
    icon: Bike,
  },
  {
    title: 'Personal Training',
    description: 'Exclusive and personalized coaching',
    details: 'One-to-one coaching built around your goals, training history, movement profile, and weekly progress.',
    professionals: [
      { name: 'Elena Grech', role: 'Personal Trainer', specialty: 'Body recomposition and beginner confidence' },
      { name: 'Marcus Vella', role: 'Strength Specialist', specialty: 'Advanced strength and hypertrophy plans' },
    ],
    schedule: ['Mon to Fri: 7am to 9pm by appointment', 'Sat: 8am to 2pm private coaching', 'Monthly: progress review and plan update'],
    benefits: ['Creates a plan around your exact goal', 'Improves technique with direct feedback', 'Keeps progress measurable and consistent'],
    image: '/images/atividades/personal-train.png',
    icon: Target,
  },
]

const easeOutPremium = [0.22, 1, 0.36, 1] as const

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.24,
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

export function Modalidades() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useInView(sectionRef, { once: true, amount: 0.12 })
  const [selectedClass, setSelectedClass] = useState<(typeof classes)[number] | null>(null)

  useEffect(() => {
    if (!selectedClass) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedClass(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedClass])

  return (
    <section ref={sectionRef} id="classes" className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-28">
      <div className="premium-feature-grid absolute inset-0 opacity-55" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,208,0,0.32),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,208,0,0.055),transparent_34%),radial-gradient(circle_at_82%_84%,rgba(255,208,0,0.04),transparent_32%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-12 text-center sm:mb-16"
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7, ease: easeOutPremium }}
        >
          <span className="premium-kicker mb-4 inline-block text-sm font-bold uppercase tracking-wider text-primary">Classes</span>
          <h2 className="mb-5 text-balance text-3xl font-black text-foreground sm:text-4xl lg:mb-6 lg:text-6xl">
            Find your
            <span className="premium-metallic-text ml-2 sm:ml-3">passion</span>
          </h2>
          <motion.p
            className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
            animate={isVisible ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 14, filter: 'blur(8px)' }}
            transition={{ duration: 0.65, delay: 0.16, ease: 'easeOut' }}
          >
            From classic modalities to the latest trends, we have the perfect activity for you.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={gridVariants}
        >
          {classes.map((cls) => {
            const Icon = cls.icon

            return (
              <motion.button
                type="button"
                key={cls.title}
                aria-label={`Open details about ${cls.title}`}
                onClick={() => setSelectedClass(cls)}
                className="group relative min-h-[300px] cursor-pointer overflow-hidden rounded-lg border border-border bg-[linear-gradient(180deg,rgba(37,37,35,0.96),rgba(29,29,27,0.98))] text-left shadow-[0_18px_50px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-500 hover:border-primary/55 hover:shadow-[0_24px_70px_rgba(0,0,0,0.34),0_0_42px_rgba(255,208,0,0.09),inset_0_1px_0_rgba(255,255,255,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-h-[340px] lg:min-h-[360px]"
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
              >
                <div className="pointer-events-none absolute inset-0 z-10 rounded-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(255,208,0,0.1)]" />
                <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,208,0,0.15),transparent_36%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute left-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/15 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_28px_rgba(0,0,0,0.18)] transition-all duration-500 group-hover:border-primary/50 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_30px_rgba(255,208,0,0.34)] sm:left-8 sm:top-8 sm:h-[60px] sm:w-[60px]">
                  <Icon className="h-7 w-7" strokeWidth={2.4} />
                </div>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary text-primary-foreground shadow-[0_0_24px_rgba(255,208,0,0.18)] transition-all duration-300 sm:right-8 sm:top-8 sm:h-12 sm:w-12 lg:translate-y-2 lg:scale-90 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:scale-100 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:scale-100 lg:group-focus-visible:opacity-100"
                >
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5" />
                </div>

                <div className="absolute inset-x-0 top-0 h-[60%] overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-background/8 to-card" />
                  <div className="absolute inset-0 z-10 bg-gradient-to-r from-card/62 via-card/8 to-transparent" />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-card via-card/34 to-transparent" />
                  <div className="relative h-full w-full opacity-72 contrast-110 saturate-105 transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-95">
                    <Image
                      src={cls.image}
                      alt={cls.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-8">
                  <h3 className="mb-3 text-xl font-black leading-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">{cls.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/72 sm:text-base">{cls.description}</p>
                </div>

                <span className="pointer-events-none absolute left-5 right-5 top-0 z-20 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-0 left-0 z-20 h-1 w-0 rounded-b-lg bg-gradient-to-r from-primary to-primary/40 transition-all duration-500 group-hover:w-full" />
              </motion.button>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.55, delay: 0.58, ease: 'easeOut' }}
        >
          <p className="text-muted-foreground mb-4">
            All classes available for <span className="text-primary font-bold">Premium</span> and <span className="text-primary font-bold">Elite</span> members
          </p>
        </motion.div>
      </div>

      {selectedClass && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-background/85 px-4 py-5 backdrop-blur-sm sm:px-6 sm:py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="class-modal-title"
          onClick={() => setSelectedClass(null)}
        >
          <div
            className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-border bg-card shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-[330px] sm:min-h-[300px]">
              <Image
                src={selectedClass.image}
                alt={selectedClass.title}
                fill
                sizes="(min-width: 1024px) 960px, 100vw"
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/65 to-card/15" />
              <button
                type="button"
                aria-label="Close modal"
                onClick={() => setSelectedClass(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:right-5 sm:top-5"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-8">
                <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">Class details</p>
                <h3 id="class-modal-title" className="mb-3 text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
                  {selectedClass.title}
                </h3>
                <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">{selectedClass.details}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 p-5 sm:p-6 md:p-8 lg:grid-cols-3">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <h4 className="text-xl font-black text-foreground">Weekly Schedule</h4>
                </div>
                <ul className="space-y-3">
                  {selectedClass.schedule.map((item) => (
                    <li key={item} className="rounded-lg border border-border bg-background/40 p-4 text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="mb-5 flex items-center gap-3">
                  <UserRound className="h-5 w-5 text-primary" />
                  <h4 className="text-xl font-black text-foreground">Professionals</h4>
                </div>
                <div className="space-y-4">
                  {selectedClass.professionals.map((professional) => (
                    <div key={professional.name} className="rounded-lg border border-border bg-background/40 p-4">
                      <p className="font-bold text-foreground">{professional.name}</p>
                      <p className="text-sm font-bold text-primary">{professional.role}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{professional.specialty}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-5 flex items-center gap-3">
                  <HeartPulse className="h-5 w-5 text-primary" />
                  <h4 className="text-xl font-black text-foreground">Benefits</h4>
                </div>
                <ul className="space-y-3">
                  {selectedClass.benefits.map((item) => (
                    <li key={item} className="flex items-center gap-3 rounded-lg border border-border bg-background/40 p-4 text-sm text-muted-foreground">
                      <span className="h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-border p-5 sm:p-6 md:p-8">
              <div className="flex flex-col gap-5 rounded-lg bg-background/50 p-4 sm:p-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <CalendarCheck className="h-5 w-5 text-primary" />
                    <h4 className="text-xl font-black text-foreground">Book a trial class</h4>
                  </div>
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    Send your preferred day and the team will confirm the best available time.
                  </p>
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Hi Warehouse, I want to book a trial class for ${selectedClass.title}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Book on WhatsApp
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
