import Image from 'next/image'



export function Footer() {
  return (
    <footer className="border-t border-border bg-navy-950/80">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} HIGHVIEW HOLDINGS LTD. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Ras Al Khaimah · Dubai, United Arab Emirates</p>
        </div>
      </div>
    </footer>
  )
}
