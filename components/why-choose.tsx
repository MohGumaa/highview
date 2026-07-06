'use client'

import { motion } from 'framer-motion'
import { Globe2, Cog, Layers, Handshake, ScrollText, TrendingUp } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from './reveal'

const features = [
  {
    icon: Globe2,
    title: 'Global Perspective',
    desc: 'International insight applied to local project realities.',
  },
  {
    icon: Cog,
    title: 'Technical Expertise',
    desc: 'Deep and procurement knowledge across sectors.',
  },
  {
    icon: Layers,
    title: 'Integrated Solutions',
    desc: 'Advisory and specialist trading under one accountable partner.',
  },
  {
    icon: Handshake,
    title: 'Trusted Partnerships',
    desc: 'Long-standing relationships with vendors and stakeholders.',
  },
  {
    icon: ScrollText,
    title: 'Regulatory Knowledge',
    desc: 'Fluency in UAE and international compliance frameworks.',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Value',
    desc: 'Solutions engineered for durability and measurable returns.',
  },
]

export function WhyChoose() {
  return (
    <section id="why" className="relative border-t border-border bg-navy-950/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-accent">
            Why Choose HIGHVIEW
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            The advantages of a specialist holding partner
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <RevealItem key={f.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass-card h-full rounded-2xl p-7"
              >
                <f.icon className="size-7 text-blue-accent" />
                <h3 className="mt-5 font-heading text-lg font-bold text-foreground">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
