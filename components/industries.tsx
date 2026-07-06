'use client'

import { motion } from 'framer-motion'
import { Building2, Home, Plane, Compass, Zap, Droplets } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from './reveal'

const industries = [
  { icon: Building2, title: 'Infrastructure', desc: 'Roads, transport, and civil megaprojects.' },
  { icon: Home, title: 'Real Estate', desc: 'Development and asset advisory.' },
  { icon: Plane, title: 'Aviation', desc: 'Operations and technical procurement.' },
  { icon: Compass, title: 'Travel', desc: 'Tourism and hospitality ventures.' },
  { icon: Zap, title: 'Energy', desc: 'Power and energy transition projects.' },
]

export function Industries() {
  return (
    <section id="industries" className="relative bg-navy-gradient py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-accent">
            Industries
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Sectors where we create lasting impact
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <RevealItem key={ind.title}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative flex h-full items-center gap-5 overflow-hidden rounded-2xl border border-border bg-navy-panel p-6"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-accent/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-blue-accent/15 text-blue-accent ring-1 ring-blue-accent/25">
                  <ind.icon className="size-7" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">{ind.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{ind.desc}</p>
                </div>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
