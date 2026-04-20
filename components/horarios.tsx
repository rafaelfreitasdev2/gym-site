'use client'

import { Clock, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

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
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <section ref={sectionRef} className="py-32 px-6 lg:px-12 bg-background relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary text-sm font-bold tracking-wider uppercase mb-4">Hours</span>
          <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-6 text-balance">
            Your time,
            <span className="text-primary ml-3">your schedule</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Flexible hours to fit your routine. Premium and Elite members have 24-hour access.
          </p>
        </div>

        {/* Schedule Table */}
        <div className={`bg-card border border-border rounded-2xl overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="overflow-x-auto">
            <table className="w-full">
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
        </div>

        {/* 24/7 Banner */}
        <div className={`mt-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/30 rounded-2xl p-6 flex items-center justify-center gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
            <Clock className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-foreground font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Premium and Elite Members: 24/7 Access, 7 days a week
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Train late night, holidays, and weekends without restrictions
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
