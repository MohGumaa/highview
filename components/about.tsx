'use client'

import Image from 'next/image'
import { Reveal } from './reveal'

const details = [
  { label: 'Entity', value: 'HIGHVIEW HOLDINGS LTD' },
  { label: 'Registered Office', value: 'RAK International Corporate Centre' },
  { label: 'Jurisdiction', value: 'Ras Al Khaimah, UAE' },
  { label: 'Incorporated', value: 'April 19, 2016' },
  { label: 'Registration No.', value: 'IBC/04/16/12697' },
]

export function About() {
  return (
    <section id="about" className="relative bg-navy-gradient py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border">
              <Image
                src="/about-corporate.png"
                alt="Modern corporate towers representing HIGHVIEW HOLDINGS global presence"
                width={800}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -right-4 -top-4 hidden rounded-2xl border border-border bg-navy-950/85 px-6 py-4 backdrop-blur-xl sm:block">
              <p className="font-heading text-2xl font-bold text-foreground">Est. 2016</p>
              <p className="text-xs text-muted-foreground">Ras Al Khaimah, UAE</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-accent">
              About the Company
            </p>
            <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              A trusted international holding company built on precision and long-term value
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              HIGHVIEW HOLDINGS LTD is a UAE-based international holding company delivering integrated
              advisory, technical consulting, and specialist trading services. We partner with
              governments, developers, and enterprises to move complex infrastructure, real estate,
              aviation, and travel projects from concept to delivery.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border sm:grid-cols-2">
              {details.map((d) => (
                <div key={d.label} className="bg-navy-panel px-5 py-4">
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">{d.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-foreground">{d.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
