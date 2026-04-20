'use client'

import Image from 'next/image'
import { ArrowUpRight, CalendarCheck, CalendarDays, Info, MessageCircle, UserRound, X } from 'lucide-react'
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
    className: 'lg:col-span-2 lg:row-span-2 lg:min-h-[520px]',
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
    className: 'lg:col-span-1 lg:min-h-[250px]',
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
    className: 'lg:col-span-1 lg:min-h-[250px]',
  },
  {
    title: 'Infrastructure',
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
    className: 'lg:col-span-2 lg:min-h-[250px]',
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
    className: 'lg:col-span-2 lg:min-h-[260px]',
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
    className: 'lg:col-span-1 lg:min-h-[260px]',
  },
]

export function Galeria() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedSpace, setSelectedSpace] = useState<(typeof spaces)[number] | null>(null)

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
    <section ref={sectionRef} id="virtual-tour" className="py-32 px-6 lg:px-12 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <span className="inline-block text-primary text-sm font-bold tracking-wider uppercase mb-4">Our Spaces</span>
            <h2 className="text-4xl lg:text-6xl font-black text-foreground text-balance">
              World-class
              <span className="text-primary ml-3">infrastructure</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md">
            Every square meter was designed to maximize your experience and results.
          </p>
        </div>

        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {spaces.map((space, idx) => (
              <div
                key={space.title}
                className={`group relative min-h-[240px] overflow-hidden rounded-lg border border-border hover:border-primary/60 transition-all duration-500 ${space.className}`}
              >
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-70 transition-all duration-700 group-hover:opacity-95 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,208,0,0.08)_0,rgba(255,208,0,0.08)_8px,transparent_8px,transparent_18px)] opacity-40" />
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-5xl lg:text-6xl font-black text-primary/35">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <button
                      type="button"
                      aria-label={`Open details about ${space.title}`}
                      onClick={() => setSelectedSpace(space)}
                      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 scale-75 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 hover:bg-primary/90 focus-visible:opacity-100 focus-visible:scale-100 focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                    </button>
                  </div>

                  <div>
                    <h3 className="text-2xl lg:text-3xl font-black text-foreground mb-3">{space.title}</h3>
                    <p className="text-muted-foreground text-sm lg:text-base font-medium">{space.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedSpace && (
        <div
          className="fixed inset-0 z-[100] bg-background/85 backdrop-blur-sm px-6 py-8 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="space-modal-title"
          onClick={() => setSelectedSpace(null)}
        >
          <div
            className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-border bg-card shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-[260px]">
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
                className="absolute right-5 top-5 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Space details</p>
                <h3 id="space-modal-title" className="text-3xl md:text-5xl font-black text-foreground mb-3">
                  {selectedSpace.title}
                </h3>
                <p className="text-foreground/80 text-lg max-w-3xl">{selectedSpace.details}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 md:p-8">
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

            <div className="border-t border-border p-6 md:p-8">
              <div className="flex flex-col gap-5 rounded-lg bg-background/50 p-5 md:flex-row md:items-center md:justify-between">
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
