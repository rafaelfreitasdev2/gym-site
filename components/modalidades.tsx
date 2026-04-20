'use client'

import Image from 'next/image'
import { ArrowUpRight, Bike, CalendarCheck, CalendarDays, Dumbbell, Flame, HeartPulse, MessageCircle, Music, Swords, Target, UserRound, Wind, X, Zap } from 'lucide-react'
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

export function Modalidades() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedClass, setSelectedClass] = useState<(typeof classes)[number] | null>(null)

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
    <section ref={sectionRef} id="classes" className="py-28 px-6 lg:px-12 bg-background relative">
      <div className="max-w-7xl mx-auto relative">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary text-sm font-bold tracking-wider uppercase mb-4">Classes</span>
          <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-6 text-balance">
            Find your
            <span className="text-primary ml-3">passion</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From classic modalities to the latest trends, we have the perfect activity for you.
          </p>
        </div>

        <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {classes.map((cls) => {
            const Icon = cls.icon

            return (
              <button
                type="button"
                key={cls.title}
                onClick={() => setSelectedClass(cls)}
                className="group relative min-h-[360px] overflow-hidden rounded-lg border border-border bg-card text-left transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="absolute left-8 top-8 z-20 flex h-[60px] w-[60px] items-center justify-center rounded-lg bg-primary/15 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-7 w-7" strokeWidth={2.4} />
                </div>

                <div className="absolute right-8 top-8 z-20 flex h-12 w-12 translate-y-2 scale-75 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:scale-100 group-focus-visible:opacity-100">
                  <ArrowUpRight className="h-5 w-5" />
                </div>

                <div className="absolute inset-x-0 top-0 h-[58%] overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 mix-blend-screen transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-card z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-card/70 via-card/10 to-transparent z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/35 to-transparent z-10" />
                  <div className="relative h-full w-full opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90">
                    <Image
                      src={cls.image}
                      alt={cls.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 z-20 p-8">
                  <h3 className="mb-3 text-2xl font-black text-foreground">{cls.title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{cls.description}</p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-muted-foreground mb-4">
            All classes available for <span className="text-primary font-bold">Premium</span> and <span className="text-primary font-bold">Elite</span> members
          </p>
        </div>
      </div>

      {selectedClass && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-background/85 px-6 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="class-modal-title"
          onClick={() => setSelectedClass(null)}
        >
          <div
            className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-border bg-card shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-[280px]">
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
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">Class details</p>
                <h3 id="class-modal-title" className="mb-3 text-3xl font-black text-foreground md:text-5xl">
                  {selectedClass.title}
                </h3>
                <p className="max-w-3xl text-lg text-foreground/80">{selectedClass.details}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 p-6 md:p-8 lg:grid-cols-3">
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

            <div className="border-t border-border p-6 md:p-8">
              <div className="flex flex-col gap-5 rounded-lg bg-background/50 p-5 md:flex-row md:items-center md:justify-between">
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
