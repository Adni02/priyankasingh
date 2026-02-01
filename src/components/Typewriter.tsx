import { useEffect, useState } from 'react'

interface TypewriterProps {
  text: string
  speed?: number
  className?: string
  blinkDuration?: number
}

export default function Typewriter({ 
  text, 
  speed = 50, 
  className = '', 
  blinkDuration = 2000 
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [showCaret, setShowCaret] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Typewriter effect
  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(text)
      setIsComplete(true)
      setShowCaret(false)
      return
    }

    let index = 0
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1))
        index++
      } else {
        setIsComplete(true)
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed, prefersReducedMotion])

  // Stop caret blinking after animation completes
  useEffect(() => {
    if (!isComplete) return

    const timer = setTimeout(() => {
      setShowCaret(false)
    }, blinkDuration)

    return () => clearTimeout(timer)
  }, [isComplete, blinkDuration])

  return (
    <span className={className}>
      {displayText}
      {showCaret && (
        <span 
          className="inline-block w-0.5 h-[1em] bg-current ml-0.5 align-middle"
          style={{
            animation: isComplete ? 'blink 0.7s infinite' : 'none',
            opacity: isComplete ? 1 : 1
          }}
        />
      )}
      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  )
}
