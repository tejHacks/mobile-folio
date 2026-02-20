export function About() {
  return (
    <section id="about" className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold">About Me</h2>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-4 text-muted-foreground">
            <p>
              I'm a mobile developer with over 3 years of experience building web and mobile applications. My journey
              started with web development, and I've evolved into specializing in React Native for cross-platform mobile
              development.
            </p>
            <p>
              Beyond coding, I'm deeply passionate about Linux and open-source software. I actively use and contribute
              to the Linux ecosystem, exploring various distributions and sharing my knowledge through technical writing
              and blogging.
            </p>
            <p>
              I believe in writing clean, maintainable code and documenting my learnings. Whether it's a technical blog
              post or a well-architected mobile app, I'm committed to quality and continuous improvement.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 font-semibold text-primary">Experience</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span>3+ years in web development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span>React Native specialist</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span>Full-stack development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span>Technical writing & blogging</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
