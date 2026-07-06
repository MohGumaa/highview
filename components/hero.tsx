'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Globe2 } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-gradient pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(147,183,235,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(147,183,235,0.08) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 100%)',
        }}
      />
      {/* floating blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 size-72 rounded-full bg-blue-accent/20 blur-3xl"
        animate={{ y: [0, 24, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 size-96 rounded-full bg-navy-700/40 blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>


          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-balance font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Strategic Advisory & Specialist Trading for Global Infrastructure Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Highview LTD provides integrated business advisory, technical consulting, and
            specialist trading solutions across infrastructure, real estate, aviation, and travel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Get in Touch
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/40"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border glass-card">
            <Image
              src="/hero-infrastructure.png"
              alt="Abstract visualization of global infrastructure, aviation and connectivity"
              width={900}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
          </div>

          <motion.div
            className="absolute -bottom-5 -left-5 rounded-2xl border border-border bg-navy-950/85 px-5 py-4 backdrop-blur-xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="text-2xl font-bold text-foreground">Global</p>
            <p className="text-xs text-muted-foreground">Project Reach</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
