'use client'

import Image from 'next/image'
import { MessageCircle, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatedNumber } from '@/components/animated-number'

const whatsappNumber = '31612345678'

const products = [
  {
    id: 'whey-gold',
    name: 'Whey Protein Gold',
    price: 45,
    category: 'Supplement',
    description: 'High-protein support for recovery and muscle growth.',
    image: '/images/suplementos/whey.png',
  },
  {
    id: 'instant-bcaa',
    name: 'Instant BCAA',
    price: 32,
    category: 'Supplement',
    description: 'Amino support for intense sessions and recovery.',
    image: '/images/suplementos/BCAA.png',
  },
  {
    id: 'pure-creatine',
    name: 'Pure Creatine',
    price: 25,
    category: 'Supplement',
    description: 'Daily strength, power, and performance support.',
    image: '/images/suplementos/creatine.png',
  },
  {
    id: 'performance-tee',
    name: 'Performance Tee',
    price: 35,
    category: 'Apparel',
    description: 'Light training tee made for daily workouts.',
    image: '/images/suplementos/tea.png',
  },
  {
    id: 'dry-fit-shorts',
    name: 'Dry-Fit Shorts',
    price: 40,
    category: 'Apparel',
    description: 'Breathable shorts for lifting, cardio, and classes.',
    image: '/images/suplementos/dryfit.png',
  },
  {
    id: 'warehouse-backpack',
    name: 'Warehouse Backpack',
    price: 55,
    category: 'Accessory',
    description: 'Training backpack with room for daily essentials.',
    image: '/images/suplementos/backpack.png',
  },
]

type Cart = Record<string, number>

export function Produtos() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [cart, setCart] = useState<Cart>({})

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
    <section ref={sectionRef} className="relative bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-12 flex flex-col gap-5 transition-all duration-700 sm:mb-16 lg:flex-row lg:items-end lg:justify-between lg:gap-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <span className="inline-block text-primary text-sm font-bold tracking-wider uppercase mb-4">Warehouse Shop</span>
            <h2 className="text-3xl font-black text-foreground text-balance sm:text-4xl lg:text-6xl">
              Boost your
              <span className="ml-2 text-primary sm:ml-3">results</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Supplements, apparel, and daily essentials ready to reserve before your next session.
            </p>
          </div>

          <div className="w-full rounded-lg border border-border bg-card px-5 py-4 sm:w-fit">
            <p className="text-sm font-bold text-muted-foreground">Cart</p>
            <p className="text-2xl font-black text-primary">
              {cartCount} {cartCount === 1 ? 'item' : 'items'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className={`grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {products.map((product) => {
              const quantity = cart[product.id] ?? 0

              return (
                <article
                  key={product.id}
                  className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.32)]"
                >
                  <div className="absolute left-5 top-5 z-20 w-fit rounded-full bg-background/80 px-4 py-2 text-sm font-bold text-primary backdrop-blur-sm">
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

                    <div className="flex flex-col gap-4 min-[420px]:flex-row min-[420px]:items-end min-[420px]:justify-between">
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
                  </div>
                </article>
              )
            })}
          </div>

          <aside className={`h-fit rounded-lg border border-border bg-card p-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
          </aside>
        </div>
      </div>
    </section>
  )
}
