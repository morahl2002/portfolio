import { useEffect } from 'react'
import { useLocation } from 'react-router'

// Scrolls to #anchors after navigation, or back to the top on a new page
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}