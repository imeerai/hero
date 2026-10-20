'use client'
import { useEffect } from 'react'

// Chrome/Edge run the scroll animations natively in CSS (animation-timeline).
// Other browsers get the same reveal via IntersectionObserver + the scroll progress bar via a listener.
export default function ScrollFx() {
  useEffect(() => {
    if (CSS.supports('animation-timeline: view()')) return
    document.documentElement.classList.add('no-sdt')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
      { rootMargin: '0px 0px -10% 0px' },
    )
    document.querySelectorAll('.sv').forEach((el) => io.observe(el))
    const bar = document.querySelector<HTMLElement>('.sprog')
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      if (bar) bar.style.scale = `${max > 0 ? scrollY / max : 0} 1`
    }
    addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => { io.disconnect(); removeEventListener('scroll', onScroll) }
  }, [])
  return null
}
