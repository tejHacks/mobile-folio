export function Contact() {
  return (
    <section id="contact" className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold">Let's Work Together</h2>
        <p className="mb-8 text-muted-foreground">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:flex-wrap">
          <a
            href="mailto:olateju202@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-all hover:opacity-90"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/olateju-olamide-22314a292/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-8 py-3 font-medium transition-all hover:bg-card"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://x.com/OlatejuOlamid10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-8 py-3 font-medium transition-all hover:bg-card"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.63l-5.216-6.817L2.551 21.75H.675l7.73-8.835L.045 2.25h6.63l4.713 6.231 5.226-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            X (Twitter)
          </a>
          <a
            href="https://medium.com/@olateju202/speaker-diarization-teaching-machines-who-spoke-when-b3ea70cf9dcd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-8 py-3 font-medium transition-all hover:bg-card"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 2.98-.46 5.4-1.03 5.4-.57 0-1.05-2.42-1.05-5.4s.48-5.4 1.05-5.4c.57 0 1.03 2.42 1.03 5.4z" />
            </svg>
            Medium
          </a>
        </div>
      </div>
    </section>
  )
}
