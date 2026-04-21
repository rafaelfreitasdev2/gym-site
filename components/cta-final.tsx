'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const whatsappNumber = '31612345678'
const bookTourMessage = encodeURIComponent('Hi Warehouse, I want to book a free tour.')
const whatsappMessage = encodeURIComponent('Hi Warehouse, I want more information about memberships and the first free class.')

export function CTAFinal() {
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
    <section ref={sectionRef} className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-[-5rem] top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float sm:left-1/4 sm:h-96 sm:w-96" />
        <div className="absolute bottom-0 right-[-5rem] h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float sm:right-1/4 sm:h-96 sm:w-96" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,208,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,208,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-4xl mx-auto relative">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">First class 100% free</span>
          </div>

          {/* Headline */}
          <h2 className="mb-5 text-3xl font-black leading-[1.1] text-foreground text-balance sm:text-4xl md:text-6xl lg:mb-6 lg:text-7xl">
            Your transformation
            <span className="block text-primary">starts now</span>
          </h2>

          {/* Subheadline */}
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mb-10 lg:text-xl">
            Don&apos;t put off until tomorrow what can change your life today. Book your free tour and discover why we&apos;re the top-rated gym in Europe.
          </p>

          {/* CTAs */}
          <div className="mb-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:mb-12">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${bookTourMessage}`}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-auto items-center justify-center rounded-md bg-primary px-6 py-4 text-base font-bold text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-[0_0_60px_rgba(255,208,0,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-10 sm:py-7 sm:text-lg"
            >
              Book a Free Tour
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-auto items-center justify-center rounded-md border-2 border-border bg-background/20 px-6 py-4 text-base font-bold text-foreground transition-all duration-300 hover:border-primary hover:bg-background/70 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-10 sm:py-7 sm:text-lg"
            >
              Message on WhatsApp
            </a>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              No obligation
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Cancel anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
