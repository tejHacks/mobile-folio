"use client";

import { useState } from "react";

export function Writing() {
  const [showMore, setShowMore] = useState(false);
  const articles = [
    {
      title:
        "Machine Learning: An Introduction to the Basics (Without the Hype)",
      excerpt: "Machine Learning has a reputation problem. Let's demystify it.",
      date: "Feb 9",
      readTime: "30 min read",
      link: "#",
    },
    {
      title: "Node.js: Protecting Your Backend Like a Pro",
      excerpt:
        "In software development, your backend is like your home — and Node.js gives you the keys. But a strong door without a lock invites trouble.",
      date: "Oct 16, 2025",
      readTime: "8 min read",
      link: "#",
    },
    {
      title:
        "10 Lessons from a Computer Science Student in a Private Nigerian University",
      excerpt:
        "Navigating the private school maze and sharing lessons learned.",
      date: "Jun 30, 2025",
      readTime: "15 min read",
      link: "#",
    },
    {
      title: "How to Start JavaScript and Solidify Your Learning Process",
      excerpt:
        "Starting with JavaScript and solidifying your learning process involves theory, practice, and consistency.",
      date: "Nov 14, 2023",
      readTime: "10 min read",
      link: "#",
    },
    {
      title: "C++: The Language of the Millennium",
      excerpt:
        "Some languages arrive quietly and solve a problem. Others arrive loudly, burn bright, and fade.",
      date: "Feb 12",
      readTime: "12 min read",
      link: "#",
    },
    {
      title:
        "Overplanning, Comparison, and Emotional Hoarding: What Being a Developer is Actually Like",
      excerpt: "Software development isn't hard because of code.",
      date: "Feb 10",
      readTime: "7 min read",
      link: "#",
    },
    {
      title: "Speaker Diarization: Teaching Machines Who Spoke When",
      excerpt:
        "Speech recognition learned how to hear. Speaker diarization learned how to pay attention.",
      date: "Feb 10",
      readTime: "9 min read",
      link: "#",
    },
    {
      title: "PHP: The Right Tool, at the Right Time",
      excerpt:
        "There's a strange ritual in the tech industry: we declare tools dead long before checking if they're still working.",
      date: "Feb 9",
      readTime: "8 min read",
      link: "#",
    },
    {
      title: "Things University Didn't Teach Me About Software",
      excerpt:
        "I graduated with a Computer Science degree. It wasn't all roses, but it also wasn't useless.",
      date: "Feb 1",
      readTime: "11 min read",
      link: "#",
    },
    {
      title:
        "From Introvert to Tech: A Journey of Personal Growth and Community Connection",
      excerpt:
        "I didn't grow up loud. I grew up quiet, observant, and curious.",
      date: "Jan 30",
      readTime: "10 min read",
      link: "#",
    },
    {
      title: "40 JavaScript Jokes That Will Make You Laugh (Or Cry)",
      excerpt:
        "JavaScript developers have a special kind of humor. We laugh at our pain.",
      date: "Jan 30",
      readTime: "6 min read",
      link: "#",
    },
    {
      title: "20 PHP Project Ideas for Software Developers",
      excerpt:
        "Practical, scalable, and resume-worthy systems you can actually build.",
      date: "Dec 28, 2025",
      readTime: "14 min read",
      link: "#",
    },
    {
      title: "PHP Isn't Dead — It's Quietly Paying Developers' Bills",
      excerpt: "Every few months, someone announces that PHP is dead.",
      date: "Dec 28, 2025",
      readTime: "8 min read",
      link: "#",
    },
    {
      title: "Inside React Native: How Your Code Becomes an App",
      excerpt:
        "You write JavaScript, and somehow it becomes a mobile app like magic. But it's not magic. It's engineering.",
      date: "Oct 21, 2025",
      readTime: "10 min read",
      link: "#",
    },
    {
      title: "Linux vs Mac for Developers in 2025: The Reality Check",
      excerpt:
        "A developer is only as good as his tools. But what if your tool is running on 1.7 GHz and faith?",
      date: "Oct 18, 2025",
      readTime: "9 min read",
      link: "#",
    },
    {
      title:
        "React Native vs Flutter (Pros and Cons): A Mobile Developer's Honest Guide",
      excerpt:
        "Every developer has that one framework that feels like home until you meet another one.",
      date: "Oct 18, 2025",
      readTime: "12 min read",
      link: "#",
    },
    {
      title: "Lessons From HNG: Surviving Stage 0 as a Developer",
      excerpt:
        "Stage 0 will test your Wi-Fi, your patience, and your sense of purpose.",
      date: "Oct 18, 2025",
      readTime: "7 min read",
      link: "#",
    },
    {
      title: "10 Linux Distros Every Web Developer Should Try in 2025",
      excerpt:
        "If you're a web developer still clinging to Windows, it's time to taste freedom.",
      date: "Oct 16, 2025",
      readTime: "11 min read",
      link: "#",
    },
    {
      title: "Accessing Device Information in JavaScript",
      excerpt:
        "Why device information matters and how to access it in JavaScript.",
      date: "Oct 16, 2025",
      readTime: "6 min read",
      link: "#",
    },
    {
      title: "10 Unique React App Ideas for Nigerians",
      excerpt: "Nigeria is more than just a tech market. It's a movement.",
      date: "Oct 15, 2025",
      readTime: "13 min read",
      link: "#",
    },
    {
      title:
        "What is React Native? A Beginner's Guide to Cross-Platform Development",
      excerpt:
        "Building apps today is like speaking to different tribes. Let's simplify it.",
      date: "Oct 15, 2025",
      readTime: "9 min read",
      link: "#",
    },
    {
      title: "JavaScript Fundamentals: A Guide for Beginners",
      excerpt: "What is JavaScript and why it matters in 2025.",
      date: "Oct 15, 2025",
      readTime: "8 min read",
      link: "#",
    },
    {
      title: "Why Learn Linux As A Developer",
      excerpt:
        "Linux isn't just another OS. It's a fundamental part of the modern developer's toolkit.",
      date: "Aug 27, 2025",
      readTime: "10 min read",
      link: "#",
    },
    {
      title: "Why Learn Computer Science in 2025",
      excerpt:
        "Considering a career change or major? Let's talk about Computer Science.",
      date: "Aug 27, 2025",
      readTime: "9 min read",
      link: "#",
    },
    {
      title: "Cybersecurity Basics: Tips for Everyday Internet Users",
      excerpt:
        "The internet is incredible, but it comes with risks. Here's how to protect yourself.",
      date: "Dec 6, 2024",
      readTime: "7 min read",
      link: "#",
    },
    {
      title: "Linux: The Ultimate Operating System for Tech Enthusiasts",
      excerpt:
        "Linux is free, open-source, flexible, and secure. Here's why you should learn it.",
      date: "Aug 7, 2024",
      readTime: "10 min read",
      link: "#",
    },
  ];

  return (
    <section
      id="writing"
      className="border-t border-border px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold">Technical Writing</h2>

        <div className="space-y-4">
          {articles.slice(0, 5).map((article) => (
            <a
              key={article.title}
              href={article.link}
              className="group block rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:bg-card/80"
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <svg
                  className="h-5 w-5 shrink-0 text-primary opacity-0 transition-all group-hover:opacity-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </a>
          ))}

          {showMore &&
            articles.slice(5).map((article) => (
              <a
                key={article.title}
                href={article.link}
                className="group block rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:bg-card/80"
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold group-hover:text-primary">
                      {article.title}
                    </h3>
                    <p className="mb-3 text-sm text-muted-foreground">
                      {article.excerpt}
                    </p>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <svg
                    className="h-5 w-5 shrink-0 text-primary opacity-0 transition-all group-hover:opacity-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </a>
            ))}
        </div>

        {!showMore && (
          <button
            onClick={() => setShowMore(true)}
            className="mt-8 rounded-lg border border-primary px-6 py-2 font-medium text-primary transition-all hover:bg-primary/10"
          >
            View More Articles
          </button>
        )}
      </div>
    </section>
  );
}
