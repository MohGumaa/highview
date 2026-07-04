'use client'

import { motion } from 'framer-motion'
import {
  Briefcase,
  Building2,
  Home,
  Plane,
  Hotel,
  PackageSearch,
} from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from './reveal'

const services = [
  {
    icon: Briefcase,
    title: 'Business & Technical Advisory',
    desc: 'Strategic guidance, feasibility, and technical consulting that de-risks decisions across the project lifecycle.',
  },
  {
    icon: Building2,
    title: 'Infrastructure',
    desc: 'End-to-end support for large-scale infrastructure planning, procurement, and delivery.',
  },
  {
    icon: Home,
    title: 'Real Estate',
    desc: 'Advisory across acquisition, development, and asset positioning in key regional markets.',
  },
  {
    icon: Plane,
    title: 'Aviation',
    desc: 'Specialist support for aviation operations, assets, and technical procurement requirements.',
  },
  {
    icon: Hotel,
    title: 'Travel & Hospitality',
    desc: 'Consulting for travel, tourism, and hospitality ventures seeking sustainable growth.',
  },
  {
    icon: PackageSearch,
    title: 'Specialist Trading',
    desc: 'Sourcing and trading of specialist equipment and materials for infrastructure projects.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative border-t border-border bg-navy-950/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-accent">
            What We Do
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Integrated services across the project lifecycle
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            From strategy through delivery, we combine advisory depth with specialist trading capability.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <RevealItem key={s.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group h-full rounded-2xl border border-border bg-navy-panel p-7"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-blue-accent/15 text-blue-accent ring-1 ring-blue-accent/25 transition-colors group-hover:bg-blue-accent group-hover:text-accent-foreground">
                  <s.icon className="size-6" />
                </div>
                <h3 className="mt-6 font-heading text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
