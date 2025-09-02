import React from 'react'
import { createRoot } from 'react-dom/client'
import ParticleVessel from './ParticleVessel.jsx'

export default function mount(el, props = {}) {
  const root = createRoot(el)
  root.render(<ParticleVessel {...props} />)
  return { unmount: () => root.unmount() }
}

