'use client'

import { Reveal, RevealGroup, RevealItem } from './reveal'

const steps = [
  {
    n: '01',
    title: 'Understand Requirements',
    desc: 'We define objectives, constraints, and success criteria with your team.',
  },
  {
    n: '02',
    title: 'Strategic Advisory',
    desc: 'We shape the strategy, feasibility, and technical roadmap for delivery.',
  },
  {
    n: '03',
    title: 'Procurement & Technical Support',
    desc: 'We source specialist equipment and provide hands-on technical guidance.',
  },
  {
    n: '04',
    title: 'Project Delivery',
    desc: 'We support execution through to handover, safeguarding quality and value.',
  },
]

export function Process() {
  return (
    <section className="relative bg-navy-gradient py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-accent">
            Our Process
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            A disciplined path from concept to delivery
          </h2>
        </Reveal>

        <RevealGroup className="relative mt-16 grid gap-8 lg:grid-cols-4">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
          />
          {steps.map((s) => (
            <RevealItem key={s.n}>
              <div className="relative">
                <div className="flex size-16 items-center justify-center rounded-2xl border border-border bg-navy-950/80 font-heading text-xl font-bold text-blue-accent">
                  {s.n}
                </div>
                <h3 className="mt-6 font-heading text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
