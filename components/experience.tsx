export function Experience() {
  const experiences = [
    {
      role: "Mobile Developer",
      company: "AetherMinds",
      period: "2025 - Present",
      highlights: ["Build mobile apps", "Develop AI models", "Created mamaCare app", "Created Kairos app"],
    },
    {
      role: "Mobile Developer",
      company: "Kairos",
      period: "2025 - Present",
      highlights: ["Prayer reminder app development", "User engagement features", "Backend integration"],
    },
    {
      role: "Web Developer",
      company: "Exodox",
      period: "June 2025 - Present",
      highlights: ["Full-stack web development", "Modern tech stack", "Client solutions"],
    },
    {
      role: "Web Developer",
      company: "MTTI",
      period: "May - December 2024",
      highlights: ["Web application development", "React & Next.js", "Database design"],
    },
    {
      role: "Web Developer",
      company: "NTECH",
      period: "2023 - 2024",
      highlights: ["Web development projects", "Client management", "Technical support"],
    },
    {
      role: "Web Development Trainer",
      company: "Freelance",
      period: "Ongoing",
      highlights: ["Mentor developers", "Technical documentation", "Best practices training"],
    },
  ]

  return (
    <section id="experience" className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold">Professional Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex flex-col justify-between sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
