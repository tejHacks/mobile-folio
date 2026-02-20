export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Mobile Developer. Built with React & Next.js.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Twitter"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.5 5M9 19c1 0 1-1 1-1" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              </svg>
            </a>
            <a
              href="https://dev.to"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Dev.to"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.37 0 .70-.08.98-.35.28-.26.42-.63.42-1.08V11.3c0-.39-.12-.74-.37-.96zm5.76-.28c-.18 0-.38.09-.52.26-.14.16-.21.42-.21.72v2.34c0 .3.07.55.21.72.14.17.34.26.52.26.18 0 .38-.09.52-.26.14-.17.21-.42.21-.72v-2.34c0-.3-.07-.56-.21-.72-.14-.17-.34-.26-.52-.26zm10.77 1.93v2.65c0 .33-.05.63-.15.89-.1.26-.24.48-.42.64-.18.16-.39.28-.63.35-.24.07-.5.11-.77.11-.27 0-.53-.04-.77-.1-.24-.07-.45-.19-.63-.35-.18-.16-.32-.38-.42-.64-.1-.26-.15-.56-.15-.89v-2.65c0-.33.05-.63.15-.89.1-.26.24-.48.42-.64.18-.16.39-.28.63-.35.24-.07.5-.11.77-.11.27 0 .53.04.77.1.24.07.45.19.63.35.18.16.32.38.42.64.1.26.15.56.15.89zM8.85 9.12H5.46V21h3.39zm11.13-9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-1.5 7.05c.2 0 .38-.04.56-.12.18-.08.33-.2.45-.35.1-.15.18-.33.22-.53.04-.2.07-.42.07-.65v-2.7c0-.23-.03-.45-.07-.65-.04-.2-.12-.38-.22-.53-.12-.15-.27-.27-.45-.35-.18-.08-.36-.12-.56-.12-.2 0-.38.04-.56.12-.18.08-.33.2-.45.35-.1.15-.18.33-.22.53-.04.2-.07.42-.07.65v2.7c0 .23.03.45.07.65.04.2.12.38.22.53.12.15.27.27.45.35.18.08.36.12.56.12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
