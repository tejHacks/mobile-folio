export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-mono text-primary">{"> Olateju Olamide Emmanuel"}</p>
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              Mobile Developer, <span className="text-primary">ML Engineer</span> & Technical Writer
            </h1>
          </div>

          <p className="max-w-2xl text-lg text-muted-foreground">
            Building beautiful, performant mobile experiences with React Native. 3+ years creating web and mobile applications. Passionate about machine learning, Linux, open-source, and sharing technical knowledge through writing.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:opacity-90"
            >
              View My Work
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium transition-all hover:bg-card"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
