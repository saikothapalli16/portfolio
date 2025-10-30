"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import { Experience, EXPERIENCES } from "../data/experiences";
import { Project, PROJECTS } from "../data/projects";

type SectionId = "about" | "experience" | "work" | "contact";
const SECTIONS: { id: SectionId; label: string }[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [active, setActive] = useState<SectionId | "home">("home");

  // Experience pagination (3 per page)
  const [experiencePage, setExperiencePage] = useState(1);
  const experiencesPerPage = 3;
  const experienceTotalPages = Math.ceil(EXPERIENCES.length / experiencesPerPage);
  const experienceStart = (experiencePage - 1) * experiencesPerPage;
  const currentExperiences = EXPERIENCES.slice(
    experienceStart,
    experienceStart + experiencesPerPage
  );

  // Projects pagination (2x2 grid => 4 per page)
  const [projectsPage, setProjectsPage] = useState(1);
  const projectsPerPage = 4;
  const projectsTotalPages = Math.ceil(PROJECTS.length / projectsPerPage);
  const projectsStart = (projectsPage - 1) * projectsPerPage;
  const currentProjects = PROJECTS.slice(projectsStart, projectsStart + projectsPerPage);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        
        // If we're near the top of the page, set active to "home"
        if (window.scrollY < 100) {
          setActive("home");
          return;
        }
        
        // Otherwise, highlight the current section
        if (vis[0]) setActive(vis[0].target.id as SectionId);
      },
      { threshold: 0.3 }
    );
    // Observe all sections including home
    ["home", ...SECTIONS.map(s => s.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 40; // decreased offset for more scroll
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

            <nav className="flex gap-2">
              {SECTIONS.map(({ id, label }) => {
                const isActive = active === id;
                return (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="rounded-full px-5 py-2.5 text-base font-semibold transition-all hover:bg-unc-navy hover:text-white hover:shadow-md"
                    style={{
                      color: isActive ? "white" : "var(--unc-navy)",
                      background: isActive ? "var(--unc-navy)" : "var(--unc-slate)/10",
                      boxShadow: isActive ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
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
  <section id="home" className="relative flex min-h-screen items-center">
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
                  View Projects
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
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentExperiences.map((exp, index) => (
                <article key={index} className="rounded-2xl border border-unc-slate/70 bg-white p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-unc-navy">{exp.company}</h3>
                      <div className="mt-1">
                        <h4 className="text-lg text-slate-700">{exp.title}</h4>
                        <div className="text-sm text-slate-600">{exp.date} • {exp.location}</div>
                      </div>
                    </div>
                    {exp.image && (
                      <div className="flex-shrink-0 ml-4">
                        <img 
                          src={exp.image} 
                          alt={`${exp.company} logo`}
                          className="w-12 h-12 object-contain rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                  <p className="mt-3 text-slate-600">{exp.description}</p>
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-sm font-medium text-unc-carolina hover:underline"
                    >
                      Learn more →
                    </a>
                  )}
                </article>
              ))}
            </div>
            {experienceTotalPages > 1 && (
              <div className="flex justify-center gap-2 pt-4">
                <button
                  onClick={() => setExperiencePage((p) => Math.max(1, p - 1))}
                  disabled={experiencePage === 1}
                  className="rounded-lg border border-unc-slate/70 px-4 py-2 text-sm font-medium disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="flex items-center px-4 text-sm text-slate-600">
                  Page {experiencePage} of {experienceTotalPages}
                </span>
                <button
                  onClick={() => setExperiencePage((p) => Math.min(experienceTotalPages, p + 1))}
                  disabled={experiencePage === experienceTotalPages}
                  className="rounded-lg border border-unc-slate/70 px-4 py-2 text-sm font-medium disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </Section>

        <Section id="work" title="Projects">
          <div className="space-y-6">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
              {currentProjects.map((project, index) => (
                <article
                  key={index}
                  className="group rounded-2xl border border-unc-slate/70 bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    {project.href && (
                      <h6 className="text-sm text-gray-500">
                        <a
                          href={project.href}
                          className="text-blue-500 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>
                      </h6>
                    )}
                  </div>
                  <p className="text-base font-normal mt-2">{project.description}</p>
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
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm text-unc-carolina hover:underline"
                    >
                      View Source →
                    </a>
                  )}
                </article>
              ))}
            </div>
            {projectsTotalPages > 1 && (
              <div className="flex justify-center gap-2 pt-4">
                <button
                  onClick={() => setProjectsPage((p) => Math.max(1, p - 1))}
                  disabled={projectsPage === 1}
                  className="rounded-lg border border-unc-slate/70 px-4 py-2 text-sm font-medium disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="flex items-center px-4 text-sm text-slate-600">
                  Page {projectsPage} of {projectsTotalPages}
                </span>
                <button
                  onClick={() => setProjectsPage((p) => Math.min(projectsTotalPages, p + 1))}
                  disabled={projectsPage === projectsTotalPages}
                  className="rounded-lg border border-unc-slate/70 px-4 py-2 text-sm font-medium disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
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
  <section id={id} className="min-h-[calc(100vh-88px)]">
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
