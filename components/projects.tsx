"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [fullscreenSrc, setFullscreenSrc] = useState<string | null>(null);

  const mobileProjects = [
    {
      id: "kairos",
      title: "Kairos",
      description:
        "A beautiful, intuitive prayer reminder app designed for Christians to stay consistent in daily spiritual practice. Features daily push notifications timed to prayer hours, integrated Bible verses, prayer history tracking, and offline support for reliable use anywhere.",
      tags: [
        "React Native",
        "Expo",
        "TypeScript",
        "SQLITE",
        "Notifications",
        "AsyncStorage",
      ],
      links: {
        demo: "https://github.com/tejHacks/kairos-mobile-app",
        code: "https://github.com/tejHacks/kairos-mobile-app",
        video: "#",
        android: "https://github.com/tejHacks/kairos-mobile-app",
        ios: "#",
      },
      images: [
        "/projects/kairos-1.png",
        "/projects/kairos-2.png",
        "/projects/kairos-3.jpeg",
        "/projects/kairos-4.jpeg",
        "/projects/kairos-5.jpeg",
        "/projects/kairos-6.png",
        "/projects/kairos-7.png",
        "/projects/kairos-8.png",
        "/projects/kairos-9.png",
        "/projects/kairos-10.png",
      ],
    },
    {
      id: "churchnotes",
      title: "Scribe",
      description:
        "Simple, powerful notes app tailored for Christians during church services and Bible study. Capture sermon points, thoughts, prayer requests, and key verses on the fly with fast search, audio recording for quick voice memos, dark mode for low-light settings, and offline-first design.",
      tags: [
        "React Native",
        "Expo",
        "TypeScript",
        "Expo AV",
        "SQLite/AsyncStorage",
        "Notifications",
      ],
      links: { demo: "#", code: "#", video: "#" },
      images: [
        "/projects/scribe-1.png",
        "/projects/scribe-1.png",
        "/projects/scribe-1.png",
        "/projects/scribe-1.png",
      ],
    },
    {
      id: "jaundx",
      title: "JaundX",
      description:
        "Mobile AI-powered app for early detection of neonatal jaundice using smartphone camera analysis. Parents/midwives capture baby photos (skin/eyes), run on-device ML model for bilirubin level prediction, with risk alerts, history tracking, and doctor referral guidance.",
      tags: [
        "React Native",
        "Expo",
        "TypeScript",
        "TensorFlow Lite / PyTorch Mobile",
        "Camera API",
      ],
      links: { demo: "#", code: "#", video: "#" },
      images: [
        "/projects/jaundx-1.png",
        "/projects/jaundx-2.png",
        "/projects/jaundx-3.png",
        "/projects/jaundx-4.png",
      ],
    },
    {
      id: "smoothspeex",
      title: "SmoothSpeex",
      description:
        'Productivity app for recording meetings, interviews, or sermons with automatic speaker diarization and voice separation. Identifies "who spoke when," generates labeled transcripts, highlights key quotes, and supports export for notes/podcasts.',
      tags: ["React Native", "Expo", "TypeScript", "Expo AV", "On-device ML"],
      links: { demo: "#", code: "#", video: "#" },
      images: [
        "/projects/smoothspeex-1.png",
        "/projects/smoothspeex-2.png",
        "/projects/smoothspeex-3.png",
        "/projects/smoothspeex-4.png",
      ],
    },
    {
      id: "faithquotes",
      title: "FaithQuotes",
      description:
        "A beautifully crafted devotional quotes app built with an illuminated manuscript aesthetic. Features 100+ curated quotes from Kenneth E. Hagin and other Christian ministers, smooth swipe navigation, a copy-to-clipboard feature, and a warm candlelit UI with ornate gold typography.",
      tags: [
        "React Native",
        "Expo",
        "TypeScript",
        "Expo Font",
        "React Native SVG",
      ],
      links: {
        demo: "#",
        code: "https://github.com/tejHacks/christian-quotes-mobile-app",
        video: "#",
      },
      images: [
        "/projects/faithquotes-1.png",
        "/projects/faithquotes-2.png",
        "/projects/faithquotes-3.png",
        "/projects/faithquotes-4.png",
      ],
    },
  ];

  const webProjects = [
    {
      id: "cppcamp",
      title: "CppCamp",
      description:
        "Next-gen platform for mastering C++ with hands-on practice, AI-based mentor, and a fully functional web-based code editor.",
      tags: ["React", "TypeScript", "Framer Motion"],
      links: { demo: "https://cpp-camp.vercel.app/", code: "#" },
      images: [
        "/projects/cppcamp-1.png",
        "/projects/cppcamp-2.png",
        "/projects/cppcamp-3.png",
      ],
    },
    {
      id: "lumicare",
      title: "Lumicare AI",
      description:
        "Web app for detecting jaundice in babies using custom Computer Vision model. Built for HelpMum Hackathon with 96%+ accuracy.",
      tags: ["React", "TypeScript", "Node.js", "ML"],
      links: { demo: "https://lumicare-ai.netlify.app/", code: "#" },
      images: [
        "/projects/lumicare-1.png",
        "/projects/lumicare-2.png",
        "/projects/lumicare-3.png",
      ],
    },
    {
      id: "rizzme",
      title: "RizzMe",
      description:
        "A sleek pickup line generator with smooth animations and creative vibes.",
      tags: ["React", "TypeScript", "Framer Motion"],
      links: { demo: "https://rizz-generator.vercel.app/", code: "#" },
      images: [
        "/projects/rizzme-1.png",
        "/projects/rizzme-2.png",
        "/projects/rizzme-3.png",
      ],
    },
    {
      id: "markdart",
      title: "MarkDart",
      description:
        "Sleek web-based Markdown editor with live preview and dark mode.",
      tags: ["React", "Next.js", "TypeScript"],
      links: { demo: "https://markdart-editor.vercel.app/", code: "#" },
      images: [
        "/projects/markdart-1.png",
        "/projects/markdart-2.png",
        "/projects/markdart-3.png",
      ],
    },
    {
      id: "biblequiz",
      title: "Bible Quiz Adventure",
      description:
        "Interactive Bible quiz game to test your knowledge of God's Word.",
      tags: ["React", "TypeScript", "Local Storage"],
      links: {
        demo: "https://bible-quiz-game-blombone.netlify.app/",
        code: "#",
      },
      images: [
        "/projects/biblequiz-1.png",
        "/projects/biblequiz-2.png",
        "/projects/biblequiz-3.png",
      ],
    },
    {
      id: "bibleext",
      title: "Bible Verse Extension",
      description:
        "Chrome extension that replaces new tabs with inspiring daily Bible verses.",
      tags: ["JavaScript", "Chrome Extension API", "HTML5"],
      links: {
        code: "https://github.com/tejHacks/random-bible-verse-extension",
      },
      images: ["/projects/bibleext-1.png", "/projects/bibleext-2.png"],
    },
    {
      id: "learnspanish",
      title: "Learn Spanish",
      description:
        "Simple Spanish learning app with text-to-speech using Web Speech API.",
      tags: ["Vue.js 3", "Composition API", "Tailwind CSS"],
      links: { demo: "https://spanish-words-pi.vercel.app/", code: "#" },
      images: [
        "/projects/learnspanish-1.png",
        "/projects/learnspanish-2.png",
        "/projects/learnspanish-3.png",
      ],
    },
  ];

  const mlProjects = [
    {
      id: "jaundice",
      title: "Neonatal Jaundice Prediction",
      description:
        "Machine learning model deployed as a web app for early jaundice diagnosis in newborns. Built with Python, scikit-learn, and Pandas, hosted on Netlify for clinical accessibility with 96%+ accuracy.",
      tags: [
        "Python",
        "scikit-learn",
        "Pandas",
        "NumPy",
        "React",
        "TypeScript",
        "Node.js",
        "MySQL",
      ],
      links: {
        demo: "https://lumicare-ai.netlify.app/",
        code: "https://github.com/tejHacks/neonatal-jaundice-prediction",
      },
      images: [
        "/projects/jaundice-1.png",
        "/projects/jaundice-2.png",
        "/projects/jaundice-3.png",
        "/projects/jaundice-4.png",
      ],
    },
    {
      id: "breastcancer",
      title: "Breast Cancer Detection via Ultrasound",
      description:
        "Deep learning model using ultrasound images for breast cancer detection. Developed for Final Year Research Project using TensorFlow, Keras, and OpenCV with high diagnostic accuracy.",
      tags: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Streamlit"],
      links: { code: "https://github.com/tejHacks/breast-cancer-ultrasound" },
      images: [
        "/projects/breastcancer-1.png",
        "/projects/breastcancer-2.png",
        "/projects/breastcancer-3.png",
      ],
    },
    {
      id: "speakerdiarization",
      title: "Speaker Diarization System",
      description:
        "Streamlit-based audio processing system to identify and separate different speakers in conversations. Combines PyTorch, librosa, and audio signal processing for speaker identification.",
      tags: [
        "Python",
        "PyTorch",
        "Streamlit",
        "librosa",
        "PyAnnote",
        "Pydub",
        "scipy",
        "sklearn",
      ],
      links: { code: "https://github.com/tejHacks/speaker-diarization" },
      images: [
        "/projects/speakerdiarization-1.png",
        "/projects/speakerdiarization-2.png",
        "/projects/speakerdiarization-3.png",
      ],
    },
  ];

  // ── NO auto-overwrite loop here anymore ──

  type Project = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    links: {
      demo?: string;
      code?: string;
      video?: string;
      android?: string;
      ios?: string;
    };
    images: string[];
  };

  const ProjectModal = ({ project }: { project: Project }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-card border border-border p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-muted-foreground mb-4">{project.description}</p>
          </div>
          <button
            onClick={() => setSelectedProject(null)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="mb-6">
          <div className="grid grid-cols-2 gap-4">
            {project.images.map((img, idx) => (
              <div
                key={idx}
                className="aspect-video bg-muted rounded-lg overflow-hidden"
              >
                <img
                  onClick={() => setFullscreenSrc(img)}
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="w-full h-full object-cover cursor-pointer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-3">Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          {project.links.demo && project.links.demo !== "#" && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg bg-primary text-primary-foreground py-2 text-center hover:opacity-90 transition-opacity"
            >
              Live Demo
            </a>
          )}
          {project.links.code && project.links.code !== "#" && (
            <a
              href={project.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg border border-primary text-primary py-2 text-center hover:bg-primary/10 transition-colors"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );

  const ProjectCard = ({ project }: { project: Project }) => (
    <button
      onClick={() => setSelectedProject(project.id)}
      className="group rounded-lg border border-border bg-card p-6 text-left transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10"
    >
      <h3 className="mb-2 text-xl font-semibold group-hover:text-primary">
        {project.title}
      </h3>
      <p className="mb-4 text-sm text-muted-foreground">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
    </button>
  );

  const allProjects: Project[] = [
    ...mobileProjects,
    ...webProjects,
    ...mlProjects,
  ];

  return (
    <section
      id="projects"
      className="border-t border-border px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold">Featured Projects</h2>

        <div className="mb-16">
          <h3 className="mb-6 text-2xl font-semibold">Mobile Applications</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {mobileProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="mb-6 text-2xl font-semibold">Web Development</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {webProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-semibold">Machine Learning & AI</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {mlProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={allProjects.find((p) => p.id === selectedProject)!}
        />
      )}

      {fullscreenSrc && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90"
          onClick={() => setFullscreenSrc(null)}
        >
          <img
            src={fullscreenSrc}
            alt="Screenshot fullscreen"
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </section>
  );
}
