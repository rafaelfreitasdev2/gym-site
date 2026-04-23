import Image from 'next/image'
import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react'

const instagramUrl = 'https://www.instagram.com/warehouse.mt/'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/95 px-4 py-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:px-6 sm:py-16 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 grid grid-cols-1 gap-10 border-b border-border pb-10 sm:mb-12 sm:gap-12 sm:pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo-mark-transparent.png"
                alt="Warehouse"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-bold text-foreground tracking-tight">WAREHOUSE</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Premium gym in Europe. 15 years transforming lives through high-performance fitness.
            </p>
            <div className="flex gap-3">
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary transition-all duration-300 hover:border-primary/50 hover:bg-primary hover:shadow-[0_0_24px_rgba(255,208,0,0.22)]">
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a href="#" className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary transition-all duration-300 hover:border-primary/50 hover:bg-primary hover:shadow-[0_0_24px_rgba(255,208,0,0.22)]">
                <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Navigation</h4>
            <ul className="space-y-3">
              {['Features', 'Classes', 'Pricing', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {['Weight Training', 'Group Classes', 'Personal Training', 'Nutritionist', 'Fitness Assessment'].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground text-sm font-medium">+31 20 123 4567</p>
                  <p className="text-muted-foreground text-xs">Mon-Sun: 6am-10pm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground text-sm font-medium">Warehouse Campus Hub</p>
                  <p className="text-muted-foreground text-xs">Malta</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground text-sm font-medium">info@warehouse-gym.eu</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="grid grid-cols-1 items-center gap-5 text-center md:grid-cols-3 md:text-left">
          <p className="text-muted-foreground text-sm">
            &copy; 2024 Warehouse Gym. All rights reserved.
          </p>

          <a
            href="https://port2-gules.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 justify-self-center rounded-md border border-border bg-background/40 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <span>Developed by</span>
            <span className="font-bold text-primary">rafaeldev</span>
          </a>

          <div className="flex flex-wrap justify-center gap-4 text-sm sm:gap-6 md:justify-end">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
