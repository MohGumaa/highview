'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

export function CTA() {
  return (
    <section className="relative border-t border-border bg-navy-950/50 py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-navy-panel px-8 py-14 text-center sm:px-16">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-blue-accent/20 blur-3xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <h2 className="relative text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s Build Your Next International Project
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Partner with Highview Holdings Ltd for advisory and specialist trading that moves
              ambitious projects forward.
            </p>
            <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Contact Us
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/40"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
