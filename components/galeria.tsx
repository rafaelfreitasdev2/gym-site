'use client'

import Image from 'next/image'
import { ArrowUpRight, CalendarCheck, CalendarDays, Info, MessageCircle, UserRound, X } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

const whatsappNumber = '31612345678'

const spaces = [
  {
    title: 'Weight Training Area',
    description: 'State-of-the-art Technogym equipment',
    details: 'A strength-focused floor with guided stations, progressive load zones, and space for both beginners and advanced athletes to train with confidence.',
    professionals: [
      { name: 'Marcus Vella', role: 'Strength Coach', specialty: 'Hypertrophy and free-weight technique' },
      { name: 'Elena Grech', role: 'Personal Trainer', specialty: 'Posture correction and beginner programs' },
    ],
    schedule: [
      'Mon, Wed, Fri: 7am strength fundamentals',
      'Tue, Thu: 6pm hypertrophy clinic',
      'Sat: 10am assisted lifting session',
    ],
    extras: ['Technogym stations', 'Form checks available', 'Progressive training plans'],
    image: '/images/infrastructure/weight-area.png',
    className: '',
  },
  {
    title: 'Functional Space',
    description: 'Open training zone for dynamic sessions',
    details: 'Designed for movement, speed, and coordination, this area supports circuits, mobility drills, athletic conditioning, and small-group performance sessions.',
    professionals: [
      { name: 'Sofia Borg', role: 'Functional Coach', specialty: 'Conditioning and movement quality' },
      { name: 'Daniel Azzopardi', role: 'Performance Trainer', specialty: 'Agility, balance, and endurance circuits' },
    ],
    schedule: [
      'Mon to Fri: 12pm express circuit',
      'Mon, Wed: 7pm athletic conditioning',
      'Sun: 9am mobility flow',
    ],
    extras: ['Battle ropes', 'Sled track', 'Kettlebells and mobility tools'],
    image: '/images/infrastructure/functional.png',
    className: '',
  },
  {
    title: 'Class Studios',
    description: 'Dedicated rooms for guided training',
    details: 'A controlled studio environment for group classes, technical coaching, and high-energy sessions with clear sound, lighting, and instructor visibility.',
    professionals: [
      { name: 'Mia Caruana', role: 'Class Instructor', specialty: 'Pilates, tone, and mobility' },
      { name: 'Andre Pace', role: 'Group Coach', specialty: 'HIIT and full-body class programming' },
    ],
    schedule: [
      'Daily: 8am morning tone',
      'Tue, Thu: 6:30pm HIIT studio',
      'Sat: 11am posture and core',
    ],
    extras: ['Small-group format', 'Beginner-friendly options', 'Controlled lighting and sound'],
    image: '/images/infrastructure/class-studio.png',
    className: '',
  },
  {
    title: 'Combat Area',
    description: 'A complete performance environment',
    details: 'A complete support area connecting the training floor, coaching points, recovery zones, and premium amenities into one smooth member experience.',
    professionals: [
      { name: 'Noah Camilleri', role: 'Floor Coordinator', specialty: 'Member flow and equipment support' },
      { name: 'Lea Micallef', role: 'Wellness Advisor', specialty: 'Routine planning and recovery guidance' },
    ],
    schedule: [
      'Mon to Fri: 9am facility orientation',
      'Wed: 5pm recovery planning desk',
      'Sat: 12pm member onboarding tour',
    ],
    extras: ['Guided onboarding', 'Recovery support', 'Premium member assistance'],
    image: '/images/infrastructure/combat.png',
    className: '',
  },
  {
    title: 'Spinning Studio',
    description: 'High-energy cycling experience',
    details: 'A focused ride room with immersive pacing, music-led intervals, and coaching for endurance, fat burn, and lower-body power.',
    professionals: [
      { name: 'Clara Zammit', role: 'Ride Coach', specialty: 'Endurance rides and rhythm intervals' },
      { name: 'Tom Ellis', role: 'Cycling Instructor', specialty: 'Power climbs and sprint programming' },
    ],
    schedule: [
      'Mon, Wed, Fri: 6:30am sunrise ride',
      'Tue, Thu: 7pm power climb',
      'Sat: 9am 45-minute endurance ride',
    ],
    extras: ['Reserved bikes', 'Music-led intervals', 'Beginner setup support'],
    image: '/images/infrastructure/spinning.png',
    className: '',
  },
  {
    title: 'Premium Lounge',
    description: 'Recovery, comfort, and support spaces',
    details: 'A calm area for post-workout recovery, quick planning sessions, hydration, and a smoother transition back into the day.',
    professionals: [
      { name: 'Isabella Fenech', role: 'Recovery Specialist', specialty: 'Stretch routines and recovery habits' },
      { name: 'Owen Galea', role: 'Member Experience Lead', specialty: 'Plan support and premium services' },
    ],
    schedule: [
      'Daily: 8am to 10pm lounge access',
      'Mon, Thu: 5pm recovery check-in',
      'Sat: 1pm nutrition quick consults',
    ],
    extras: ['Hydration station', 'Recovery guidance', 'Quiet planning area'],
    image: '/images/infrastructure/premium.png',
    className: '',
  },
]

export function Galeria() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useInView(sectionRef, { once: true, amount: 0.12 })
  const [selectedSpace, setSelectedSpace] = useState<(typeof spaces)[number] | null>(null)

  useEffect(() => {
    if (!selectedSpace) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedSpace(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedSpace])

  return (
    <section ref={sectionRef} id="virtual-tour" className="relative overflow-hidden bg-secondary/30 px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,208,0,0.32),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_12%,rgba(255,208,0,0.055),transparent_34%),radial-gradient(circle_at_82%_78%,rgba(255,208,0,0.045),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-12 flex flex-col gap-5 sm:mb-16 lg:flex-row lg:items-end lg:justify-between lg:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <span className="premium-kicker mb-4 inline-block text-sm font-bold uppercase tracking-wider text-primary">Our Spaces</span>
            <h2 className="text-balance text-3xl font-black text-foreground sm:text-4xl lg:text-6xl">
              World-class
              <span className="premium-metallic-text ml-2 sm:ml-3">infrastructure</span>
            </h2>
          </div>
          <motion.p
            className="max-w-md text-base text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
            animate={isVisible ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 14, filter: 'blur(8px)' }}
            transition={{ duration: 0.65, delay: 0.16, ease: 'easeOut' }}
          >
            Every square meter was designed to maximize your experience and results.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.09,
                delayChildren: 0.24,
              },
            },
          }}
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {spaces.map((space, idx) => (
              <motion.button
                type="button"
                key={space.title}
                aria-label={`Open details about ${space.title}`}
                onClick={() => setSelectedSpace(space)}
                className={`group relative min-h-[280px] cursor-pointer overflow-hidden rounded-lg border border-border bg-card text-left shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-all duration-500 hover:border-primary/55 hover:shadow-[0_24px_70px_rgba(0,0,0,0.34),0_0_42px_rgba(255,208,0,0.09),inset_0_1px_0_rgba(255,255,255,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-h-[300px] ${space.className}`}
                variants={{
                  hidden: { opacity: 0, y: 34 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
              >
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/42 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,208,0,0.16),transparent_36%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 rounded-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(255,208,0,0.12)]" />

                <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6 lg:p-8">
                  <div className="flex min-h-14 items-start justify-between gap-4">
                    <span className="font-mono text-4xl font-black leading-none text-primary/70 drop-shadow-[0_0_18px_rgba(255,208,0,0.18)] sm:text-5xl lg:text-6xl">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary text-primary-foreground shadow-[0_0_24px_rgba(255,208,0,0.18)] transition-all duration-300 sm:h-12 sm:w-12 lg:translate-y-2 lg:scale-90 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:scale-100 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:scale-100 lg:group-focus-visible:opacity-100"
                    >
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5" />
                    </span>
                  </div>

                  <div className="max-w-[92%]">
                    <h3 className="mb-3 text-xl font-black leading-tight text-foreground drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)] sm:text-2xl lg:text-3xl">{space.title}</h3>
                    <p className="text-sm font-medium leading-relaxed text-foreground/75 lg:text-base">{space.description}</p>
                  </div>
                </div>

                <span className="pointer-events-none absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {selectedSpace && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-background/85 px-4 py-5 backdrop-blur-sm sm:px-6 sm:py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="space-modal-title"
          onClick={() => setSelectedSpace(null)}
        >
          <div
            className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-border bg-card shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-[320px] sm:min-h-[300px]">
              <Image
                src={selectedSpace.image}
                alt={selectedSpace.title}
                fill
                sizes="(min-width: 1024px) 960px, 100vw"
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/65 to-card/15" />
              <button
                type="button"
                aria-label="Close modal"
                onClick={() => setSelectedSpace(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground sm:right-5 sm:top-5"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-8">
                <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Space details</p>
                <h3 id="space-modal-title" className="mb-3 text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
                  {selectedSpace.title}
                </h3>
                <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">{selectedSpace.details}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 p-5 sm:p-6 md:p-8 lg:grid-cols-3">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <UserRound className="w-5 h-5 text-primary" />
                  <h4 className="text-xl font-black text-foreground">Professionals</h4>
                </div>
                <div className="space-y-4">
                  {selectedSpace.professionals.map((professional) => (
                    <div key={professional.name} className="rounded-lg border border-border bg-background/40 p-4">
                      <p className="font-bold text-foreground">{professional.name}</p>
                      <p className="text-primary text-sm font-bold">{professional.role}</p>
                      <p className="text-muted-foreground text-sm mt-2">{professional.specialty}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  <h4 className="text-xl font-black text-foreground">Schedule</h4>
                </div>
                <ul className="space-y-3">
                  {selectedSpace.schedule.map((item) => (
                    <li key={item} className="rounded-lg border border-border bg-background/40 p-4 text-muted-foreground text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <Info className="w-5 h-5 text-primary" />
                  <h4 className="text-xl font-black text-foreground">Good to know</h4>
                </div>
                <ul className="space-y-3">
                  {selectedSpace.extras.map((item) => (
                    <li key={item} className="flex items-center gap-3 rounded-lg border border-border bg-background/40 p-4 text-muted-foreground text-sm">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
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
                    <h4 className="text-xl font-black text-foreground">Schedule a visit</h4>
                  </div>
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    Choose a time with the team and see this space before your first workout.
                  </p>
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Hi Warehouse, I want to schedule a visit for ${selectedSpace.title}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Schedule on WhatsApp
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
