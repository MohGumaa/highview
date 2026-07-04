
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { Reveal } from './reveal'

export function Contact() {

  return (
    <section id="contact" className="relative bg-navy-gradient py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-accent">
            Get in Touch
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Ready to discuss your next project?
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Reach out to our team and we&apos;ll respond promptly to explore how we can support your
            objectives.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Info card */}
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-navy-panel p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <Image
                  src="/highview-logo.svg"
                  alt="HIGHVIEW HOLDINGS LTD"
                  width={160}
                  height={44}
                  className="h-10 w-auto rounded-xs"
                />
              </div>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Strategic advisory and specialist trading for global infrastructure, real estate,
                aviation, and travel projects.
              </p>

              <div className="mt-10 space-y-6">
                <ContactRow icon={MapPin} label="Registered Office">
                  P.O. Box 25561, Dubai, United Arab Emirates
                </ContactRow>
                <ContactRow icon={Mail} label="Email">
                  <a href="mailto:highview@gulfco.biz" className="hover:text-foreground">
                    highview@gulfco.biz
                  </a>
                </ContactRow>
                <ContactRow icon={Phone} label="Phone">
                  <a href="tel:+97143464500" className="block hover:text-foreground">
                    +971 4 3464500
                  </a>
                  <a href="tel:+97143464200" className="block hover:text-foreground">
                    +971 4 3464200
                  </a>
                </ContactRow>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.15}>
            <div className="glass-card h-full rounded-3xl p-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.6285!2d57.52!3d-20.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c5b0cdd7d4b5b%3A0x1234567890abcdef!2sCurepipe%2C%20Mauritius!5e0!3m2!1sen!2smu!4v1700000000000!5m2!1sen!2smu"
                width="100%"
                height="100%"
                className="min-h-[400px] border-0 rounded-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gulf Investments Worldwide Ltd - Curepipe, Mauritius"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Mail
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-4">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-accent/15 text-blue-accent ring-1 ring-blue-accent/25">
        <Icon className="size-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
        <div className="mt-1 text-sm font-medium text-foreground">{children}</div>
      </div>
    </div>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-navy-950/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-blue-accent"
      />
    </div>
  )
}
