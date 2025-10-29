"use client";

import Head from "next/head";
import { useEffect, useState } from "react";

type Project = {
  title: string;
  description: string;
  image?: string;           // public path (e.g., "/images/p1.png")
  tags?: string[];
  href?: string;            // live/demo
  repo?: string;            // GitHub
};

const PROJECTS: Project[] = [
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website built with Next.js and TailwindCSS featuring a UNC-inspired design system.",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    href: "https://saikothapalli.com",
    repo: "https://github.com/yourusername/portfolio"
  },
  {
    title: "BeAM Tools Dashboard",
    description: "Full-stack application for managing makerspace tools and improving workflows at UNC BeAM.",
    tags: ["React", "Spring Boot", "PostgreSQL"],
    image: "/images/beam-tools.png",
    repo: "https://github.com/yourusername/beam-tools"
  },
  {
    title: "Chapel Thrill Escapes",
    description: "Interactive puzzle system built with React for Chapel Thrill Escapes, enhancing the escape room experience.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/images/escape-room.png",
    href: "https://chapelthrillescapes.com"
  },
  {
    title: "Data Analytics Platform",
    description: "Cloud-based analytics platform leveraging AWS services for processing and visualizing large datasets.",
    tags: ["Python", "AWS", "React"],
    image: "/images/analytics.png",
    repo: "https://github.com/yourusername/data-analytics"
  }
];

type SectionId = "about" | "experience" | "work" | "contact";
const SECTIONS: { id: SectionId; label: string }[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [active, setActive] = useState<SectionId | "home">("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id as SectionId);
      },
      { threshold: 0.55 }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 88; // header height
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Sai Kothapalli — UNC Themed</title>
        <meta name="description" content="UNC-themed portfolio" />
      </Head>

      <main>
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-unc-slate/60 bg-white/70 backdrop-blur">
          <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-serif text-2xl font-black tracking-tight text-unc-navy"
              aria-label="Go to top"
            >
              Sai Kothapalli
            </button>

            <nav className="flex gap-1">
              {SECTIONS.map(({ id, label }) => {
                const isActive = active === id;
                return (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="rounded-full px-4 py-2 text-sm font-medium transition hover:bg-unc-slate/60"
                    style={{
                      color: isActive ? "var(--unc-navy)" : "rgb(15 23 42)",
                      background: isActive ? "var(--unc-slate)" : "transparent",
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </button>
                );
              })}
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section id="home" className="relative flex min-h-[78vh] items-center">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, var(--unc-carolina) 0%, #eaf3fa 45%, var(--unc-offwhite) 100%)",
            }}
          />
          <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2">
            <div>
              <h1 className="font-serif text-5xl font-black leading-tight text-unc-navy md:text-6xl">
                Hello, I'm Sai Kothapalli
              </h1>
              <p className="mt-4 max-w-prose text-lg text-slate-700">
                Computer Science and Economics with a minor in History at UNC-Chapel Hill.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("work")}
                  className="rounded-xl bg-unc-navy px-5 py-3 font-semibold text-white shadow-sm transition hover:shadow"
                >
                  View Work
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="rounded-xl border border-unc-navy/30 bg-white px-5 py-3 font-semibold text-unc-navy transition hover:shadow-sm"
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-unc-slate/70 bg-white p-6 shadow-sm">
              <div className="space-y-3">
                <div className="h-3 w-1/3 rounded bg-unc-carolina" />
                <div className="h-3 w-2/3 rounded bg-slate-200" />
                <div className="h-3 w-1/2 rounded bg-slate-200" />
                <div className="h-48 rounded-xl bg-slate-100" />
              </div>
              <p className="mt-4 text-sm text-slate-600">Swap with a headshot or illustration.</p>
            </div>
          </div>
        </section>

        {/* Sections */}
        <Section id="about" title="About">
          <p>
            I’m a UNC-Chapel Hill student building full-stack apps (Spring Boot, React/Next.js,
            PostgreSQL, AWS). I like clean architectures, thoughtful UI, and data-driven features.
          </p>
        </Section>

        <Section id="experience" title="Experience">
          <ul className="list-inside list-disc space-y-2">
            <li>BeAM Makerspace — built tools and improved workflows.</li>
            <li>Chapel Thrill Escapes — refactor & React puzzle work.</li>
            <li>Projects across SWE, data, and DevOps.</li>
          </ul>
        </Section>

        <Section id="work" title="Work">
          <div className="grid gap-6 sm:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <article
                key={index}
                className="group rounded-2xl border border-unc-slate/70 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <h3 className="font-serif text-xl font-bold text-unc-navy">{project.title}</h3>
                <p className="mt-2 text-slate-700">{project.description}</p>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="mt-3 h-32 w-full rounded-xl object-cover"
                  />
                ) : (
                  <div className="mt-3 h-32 rounded-xl bg-slate-100" />
                )}
                {project.tags && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="rounded-full bg-unc-slate/40 px-2.5 py-1 text-xs font-medium text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-4 flex gap-3">
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-unc-carolina hover:text-unc-navy"
                    >
                      Demo →
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-unc-carolina hover:text-unc-navy"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <form
            className="space-y-4 rounded-2xl border border-unc-slate/70 bg-white p-6 shadow-sm"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! Replace with your form logic.");
            }}
          >
            <Field label="Name">
              <input className="input" placeholder="Your name" required />
            </Field>
            <Field label="Email">
              <input type="email" className="input" placeholder="you@unc.edu" required />
            </Field>
            <Field label="Message">
              <textarea className="input" rows={5} placeholder="Say hello!" required />
            </Field>
            <button type="submit" className="btn-primary">
              Send
            </button>
          </form>
        </Section>

        <footer className="py-10 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Sai Kothapalli
        </footer>
      </main>
    </>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: SectionId;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mx-auto max-w-5xl px-4 py-20">
        <h2 className="font-serif text-3xl font-black tracking-tight text-unc-navy">{title}</h2>
        <div className="prose prose-slate mt-6 max-w-none">{children}</div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-800">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
