import { useState, useEffect } from 'react'

const QUERY = '(prefers-reduced-motion: no-preference)'
const getInitialState = () => !window.matchMedia(QUERY).matches
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialState)
  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY)
    const listener = (event) => {
      setPrefersReducedMotion(!event.matches)
    }
    mediaQueryList.addListener(listener)
    return () => {
      mediaQueryList.removeListener(listener)
    }
  }, [])
  return prefersReducedMotion
}

export default usePrefersReducedMotion
