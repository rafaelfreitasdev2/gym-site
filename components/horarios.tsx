'use client'

import { Clock, Sparkles } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const schedule = [
  { day: 'Monday', weights: '5am - 11pm', classes: '7am, 12pm, 6pm, 8pm', combat: '7pm - 9pm' },
  { day: 'Tuesday', weights: '5am - 11pm', classes: '7am, 12pm, 6pm, 8pm', combat: '7pm - 9pm' },
  { day: 'Wednesday', weights: '5am - 11pm', classes: '7am, 12pm, 6pm, 8pm', combat: '7pm - 9pm' },
  { day: 'Thursday', weights: '5am - 11pm', classes: '7am, 12pm, 6pm, 8pm', combat: '7pm - 9pm' },
  { day: 'Friday', weights: '5am - 11pm', classes: '7am, 12pm, 6pm, 8pm', combat: '7pm - 9pm' },
  { day: 'Saturday', weights: '7am - 8pm', classes: '9am, 4pm', combat: '10am - 12pm' },
  { day: 'Sunday', weights: '8am - 6pm', classes: '10am', combat: 'Closed' },
]

export function Horarios() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useInView(sectionRef, { once: true, amount: 0.12 })

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,208,0,0.045),transparent_34%)]" />
      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          className="mb-12 text-center sm:mb-16"
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="premium-kicker mb-4 inline-block text-sm font-bold uppercase tracking-wider text-primary">Hours</span>
          <h2 className="mb-5 text-balance text-3xl font-black text-foreground sm:text-4xl lg:mb-6 lg:text-6xl">
            Your time,
            <span className="premium-metallic-text ml-2 sm:ml-3">your schedule</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Flexible hours to fit your routine. Premium and Elite members have 24-hour access.
          </p>
        </motion.div>

        {/* Schedule Table */}
        <motion.div
          className="overflow-hidden rounded-lg border border-border bg-card/90 shadow-[0_18px_50px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.03)]"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.65, delay: 0.18, ease: 'easeOut' }}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px]">
              <thead>
                <tr className="bg-primary">
                  <th className="px-6 py-4 text-left font-bold text-primary-foreground">Day</th>
                  <th className="px-6 py-4 text-left font-bold text-primary-foreground">Weight Training</th>
                  <th className="px-6 py-4 text-left font-bold text-primary-foreground">Classes</th>
                  <th className="px-6 py-4 text-left font-bold text-primary-foreground">Combat</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((s, idx) => (
                  <tr
                    key={idx}
                    className={`border-t border-border hover:bg-secondary/50 transition-colors duration-300 ${
                      idx % 2 === 0 ? 'bg-secondary/20' : ''
                    }`}
                  >
                    <td className="px-6 py-4 font-bold text-foreground">{s.day}</td>
                    <td className="px-6 py-4 text-muted-foreground">{s.weights}</td>
                    <td className="px-6 py-4 text-muted-foreground text-sm">{s.classes}</td>
                    <td className={`px-6 py-4 ${s.combat === 'Closed' ? 'text-muted-foreground/50' : 'text-muted-foreground'}`}>
                      {s.combat}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* 24/7 Banner */}
        <motion.div
          className="mt-8 flex flex-col items-start justify-center gap-4 rounded-lg border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.04)] sm:flex-row sm:items-center sm:p-6"
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, delay: 0.34, ease: 'easeOut' }}
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <Clock className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="flex items-start gap-2 font-bold text-foreground sm:items-center">
              <Sparkles className="w-4 h-4 text-primary" />
              Premium and Elite Members: 24/7 Access, 7 days a week
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Train late night, holidays, and weekends without restrictions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
