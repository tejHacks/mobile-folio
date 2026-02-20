export function Skills() {
  const skillCategories = [
    {
      title: "Mobile Development",
      skills: ["React Native", "Expo", "TypeScript", "Native Modules"],
    },
    {
      title: "Web Development",
      skills: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    },
    {
      title: "Linux & DevOps",
      skills: ["Ubuntu", "Linux Mint", "Kali Linux", "Parrot OS"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "Firebase", "PostgreSQL"],
    },
  ]

  return (
    <section id="skills" className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold">Skills & Expertise</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10"
            >
              <h3 className="mb-4 font-semibold text-primary">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Linux Distros Showcase */}
        <div className="mt-12 rounded-lg border border-border bg-card p-8">
          <h3 className="mb-6 text-xl font-semibold">Linux Distributions</h3>
          <p className="mb-6 text-muted-foreground">
            Avid Linux user exploring various distributions and contributing to the open-source ecosystem.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {["Ubuntu", "Linux Mint", "Kali Linux", "Parrot OS", "Arch Linux"].map((distro) => (
              <div
                key={distro}
                className="flex items-center justify-center rounded-lg border border-border bg-background py-4 text-center font-mono text-sm transition-all hover:border-primary hover:bg-primary/5"
              >
                {distro}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
