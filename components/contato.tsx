'use client'

import { Phone, MapPin, Mail, Instagram, MessageCircle, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

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
  const isVisible = useInView(sectionRef, { once: true, amount: 0.12 })

  return (
    <section ref={sectionRef} id="contact" className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-[-6rem] h-72 w-72 rounded-full bg-primary/5 blur-3xl sm:right-0 sm:h-96 sm:w-96" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="mb-12 text-center sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="premium-kicker mb-4 inline-block text-sm font-bold uppercase tracking-wider text-primary">Contact</span>
          <h2 className="mb-5 text-balance text-3xl font-black text-foreground sm:text-4xl lg:mb-6 lg:text-6xl">
            Let&apos;s
            <span className="premium-metallic-text ml-2 sm:ml-3">talk?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            We&apos;re ready to help you start your transformation. Get in touch through your preferred channel.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {contactInfo.map((contact, idx) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={idx}
                href={contact.title === 'Address' ? googleMapsUrl : undefined}
                target={contact.title === 'Address' ? '_blank' : undefined}
                rel={contact.title === 'Address' ? 'noreferrer' : undefined}
                className="group cursor-pointer rounded-lg border border-border bg-card/90 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-500 hover:border-primary/50 hover:shadow-[0_24px_64px_rgba(0,0,0,0.24),0_0_42px_rgba(255,208,0,0.08)] sm:p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-500 group-hover:bg-primary group-hover:shadow-[0_0_30px_rgba(255,208,0,0.32)] sm:h-14 sm:w-14">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-muted-foreground text-sm mb-1">{contact.title}</p>
                    <p className="mb-1 break-words text-lg font-bold text-foreground sm:text-xl">{contact.value}</p>
                    <p className="text-muted-foreground text-sm">{contact.subtitle}</p>
                  </div>

                  <div className="hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                      <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Social & Map */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Social */}
          <div className="rounded-lg border border-border bg-card/90 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Follow us</h3>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="group flex flex-1 items-center justify-center gap-3 rounded-lg bg-secondary p-5 transition-all duration-300 hover:bg-primary sm:p-6">
                <Instagram className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                <span className="font-bold text-foreground transition-colors group-hover:text-primary-foreground">@warehouse.mt</span>
              </a>
              <a href="#" className="group flex flex-1 items-center justify-center gap-3 rounded-lg bg-secondary p-5 transition-all duration-300 hover:bg-primary sm:p-6">
                <MessageCircle className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                <span className="font-bold text-foreground group-hover:text-primary-foreground transition-colors">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="min-h-[320px] overflow-hidden rounded-lg border border-border bg-card/90 shadow-[0_18px_50px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.03)]">
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
