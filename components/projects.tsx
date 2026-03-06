"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [fullscreenSrc, setFullscreenSrc] = useState<string | null>(null);

  // Original mobile projects
  const mobileProjects = [
    {
      id: "kairos",
      title: "Kairos",
      description:
        "A beautiful, intuitive prayer reminder app designed for Christians to stay consistent in daily spiritual practice. Features daily push notifications timed to prayer hours, integrated Bible verses, prayer history tracking, and offline support for reliable use anywhere.",
      tags: ["React Native", "Expo", "TypeScript", "Firebase", "Redux/Context"],
      links: { demo: "#", code: "#", video: "#", android: "#", ios: "#" },
      images: ["#", "#", "#", "#"],
    },
    {
      id: "versequest",
      title: "VerseQuest",
      description:
        "Engaging turn-based mobile quiz game to help users learn and memorize Bible verses. Includes multiple difficulty levels, timed challenges, leaderboards, progress tracking, and rewarding feedback to make Scripture study fun and competitive.",
      tags: [
        "React Native",
        "Expo",
        "TypeScript",
        "Local Storage/AsyncStorage",
        "Animations",
      ],
      links: { demo: "#", code: "#", video: "#" },
      images: ["#", "#", "#", "#"],
    },
    {
      id: "churchnotes",
      title: "Church Notes",
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
      images: ["#", "#", "#", "#"],
    },
    {
      id: "mommysnest",
      title: "Mommy's Nest",
      description:
        "Comprehensive companion app for mothers, covering pregnancy tracking, weekly tips, fetal development info, BMI calculator, community support features, and health reminders from conception through postpartum.",
      tags: [
        "React Native",
        "Expo",
        "TypeScript",
        "Firebase",
        "Charts",
        "Notifications",
      ],
      links: { demo: "#", code: "#", video: "#" },
      images: ["#", "#", "#", "#"],
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
      images: ["#", "#", "#", "#"],
    },
    {
      id: "breastcare",
      title: "BreastCare Scanner",
      description:
        "Mobile prototype for supporting early awareness of breast cancer through image analysis. Users capture ultrasound/mammogram-like photos or self-exam images; on-device ML model provides preliminary risk indicators, educational resources, and prompts for professional consultation.",
      tags: [
        "React Native",
        "Expo",
        "TypeScript",
        "TensorFlow Lite / Keras",
        "Camera integration",
      ],
      links: { demo: "#", code: "#", video: "#" },
      images: ["#", "#", "#", "#"],
    },
    {
      id: "smoothspeex",
      title: "SmoothSpeex",
      description:
        'Productivity app for recording meetings, interviews, or sermons with automatic speaker diarization and voice separation. Identifies "who spoke when," generates labeled transcripts, highlights key quotes, and supports export for notes/podcasts.',
      tags: ["React Native", "Expo", "TypeScript", "Expo AV", "On-device ML"],
      links: { demo: "#", code: "#", video: "#" },
      images: ["#", "#", "#", "#"],
    },
    {
      id: "melodyflow",
      title: "Melody Flow",
      description:
        "Clean, modern offline-first music player for local device libraries. Features playlist creation, queue management, equalizer, waveform visualization, background playback, lock-screen controls, dark mode, and search by artist/album/genre.",
      tags: [
        "React Native",
        "Expo",
        "TypeScript",
        "Expo AV / Track Player",
        "Animations",
      ],
      links: { demo: "#", code: "#", video: "#" },
      images: ["#", "#", "#", "#"],
    },
    {
      id: "nairaflow",
      title: "NairaFlow",
      description:
        "Modern, minimalist redesign concept for a mobile banking super app inspired by top Nigerian fintechs (OPay, Moniepoint, PalmPay, Kuda). Focuses on clean dashboard, quick transfers, bill payments, savings goals, transaction history feed (social-media style), dark mode, and biometric auth flows for seamless, secure everyday banking.",
      tags: [
        "React Native",
        "Expo",
        "TypeScript",
        "Tailwind/NativeWind",
        "Reanimated",
        "Mock API",
      ],
      links: { demo: "#", code: "#", video: "#" },
      images: ["#", "#", "#", "#"],
    },
    {
      id: "revivalshelf",
      title: "RevivalShelf",
      description:
        "Spiritual books library containing Christian classics and uplifting works for spiritual growth and encouragement.",
      tags: ["React Native", "Expo", "TypeScript", "SQLite", "UI"],
      links: { demo: "#", code: "#", video: "#" },
      images: ["#", "#", "#", "#"],
    },
  ];

  // Web development projects
  const webProjects = [
    {
      id: "cppcamp",
      title: "CppCamp",
      description:
        "Next-gen platform for mastering C++ with hands-on practice, AI-based mentor, and a fully functional web-based code editor.",
      tags: ["React", "TypeScript", "Framer Motion"],
      links: { demo: "#", code: "#" },
      images: ["#", "#", "#"],
    },
    {
      id: "lumicare",
      title: "Lumicare AI",
      description:
        "Web app for detecting jaundice in babies using custom Computer Vision model. Built for HelpMum Hackathon with 96%+ accuracy.",
      tags: ["React", "TypeScript", "Node.js", "ML"],
      links: { demo: "#", code: "#" },
      images: ["#", "#", "#"],
    },
    {
      id: "rizzme",
      title: "RizzMe",
      description:
        "A sleek pickup line generator with smooth animations and creative vibes.",
      tags: ["React", "TypeScript", "Framer Motion"],
      links: { demo: "#", code: "#" },
      images: ["#", "#", "#"],
    },
    {
      id: "markdart",
      title: "MarkDart",
      description:
        "Sleek web-based Markdown editor with live preview and dark mode.",
      tags: ["React", "Next.js", "TypeScript"],
      links: { demo: "#", code: "#" },
      images: ["#", "#", "#"],
    },
    {
      id: "biblequiz",
      title: "Bible Quiz Adventure",
      description:
        "Interactive Bible quiz game to test your knowledge of God's Word.",
      tags: ["React", "TypeScript", "Local Storage"],
      links: { demo: "#", code: "#" },
      images: ["#", "#", "#"],
    },
    {
      id: "bibleext",
      title: "Bible Verse Extension",
      description:
        "Chrome extension that replaces new tabs with inspiring daily Bible verses.",
      tags: ["JavaScript", "Chrome Extension API", "HTML5"],
      links: { code: "#" },
      images: ["#", "#"],
    },
    {
      id: "learnspanish",
      title: "Learn Spanish",
      description:
        "Simple Spanish learning app with text-to-speech using Web Speech API.",
      tags: ["Vue.js 3", "Composition API", "Tailwind CSS"],
      links: { demo: "#", code: "#" },
      images: ["#", "#", "#"],
    },
  ];

  // Machine Learning & AI projects
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
      images: ["#", "#", "#", "#"],
    },
    {
      id: "breastcancer",
      title: "Breast Cancer Detection via Ultrasound",
      description:
        "Deep learning model using ultrasound images for breast cancer detection. Developed for Final Year Research Project using TensorFlow, Keras, and OpenCV with high diagnostic accuracy.",
      tags: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Streamlit"],
      links: { code: "https://github.com/tejHacks/breast-cancer-ultrasound" },
      images: ["#", "#", "#"],
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
      images: ["#", "#", "#"],
    },
  ];

  // automatically assign four placeholder images per project based on id
  [mobileProjects, webProjects, mlProjects].forEach((group) => {
    group.forEach((p) => {
      // ensure up to 4 images; additional files were copied into /public/projects
      p.images = [1, 2, 3, 4].map((i) => `/projects/${p.id}-${i}.jpg`);
    });
  });

  const ProjectModal = ({
    project,
  }: {
    project: (typeof mobileProjects)[0];
  }) => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
        <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-card border border-border p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
            </div>
            <button
              onClick={() => setSelectedProject(null)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mb-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {project.images.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-video bg-muted rounded-lg flex items-center justify-center"
                >
                  <img
                    onClick={() => setFullscreenSrc(img)}
                    src={img}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full h-full object-cover rounded-lg cursor-pointer"
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
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-lg bg-primary text-primary-foreground py-2 text-center hover:opacity-90 transition-opacity"
              >
                Live Demo
              </a>
            )}
            {project.links.code && (
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
  };

  const ProjectCard = ({
    project,
  }: {
    project: (typeof mobileProjects)[0];
  }) => (
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

  return (
    <section
      id="projects"
      className="border-t border-border px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold">Featured Projects</h2>

        {/* Mobile Projects */}
        <div className="mb-16">
          <h3 className="mb-6 text-2xl font-semibold">Mobile Applications</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {mobileProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Web Development Projects */}
        <div className="mb-16">
          <h3 className="mb-6 text-2xl font-semibold">Web Development</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {webProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Machine Learning & AI Projects */}
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
          project={
            mobileProjects.find((p) => p.id === selectedProject) ||
            webProjects.find((p) => p.id === selectedProject) ||
            mlProjects.find((p) => p.id === selectedProject)!
          }
        />
      )}

      {/* fullscreen overlay */}
      {fullscreenSrc && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/90"
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
