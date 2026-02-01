import { useEffect, useRef, useState } from 'react'

interface UseCountUpOptions {
  end: number
  duration?: number
  decimals?: number
  onComplete?: () => void
}

export function useCountUp({ end, duration = 1200, decimals = 0, onComplete }: UseCountUpOptions) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  // Intersection Observer to detect when element is visible
  useEffect(() => {
    const element = elementRef.current
    if (!element || hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true) // Ensure animation runs only once
        }
      },
      { threshold: 0.35 } // Trigger when 35% visible
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [hasAnimated])

  // Count-up animation
  useEffect(() => {
    if (!isVisible || hasAnimated !== isVisible) return

    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease-out cubic function
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentCount = startValue + (end - startValue) * easeOut

      setCount(parseFloat(currentCount.toFixed(decimals)))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
        onComplete?.()
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration, decimals, onComplete, hasAnimated])

  return { count, elementRef }
}
