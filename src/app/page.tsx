"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 text-white scroll-smooth">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold">Pieter Jacobus Vermeulen</h1>

          <div className="relative" ref={menuRef}>
            <button
              className="
              border
              border-gray-800
              p-2
              transition-all
              duration-200
              hover:border-blue-500
              hover:bg-gray-800
              "
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <div
              className={`absolute right-0 mt-px w-64 overflow-hidden rounded-none border border-gray-800 bg-gray-900 transition-all duration-300 ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "pointer-events-none opacity-0 -translate-y-2"
              }`}
            >
              <div
                className={`flex flex-col gap-2 px-4 py-4 transition-all duration-300 ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-2 opacity-0"
                }`}
              >
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-none px-4 py-3 transition-all duration-200 hover:bg-gray-800 hover:text-blue-400"
                >
                  About
                </a>
                <a
                  href="#skills"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-none px-4 py-3 transition-all duration-200 hover:bg-gray-800 hover:text-blue-400"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-none px-4 py-3 transition-all duration-200 hover:bg-gray-800 hover:text-blue-400"
                >
                  Projects
                </a>
                <a
                  href="#education"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-none px-4 py-3 transition-all duration-200 hover:bg-gray-800 hover:text-blue-400"
                >
                  Education
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-none px-4 py-3 transition-all duration-200 hover:bg-gray-800 hover:text-blue-400"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>


      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
        <Image
          src="/profile.jpeg"
          alt="Pieter Jacobus Vermeulen"
          width={160}
          height={160}
          className="mb-8 rounded-none object-cover border border-gray-700"
        />

        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gray-500">
        SOFTWARE ENGINEER • WEB DEVELOPER
        </p>
        <h1 className="text-5xl font-bold">Pieter Jacobus Vermeulen</h1>

        <p className="mt-6 max-w-2xl text-gray-300">
          Passionate about building modern web applications, embedded systems,
          and solving real-world problems using software and technology.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          <a
            href="/PJV_CV.pdf"
            download
            className="rounded-none border border-gray-700 bg-gray-900 px-6 py-3 transition-colors duration-200 hover:border-blue-500 hover:bg-gray-800"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-10 text-4xl font-semibold tracking-tight">About Me</h2>
        <div className="mb-9 h-px w-69 bg-gray-800" />
        <p className="max-w-3xl text-gray-300 leading-8">
          Dedicated Software Developer with strong skills in managing, problem
          solving and improving. Currently pursuing a Bachelor of Science in
          Information Technology at North-West University. Working towards
          creating a bigger, better and more complete future.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-900 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-4xl font-semibold tracking-tight">Technical Skills</h2>
          <div className="mb-9 h-px w-69 bg-gray-800" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <SkillCard
              title="Languages"
              items={[
                "TypeScript",
                "JavaScript",
                "Python",
                "HTML",
                "Java",
                "CSS",
                "SQL",
                "C++",          
                "C#",
              ]}
            />

            <SkillCard
              title="Frameworks"
              items={["React", "Next.js", "Tailwind CSS"]}
            />

            <SkillCard
              title="Tools"
              items={[
                "Git",
                "GitHub",
                "VS Code",
                "Vercel",
                "Linux",
                "Eclipse",
                "Visual Studio",
                "Microsoft Office",
              ]}
            />

            <SkillCard
              title="Databases"
              items={[
                "PostgreSQL",
                "Supabase",
                "MySQL",
                "Oracle Database",
                "SQLite",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-10 text-4xl font-semibold tracking-tight">Projects</h2>
        <div className="mb-9 h-px w-69 bg-gray-800" />
        <div className="grid gap-8 md:grid-cols-2">
          <ProjectCard
            title="Portfolio Website"
            description="Personal website built with Next.js and Tailwind CSS."
            githubUrl="https://github.com/ClassyPJ/PJ-s_CV.git"
          />
        </div>
      </section>

      {/* Education */}
      <section id="education" className="bg-gray-900 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-4xl font-semibold tracking-tight">Education</h2>
          <div className="mb-9 h-px w-69 bg-gray-800" />
          <div className="rounded-none border border-gray-800 bg-gray-900 p-6 ">
            <h3 className="text-xl font-semibold">
              BSc Information Technology
            </h3>

            <p className="text-gray-400">North-West University</p>

            <p className="mt-2 text-gray-300">Currently studying</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-10 text-4xl font-semibold tracking-tight">Contact</h2>
        <div className="mb-9 h-px w-69 bg-gray-800" />
        <div className="max-w-xl space-y-4 text-lg">
          <p>Email: pieterjacobusvermeulen@gmail.com</p>

          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/pieter-jacobus-vermeulen-2530382b7?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              className="text-blue-400 transition-colors duration-200 hover:text-blue-300"
            >
              linkedin.com/in/pieter-jacobus-vermeulen
            </a>
          </p>

          <p>
            GitHub:{" "}
            <a href="https://github.com/ClassyPJ" className="text-blue-400 transition-colors duration-200 hover:text-blue-300">
              github.com/ClassyPJ
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 Pieter Jacobus Vermeulen
      </footer>
    </main>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-none border border-gray-800 bg-gray-900 p-6  transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>

      <ul className="space-y-2 text-gray-300">
        {items.map((item) => (
          <li key={item}>☰ {item}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  githubUrl,
}: {
  title: string;
  description: string;
  githubUrl: string;
}) {
  return (
    <div className="rounded-none border border-gray-800 bg-gray-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">
      <h3 className="text-2xl font-semibold">{title}</h3>

      <p className="mt-4 text-gray-300">{description}</p>

      <div className="mt-6 flex gap-2">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
          border
          border-gray-700
          bg-gray-900
          px-5
          py-3
          rounded-none
          transition-colors
          duration-200
          hover:border-blue-500
          hover:text-blue-400
          "
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
