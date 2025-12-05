import { ReactElement } from "react"

export function Hero(): ReactElement {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-20 text-center sm:py-32">
        <p className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--fg))]/60">
        Portfolio
      </p>
      <h1 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
        Senior full-stack engineer focused on fast, SEO-critical web platforms.
      </h1>
      <p className="max-w-2xl text-sm text-[rgb(var(--fg))]/80">
        I design and build performant web experiences for product teams, agencies, and
        communications groups—combining modern React/Next.js stacks with deep SEO and
        content strategy experience.
      </p>
      <div className="flex gap-3 text-sm">
        <a
          href="/work"
          className="rounded-full bg-[rgb(var(--fg))] px-4 py-2 text-[rgb(var(--bg))]"
        >
          View projects
        </a>
        <a
          href="/contact"
          className="rounded-full border border-[rgb(var(--border-subtle))] px-4 py-2 text-[rgb(var(--fg))]/80 hover:text-[rgb(var(--fg))]"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}