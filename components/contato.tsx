'use client'

import { Phone, MapPin, Mail, Instagram, MessageCircle, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useRef, useState } from 'react'

const googleMapsUrl = 'https://www.google.com/maps/place/Warehouse+Campus+Hub/@35.9020951,14.4778616,17z/data=!3m1!4b1!4m6!3m5!1s0x130e454bf9f5fa39:0xf2dc7d7814040559!8m2!3d35.9020951!4d14.4804365!16s%2Fg%2F11sfbhflqs'
const googleMapsEmbedUrl = 'https://www.google.com/maps?q=Warehouse%20Campus%20Hub%4035.9020951,14.4804365&output=embed'
const instagramUrl = 'https://www.instagram.com/warehouse.mt/'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+31 20 123 4567',
    subtitle: 'Hours: 6am - 10pm',
    action: 'Call now'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+31 6 12 34 56 78',
    subtitle: 'Response within 2 hours',
    action: 'Send message'
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@warehouse-gym.eu',
    subtitle: 'For partnerships and inquiries',
    action: 'Send email'
  },
  {
    icon: MapPin,
    title: 'Address',
    value: 'Warehouse Campus Hub',
    subtitle: 'Malta',
    action: 'View on map'
  }
]

export function Contato() {
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
    <section ref={sectionRef} id="contact" className="py-32 px-6 lg:px-12 bg-background relative">
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary text-sm font-bold tracking-wider uppercase mb-4">Contact</span>
          <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-6 text-balance">
            Let&apos;s
            <span className="text-primary ml-3">talk?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We&apos;re ready to help you start your transformation. Get in touch through your preferred channel.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {contactInfo.map((contact, idx) => {
            const Icon = contact.icon
            return (
              <a
                key={idx}
                href={contact.title === 'Address' ? googleMapsUrl : undefined}
                target={contact.title === 'Address' ? '_blank' : undefined}
                rel={contact.title === 'Address' ? 'noreferrer' : undefined}
                className={`group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,208,0,0.1)] cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center flex-shrink-0 transition-all duration-500">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>

                  <div className="flex-1">
                    <p className="text-muted-foreground text-sm mb-1">{contact.title}</p>
                    <p className="text-xl font-bold text-foreground mb-1">{contact.value}</p>
                    <p className="text-muted-foreground text-sm">{contact.subtitle}</p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Social & Map */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Social */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Follow us</h3>
            <div className="flex gap-4">
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="group flex-1 bg-secondary hover:bg-primary rounded-xl p-6 flex items-center justify-center gap-3 transition-all duration-300">
                <Instagram className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                <span className="font-bold text-foreground group-hover:text-primary-foreground transition-colors">@warehouse.mt</span>
              </a>
              <a href="#" className="group flex-1 bg-secondary hover:bg-primary rounded-xl p-6 flex items-center justify-center gap-3 transition-all duration-300">
                <MessageCircle className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                <span className="font-bold text-foreground group-hover:text-primary-foreground transition-colors">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden min-h-[320px]">
            <iframe
              src={googleMapsEmbedUrl}
              title="Warehouse Campus Hub location"
              className="w-full h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-foreground font-bold mb-1">Warehouse Campus Hub</p>
                <p className="text-muted-foreground text-sm">Malta</p>
              </div>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href={googleMapsUrl} target="_blank" rel="noreferrer">
                  View on Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
