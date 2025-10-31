"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import { Experience, EXPERIENCES } from "../data/experiences";
import { Project, PROJECTS } from "../data/projects";
import { Contact, CONTACTS } from "../data/contact_data";
import HeroImage from "../components/HeroImage";


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
    // Ensure the Projects section's title (h2) sits closer to the top beneath the sticky header
    const headerEl = document.querySelector("header") as HTMLElement | null;
    const headerHeight = headerEl?.offsetHeight ?? 80; // h-20 ≈ 80px

    // For Projects, align to the h2 inside the section; fallback to section element
    const targetEl = id === "work" ? (el.querySelector("h2") as HTMLElement | null) ?? el : el;
    const gap = id === "work" ? headerHeight + 8 : 40; // tighter placement for Projects
    const y = targetEl.getBoundingClientRect().top + window.scrollY - gap;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Sai Kothapalli Portfolio</title>
        <meta name="description" content="Portfolio" />
      </Head>

      <main>
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-unc-slate/60 bg-white/70 backdrop-blur">
          <div className="mx-auto flex h-16 sm:h-20 max-w-6xl items-center justify-between px-3 sm:px-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-serif text-lg sm:text-2xl font-black tracking-tight text-unc-navy"
              aria-label="Go to top"
            >
              Sai Kothapalli
            </button>

            <nav className="flex gap-1 sm:gap-2">
              {SECTIONS.map(({ id, label }) => {
                const isActive = active === id;
                return (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="rounded-full px-2 py-1.5 sm:px-5 sm:py-2.5 text-xs sm:text-base font-semibold transition-all hover:bg-unc-navy hover:text-white hover:shadow-md"
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
                "linear-gradient(180deg, var(--unc-carolina) 0%, #eaf3fa 70%, var(--unc-offwhite) 100%)",
            }}
          />
          <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl font-black leading-tight text-unc-navy md:text-6xl">
                Hello, I'm Sai Kothapalli
              </h1>
              <p className="mt-4 max-w-prose text-base sm:text-lg text-slate-700">
                Computer Science﹠Economics with History Minor @ UNC-Chapel Hill.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("work")}
                  className="rounded-xl bg-unc-navy px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-sm transition hover:shadow"
                >
                  View Projects
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="rounded-xl border border-unc-navy/30 bg-white px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-unc-navy transition hover:shadow-sm"
                >
                  Contact
                </button>
              </div>
            </div>

                    <div className="mt-8 md:mt-16 w-full max-w-xl flex-shrink-0 lg:mt-0">
          {/* card shell you had */}
          <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-xl ring-1 ring-slate-900/10">
            {/* header bars etc. can go above if you still want them */}
            <HeroImage />

            <p className="mt-4 text-xs sm:text-sm text-slate-600 text-center">
              The Old Well, UNC-Chapel Hill
            </p>
          </div>
        </div>

          </div>
        </section>

        {/* Sections */}
        <Section id="about" title="About">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Image on the left with 3D effect */}
            <div 
              className="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm"
              style={{ perspective: "800px" }}
            >
              <div style={{ transformStyle: "preserve-3d" }}>
                <img 
                  src="/about-image.jpg" 
                  alt="About me"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-300 hover:scale-105"
                  style={{
                    transformOrigin: "center center"
                  }}
                />
              </div>
            </div>
            
            {/* Text on the right */}
            <div>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-700">
                I'm Sai Kothapalli, a Computer Science and Economics student at UNC–Chapel Hill with a passion for building technology that connects people, tells stories, and drives real-world impact. Whether I'm developing full-stack applications that streamline how communities share ideas, experimenting with machine learning projects that uncover patterns in data, or helping design interactive puzzles for Chapel Thrill Escapes, I love turning complex systems into intuitive experiences. Outside of coding, I work at the BeAM Makerspace, where I help others bring creative projects to life, and I lead cultural initiatives through Sangam to strengthen South Asian representation on campus. My goal is to merge creativity, engineering, and social good—building tools that make information and innovation more accessible to everyone.
              </p>
            </div>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="flex items-center gap-4">
            {/* Left arrow */}
            {experienceTotalPages > 1 && (
              <button
                onClick={() => setExperiencePage((p) => Math.max(1, p - 1))}
                disabled={experiencePage === 1}
                className="rounded-full border-2 border-unc-navy/70 p-2 sm:p-3 text-unc-navy hover:bg-unc-navy hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
                aria-label="Previous page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            
            {/* Cards grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentExperiences.map((exp, index) => (
                <article 
                  key={index} 
                  className="rounded-2xl border border-unc-slate/70 p-4 sm:p-6 shadow-sm hover:shadow-md transition relative overflow-hidden flex flex-col h-[500px] sm:h-[600px]"
                  style={{
                    background: "linear-gradient(180deg, var(--unc-carolina) 0%, #eaf3fa 70%, var(--unc-offwhite) 100%)"
                  }}
                >
                  {/* Header with fixed height */}
                  <div className="flex justify-between items-start mb-3 sm:mb-4 min-h-[90px] sm:min-h-[100px]">
                    <div className="flex-1 pr-3 sm:pr-4">
                      <h3 className="text-lg sm:text-xl font-semibold text-unc-navy leading-tight">{exp.company}</h3>
                      <h4 className="text-sm sm:text-base text-slate-700 mt-1.5 sm:mt-2 leading-tight">{exp.title}</h4>
                      <div className="text-xs text-slate-600 mt-1.5 sm:mt-2 space-y-0.5">
                        <div>{exp.date}</div>
                        <div>{exp.location}</div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12">
                      {exp.image ? (
                        <img 
                          src={exp.image} 
                          alt={`${exp.company} logo`}
                          className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg"
                        />
                      ) : (
                        <div className="w-10 h-10 sm:w-12 sm:h-12"></div>
                      )}
                    </div>
                  </div>
                  
                  {/* Description with scroll */}
                  <div className="flex-1 overflow-y-auto mb-3 sm:mb-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{exp.description}</p>
                  </div>
                  
                  {/* Footer with fixed height */}
                  <div className="pt-2 sm:pt-3 border-t border-slate-300/50 h-[40px] sm:h-[44px] flex items-center">
                    {exp.link ? (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm font-medium text-blue-800 hover:underline hover:text-blue-900"
                      >
                        Learn more →
                      </a>
                    ) : (
                      <div className="h-5"></div>
                    )}
                  </div>
                </article>
              ))}
            </div>
            
            {/* Page indicator (optional, centered below cards) */}
            {experienceTotalPages > 1 && (
              <div className="text-center mt-4">
                <span className="text-sm text-slate-600">
                  Page {experiencePage} of {experienceTotalPages}
                </span>
              </div>
            )}
          </div>
            
            {/* Right arrow */}
            {experienceTotalPages > 1 && (
              <button
                onClick={() => setExperiencePage((p) => Math.min(experienceTotalPages, p + 1))}
                disabled={experiencePage === experienceTotalPages}
                className="rounded-full border-2 border-unc-navy/70 p-2 sm:p-3 text-unc-navy hover:bg-unc-navy hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
                aria-label="Next page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </Section>

        <Section id="work" title="Projects">
          <div className="flex items-center gap-4">
            {/* Left arrow */}
            {projectsTotalPages > 1 && (
              <button
                onClick={() => setProjectsPage((p) => Math.max(1, p - 1))}
                disabled={projectsPage === 1}
                className="rounded-full border-2 border-unc-navy/70 p-2 sm:p-3 text-unc-navy hover:bg-unc-navy hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
                aria-label="Previous page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            
            {/* Cards grid */}
            <div className="flex-1">
              <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
                {currentProjects.map((project, index) => (
                <article
                  key={index}
                  className="group rounded-2xl border border-unc-slate/70 p-4 sm:p-5 shadow-sm transition hover:shadow-md relative overflow-hidden"
                  style={{
                    background: "linear-gradient(180deg, var(--unc-carolina) 0%, #eaf3fa 70%, var(--unc-offwhite) 100%)"
                  }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-base sm:text-lg font-semibold">{project.title}</h3>
                    {project.href && (
                      <h6 className="text-xs sm:text-sm text-gray-500">
                        <a
                          href={project.href}
                          className="text-blue-800 hover:underline hover:text-blue-900"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>
                      </h6>
                    )}
                  </div>
                  <p className="text-sm sm:text-base font-normal mt-2">{project.description}</p>
                  {project.tags && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="rounded-full bg-unc-slate/40 px-2.5 py-1 text-xs font-medium text-slate-700 transition-all duration-200 hover:scale-110 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
            
            {/* Page indicator */}
            {projectsTotalPages > 1 && (
              <div className="text-center mt-4">
                <span className="text-sm text-slate-600">
                  Page {projectsPage} of {projectsTotalPages}
                </span>
              </div>
            )}
          </div>
            
            {/* Right arrow */}
            {projectsTotalPages > 1 && (
              <button
                onClick={() => setProjectsPage((p) => Math.min(projectsTotalPages, p + 1))}
                disabled={projectsPage === projectsTotalPages}
                className="rounded-full border-2 border-unc-navy/70 p-2 sm:p-3 text-unc-navy hover:bg-unc-navy hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
                aria-label="Next page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-4">
            {CONTACTS.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target={contact.link.startsWith("http") ? "_blank" : undefined}
                rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center transition-transform duration-200 hover:scale-110"
                aria-label={contact.title}
              >
                {contact.image && (
                  <img
                    src={contact.image}
                    alt={contact.title}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain transition-all duration-200 group-hover:drop-shadow-lg"
                  />
                )}
                <span className="mt-2 text-xs text-slate-600">{contact.title}</span>
              </a>
            ))}
          </div>
        </Section>

        <footer className="py-10 text-center text-sm text-slate-600">
           Made with 🩵 by Sai Kothapalli
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
  <section id={id} className={id === "contact" ? "" : "min-h-screen"}>
      <div className={id === "contact" ? "mx-auto max-w-5xl px-3 sm:px-4 py-8 sm:py-12" : "mx-auto max-w-5xl px-3 sm:px-4 py-12 sm:py-20 pb-20 sm:pb-32"}>
        <h2 className="font-serif text-2xl sm:text-3xl font-black tracking-tight text-unc-navy">{title}</h2>
        <div className="prose prose-slate mt-4 sm:mt-6 max-w-none">{children}</div>
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
