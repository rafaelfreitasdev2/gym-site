'use client'

import Image from 'next/image'
import { Info, MessageCircle, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, useInView } from 'motion/react'
import { useMemo, useRef, useState } from 'react'
import { AnimatedNumber } from '@/components/animated-number'

const whatsappNumber = '31612345678'

const products = [
  {
    id: 'whey-gold',
    name: 'Whey Protein Gold',
    price: 45,
    category: 'Supplement',
    description: 'High-protein support for recovery and muscle growth.',
    purpose: 'Designed to support daily protein intake after training or between meals.',
    idealFor: 'Post-workout recovery, lean muscle support, and busy training days.',
    benefits: ['Smooth daily protein support', 'Helps recovery after strength sessions', 'Easy to keep in your gym routine'],
    specs: [
      { label: 'Flavor', value: 'Chocolate' },
      { label: 'Type', value: 'Whey protein blend' },
      { label: 'Focus', value: 'Recovery and muscle support' },
    ],
    image: '/images/suplementos/whey.png',
  },
  {
    id: 'instant-bcaa',
    name: 'Instant BCAA',
    price: 32,
    category: 'Supplement',
    description: 'Amino support for intense sessions and recovery.',
    purpose: 'A light amino drink for training days when you want extra support without feeling heavy.',
    idealFor: 'HIIT, combat, spinning, and long conditioning sessions.',
    benefits: ['Supports endurance-focused sessions', 'Easy to sip around workouts', 'Good fit for high-frequency training'],
    specs: [
      { label: 'Flavor', value: 'Citrus' },
      { label: 'Type', value: 'Instant BCAA' },
      { label: 'Focus', value: 'Training endurance' },
    ],
    image: '/images/suplementos/BCAA.png',
  },
  {
    id: 'pure-creatine',
    name: 'Pure Creatine',
    price: 25,
    category: 'Supplement',
    description: 'Daily strength, power, and performance support.',
    purpose: 'A simple daily performance staple for strength, power, and progressive training.',
    idealFor: 'Weight training, hypertrophy blocks, and performance-focused routines.',
    benefits: ['Supports strength output', 'Works well in daily routines', 'No complicated timing required'],
    specs: [
      { label: 'Type', value: 'Pure creatine' },
      { label: 'Use', value: 'Daily performance support' },
      { label: 'Focus', value: 'Strength and power' },
    ],
    image: '/images/suplementos/creatine.png',
  },
  {
    id: 'performance-tee',
    name: 'Performance Tee',
    price: 35,
    category: 'Apparel',
    description: 'Light training tee made for daily workouts.',
    purpose: 'A clean everyday training tee built for lifting, cardio, and classes.',
    idealFor: 'Daily gym sessions and comfortable casual wear after training.',
    benefits: ['Lightweight feel', 'Easy movement through workouts', 'Minimal premium Warehouse look'],
    specs: [
      { label: 'Material', value: 'Performance cotton blend' },
      { label: 'Fit', value: 'Athletic regular fit' },
      { label: 'Feel', value: 'Light and breathable' },
    ],
    image: '/images/suplementos/tea.png',
  },
  {
    id: 'dry-fit-shorts',
    name: 'Dry-Fit Shorts',
    price: 40,
    category: 'Apparel',
    description: 'Breathable shorts for lifting, cardio, and classes.',
    purpose: 'Training shorts made to move easily through strength work and conditioning.',
    idealFor: 'Leg day, functional training, cardio, and warm-weather sessions.',
    benefits: ['Breathable during hard sessions', 'Comfortable range of motion', 'Quick everyday gym utility'],
    specs: [
      { label: 'Material', value: 'Dry-fit performance fabric' },
      { label: 'Fit', value: 'Flexible training fit' },
      { label: 'Use', value: 'Lifting and cardio' },
    ],
    image: '/images/suplementos/dryfit.png',
  },
  {
    id: 'warehouse-backpack',
    name: 'Warehouse Backpack',
    price: 55,
    category: 'Accessory',
    description: 'Training backpack with room for daily essentials.',
    purpose: 'A practical gym backpack for carrying training gear, clothes, and daily essentials.',
    idealFor: 'Members who train before work, after work, or move through the day with gym gear.',
    benefits: ['Organizes everyday training items', 'Durable enough for daily use', 'Clean look for gym and commute'],
    specs: [
      { label: 'Capacity', value: 'Daily gym carry' },
      { label: 'Compartments', value: 'Main gear and small essentials' },
      { label: 'Use', value: 'Gym, commute, travel' },
    ],
    image: '/images/suplementos/backpack.png',
  },
]

type Cart = Record<string, number>
type Product = (typeof products)[number]

export function Produtos() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useInView(sectionRef, { once: true, amount: 0.12 })
  const [cart, setCart] = useState<Cart>({})
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const cartItems = useMemo(
    () =>
      products
        .map((product) => ({
          ...product,
          quantity: cart[product.id] ?? 0,
        }))
        .filter((product) => product.quantity > 0),
    [cart]
  )

  const cartCount = cartItems.reduce((total, product) => total + product.quantity, 0)
  const cartTotal = cartItems.reduce((total, product) => total + product.price * product.quantity, 0)

  const addToCart = (productId: string) => {
    setCart((current) => ({
      ...current,
      [productId]: (current[productId] ?? 0) + 1,
    }))
  }

  const removeFromCart = (productId: string) => {
    setCart((current) => {
      const quantity = current[productId] ?? 0

      if (quantity <= 1) {
        const next = { ...current }
        delete next[productId]
        return next
      }

      return {
        ...current,
        [productId]: quantity - 1,
      }
    })
  }

  const clearCart = () => {
    setCart({})
  }

  const checkoutMessage = encodeURIComponent(
    cartItems.length
      ? `Hi Warehouse, I want to reserve these products:\n\n${cartItems
          .map((product) => `${product.quantity}x ${product.name} - EUR ${product.price * product.quantity}`)
          .join('\n')}\n\nTotal: EUR ${cartTotal}`
      : 'Hi Warehouse, I want to know more about the products.'
  )

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,208,0,0.045),transparent_34%)]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-12 flex flex-col gap-5 sm:mb-16 lg:flex-row lg:items-end lg:justify-between lg:gap-6"
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <span className="premium-kicker mb-4 inline-block text-sm font-bold uppercase tracking-wider text-primary">Warehouse Shop</span>
            <h2 className="text-balance text-3xl font-black text-foreground sm:text-4xl lg:text-6xl">
              Boost your
              <span className="premium-metallic-text ml-2 sm:ml-3">results</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Supplements, apparel, and daily essentials ready to reserve before your next session.
            </p>
          </div>

          <div className="w-full rounded-lg border border-border bg-card/90 px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.03)] sm:w-fit">
            <p className="text-sm font-bold text-muted-foreground">Cart</p>
            <p className="text-2xl font-black text-primary">
              {cartCount} {cartCount === 1 ? 'item' : 'items'}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_360px]">
          <motion.div
            className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
            }}
          >
            {products.map((product) => {
              const quantity = cart[product.id] ?? 0

              return (
                <motion.article
                  key={product.id}
                  className="group relative overflow-hidden rounded-lg border border-border bg-card/90 shadow-[0_18px_50px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-500 hover:border-primary/55 hover:shadow-[0_24px_64px_rgba(0,0,0,0.28),0_0_42px_rgba(255,208,0,0.08)]"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
                  }}
                  whileHover={{ y: -6 }}
                >
                  <div className="premium-shine-badge absolute left-5 top-5 z-20 w-fit overflow-hidden rounded-full border border-primary/20 bg-background/80 px-4 py-2 text-sm font-bold text-primary backdrop-blur-sm">
                    {product.category}
                  </div>

                  <div className="relative h-48 overflow-hidden sm:h-[210px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="mb-2 text-xl font-black text-foreground sm:text-2xl">{product.name}</h3>
                    <p className="mb-6 min-h-[48px] text-sm leading-relaxed text-muted-foreground">{product.description}</p>

                    <div className="mb-5 flex flex-col gap-4 min-[420px]:flex-row min-[420px]:items-end min-[420px]:justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Price</p>
                        <p className="text-3xl font-black text-primary sm:text-4xl">
                          <AnimatedNumber value={product.price} start={isVisible} prefix="EUR " />
                        </p>
                      </div>

                      {quantity > 0 ? (
                        <div className="flex items-center gap-2 rounded-lg border border-border bg-background/70 p-1">
                          <button
                            type="button"
                            aria-label={`Remove ${product.name}`}
                            onClick={() => removeFromCart(product.id)}
                            className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-6 text-center font-black text-foreground">{quantity}</span>
                          <button
                            type="button"
                            aria-label={`Add another ${product.name}`}
                            onClick={() => addToCart(product.id)}
                            className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <Button onClick={() => addToCart(product.id)} className="bg-primary text-primary-foreground hover:bg-primary/90">
                          Add
                          <ShoppingBag className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      className="group/details flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background/40 px-4 py-2.5 text-sm font-bold text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-background/70 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      View details
                      <Info className="h-4 w-4 transition-transform duration-300 group-hover/details:scale-110" />
                    </button>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>

          <motion.aside
            className="h-fit rounded-lg border border-border bg-card/90 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.03)]"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.28, ease: 'easeOut' }}
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-primary">Simple cart</p>
                <h3 className="text-2xl font-black text-foreground">Reserve products</h3>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <ShoppingBag className="h-6 w-6" />
              </div>
            </div>

            {cartItems.length > 0 ? (
              <div className="space-y-4">
                {cartItems.map((product) => (
                  <div key={product.id} className="flex items-center gap-3 rounded-lg border border-border bg-background/40 p-3 sm:gap-4">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-background">
                      <Image src={product.image} alt={product.name} fill sizes="64px" className="object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-bold text-foreground">{product.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {product.quantity} x EUR {product.price}
                      </p>
                    </div>
                    <p className="shrink-0 text-sm font-black text-primary sm:text-base">EUR {product.price * product.quantity}</p>
                  </div>
                ))}

                <div className="border-t border-border pt-5">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-bold text-foreground">Total</span>
                    <span className="text-2xl font-black text-primary sm:text-3xl">EUR {cartTotal}</span>
                  </div>

                  <Button asChild className="mb-3 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href={`https://wa.me/${whatsappNumber}?text=${checkoutMessage}`} target="_blank" rel="noreferrer">
                      Reserve via WhatsApp
                      <MessageCircle className="h-4 w-4" />
                    </a>
                  </Button>

                  <button
                    type="button"
                    onClick={clearCart}
                    className="flex w-full items-center justify-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-bold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Trash2 className="h-4 w-4" />
                    Clear cart
                  </button>
                </div>
              </div>
            ) : (
              <div className="rounded-lg border border-dashed border-border bg-background/30 p-6 text-center">
                <p className="mb-2 font-bold text-foreground">Your cart is empty</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Add products and send the reservation to the team in one message.
                </p>
              </div>
            )}

            <div className="mt-6 rounded-lg bg-background/50 p-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-primary">Elite</span> members get{' '}
                <span className="font-bold text-primary">
                  <AnimatedNumber value={15} start={isVisible} suffix="%" />
                </span>{' '}
                off all products at pickup.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>

      {selectedProduct && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-y-auto bg-background/85 px-4 py-5 backdrop-blur-sm sm:px-6 sm:py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
          onClick={() => setSelectedProduct(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative mx-auto flex max-w-4xl flex-col overflow-hidden rounded-lg border border-border bg-card shadow-[0_30px_90px_rgba(0,0,0,0.48),0_0_50px_rgba(255,208,0,0.08)] md:grid md:grid-cols-[0.92fr_1.08fr]"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <div className="relative min-h-[280px] bg-background md:min-h-full">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                sizes="(min-width: 768px) 380px, 100vw"
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              <div className="premium-shine-badge absolute left-5 top-5 overflow-hidden rounded-full border border-primary/20 bg-background/80 px-4 py-2 text-sm font-bold text-primary backdrop-blur-sm">
                {selectedProduct.category}
              </div>
            </div>

            <div className="relative p-5 sm:p-7 md:p-8">
              <button
                type="button"
                aria-label="Close product details"
                onClick={() => setSelectedProduct(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="pr-12">
                <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">Product details</p>
                <h3 id="product-modal-title" className="mb-3 text-3xl font-black text-foreground sm:text-4xl">
                  {selectedProduct.name}
                </h3>
                <p className="mb-5 text-base leading-relaxed text-foreground/78">
                  {selectedProduct.purpose}
                </p>
              </div>

              <div className="mb-6 rounded-lg border border-border bg-background/45 p-4">
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">Ideal for</p>
                <p className="text-sm leading-relaxed text-foreground/82">{selectedProduct.idealFor}</p>
              </div>

              <div className="mb-6 grid gap-3 sm:grid-cols-3">
                {selectedProduct.specs.map((spec) => (
                  <div key={spec.label} className="rounded-lg border border-border bg-background/35 p-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{spec.label}</p>
                    <p className="mt-1 text-sm font-bold text-foreground">{spec.value}</p>
                  </div>
                ))}
              </div>

              <div className="mb-7">
                <p className="mb-3 text-sm font-bold text-foreground">Key benefits</p>
                <ul className="space-y-2">
                  {selectedProduct.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4 rounded-lg border border-border bg-background/45 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Price</p>
                  <p className="text-3xl font-black text-primary">EUR {selectedProduct.price}</p>
                </div>
                <Button
                  onClick={() => {
                    addToCart(selectedProduct.id)
                    setSelectedProduct(null)
                  }}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Add to cart
                  <ShoppingBag className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
