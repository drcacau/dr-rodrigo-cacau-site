import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    const element = document.getElementById(id)
    element?.scrollIntoView()
  }, [hash, pathname])

  return null
}
