'use client'

import { useEffect, useRef, useState } from 'react'

type AnimatedNumberProps = {
  value: number
  start?: boolean
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  delay?: number
  className?: string
  minimumIntegerDigits?: number
  formatter?: (value: string) => string
}

export function AnimatedNumber({
  value,
  start = true,
  duration = 1200,
  decimals = 0,
  prefix = '',
  suffix = '',
  delay = 0,
  className,
  minimumIntegerDigits,
  formatter,
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!start || hasAnimated.current) {
      return
    }

    hasAnimated.current = true

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(value)
      return
    }

    let animationFrame = 0
    let delayTimeout = 0
    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp
      }

      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)

      setDisplayValue(value * easedProgress)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    delayTimeout = window.setTimeout(() => {
      animationFrame = requestAnimationFrame(animate)
    }, delay)

    return () => {
      window.clearTimeout(delayTimeout)
      cancelAnimationFrame(animationFrame)
    }
  }, [delay, duration, start, value])

  const formattedValue = displayValue.toLocaleString('en-US', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
    minimumIntegerDigits,
  })

  const outputValue = formatter ? formatter(formattedValue) : `${prefix}${formattedValue}${suffix}`

  return (
    <span className={className}>
      {outputValue}
    </span>
  )
}
