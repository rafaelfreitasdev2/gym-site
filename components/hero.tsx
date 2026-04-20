'use client'

import Image from 'next/image'
import { ArrowRight, Play, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import { AnimatedNumber } from '@/components/animated-number'

const whatsappNumber = '31612345678'
const bookTourMessage = encodeURIComponent('Hi Warehouse, I want to book a free tour.')
const startNowMessage = encodeURIComponent('Hi Warehouse, I want to start now and book my first free class.')

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,208,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,208,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Navigation */}
      <nav className={`relative z-50 flex items-center justify-between px-6 lg:px-12 py-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src="/logo.png"
              alt="Warehouse Gym"
              width={56}
              height={56}
              className="h-14 w-14"
            />
          </div>
          <span className="text-2xl font-bold text-foreground tracking-tight">WAREHOUSE</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">Features</a>
          <a href="#classes" className="text-muted-foreground hover:text-primary transition-colors font-medium">Classes</a>
          <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors font-medium">Pricing</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">Contact</a>
        </div>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${bookTourMessage}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Book a Tour
        </a>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-12 lg:pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-medium">Premium Gym in Europe</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-black text-foreground leading-[1.1] tracking-tight text-balance">
              Push Your
              <span className="relative inline-block ml-3">
                <span className="text-primary">Limits</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="#FFD000" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              More than a gym. A complete transformation ecosystem with cutting-edge equipment, elite professionals, and a community that inspires.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${startNowMessage}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-auto items-center justify-center rounded-md bg-primary px-8 py-6 text-lg font-bold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_40px_rgba(255,208,0,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Start Now
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#virtual-tour"
                className="group inline-flex h-auto items-center justify-center rounded-md border-2 border-border bg-background/20 px-8 py-6 text-lg font-bold text-foreground transition-all duration-300 hover:border-primary hover:bg-background/70 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Play className="mr-2 w-5 h-5" />
                Virtual Tour
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-8">
              <div className="group">
                <p className="text-4xl font-black text-primary group-hover:scale-110 transition-transform">
                  <AnimatedNumber value={500} start={isVisible} suffix="+" />
                </p>
                <p className="text-muted-foreground text-sm mt-1 font-medium">Active Members</p>
              </div>
              <div className="group">
                <p className="text-4xl font-black text-primary group-hover:scale-110 transition-transform">
                  <AnimatedNumber value={15} start={isVisible} />
                </p>
                <p className="text-muted-foreground text-sm mt-1 font-medium">Years of Experience</p>
              </div>
              <div className="group">
                <p className="text-4xl font-black text-primary group-hover:scale-110 transition-transform">
                  <AnimatedNumber value={35} start={isVisible} suffix="+" />
                </p>
                <p className="text-muted-foreground text-sm mt-1 font-medium">Professionals</p>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* Main Visual */}
            <div className="relative">
              {/* Glowing Ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full border-2 border-primary/30 animate-pulse-glow" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border border-primary/20" />
              </div>

              {/* Center Logo */}
              <div className="relative flex items-center justify-center h-[400px] lg:h-[500px]">
                <div className="relative w-48 h-48 lg:w-64 lg:h-64 animate-float">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-full blur-2xl opacity-30" />
                  <div className="relative w-full h-full bg-card rounded-full border-4 border-primary flex items-center justify-center shadow-2xl">
                    <span className="text-7xl lg:text-8xl font-black text-primary">W</span>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-8 right-8 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
                  <p className="text-sm font-bold text-foreground">Equipment</p>
                  <p className="text-primary font-black text-lg">Technogym</p>
                </div>

                <div className="absolute bottom-16 left-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                  <p className="text-sm font-bold text-foreground">Environment</p>
                  <p className="text-primary font-black text-lg">Climate-Controlled</p>
                </div>

                <div className="absolute top-1/2 -right-4 bg-primary rounded-2xl px-4 py-3 shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
                  <p className="text-sm font-bold text-primary-foreground">Classes</p>
                  <p className="text-primary-foreground font-black text-lg">
                    <AnimatedNumber value={80} start={isVisible} suffix="+" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <a href="#virtual-tour" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm font-medium">Explore</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}
