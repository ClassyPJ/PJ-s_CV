import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-gray-900/90 backdrop-blur border-b border-gray-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold">Pieter Jacobus Vermeulen</h1>

          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
            <a href="#skills" className="hover:text-blue-400">
              Skills
            </a>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
            <a href="#education" className="hover:text-blue-400">
              Education
            </a>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
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
          className="mb-8 rounded-full object-cover border-4 border-blue-500"
        />
        <h1 className="text-5xl font-bold">Pieter Jacobus Vermeulen</h1>

        <p className="mt-4 text-2xl text-blue-400">Software Developer</p>

        <p className="mt-6 max-w-2xl text-gray-300">
          Passionate about building modern web applications, embedded systems,
          and solving real-world problems using software and technology.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-blue-600 px-6 py-3 hover:bg-blue-700"
          >
            View Projects
          </a>

          <a
            href="/PJV_CV.pdf"
            download
            className="rounded-lg border border-gray-600 px-6 py-3 hover:bg-gray-800"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold">About Me</h2>

        <p className="text-gray-300 leading-8">
          Dedicated Software Developer with strong skills in managing, problem
          solving and improving. Currently pursuing a Bachelor of Science in
          Information Technology at North-West University. Working towards
          creating a bigger, beter and more complete future.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-900 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-3xl font-bold">Technical Skills</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <SkillCard
              title="Languages"
              items={[
                "TypeScript",
                "JavaScript",
                "HTML",
                "CSS",
                "SQL",
                "Python",
                "Java",
                "C#",
                "C++",
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
                "Eclips",
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
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-3xl font-bold">Projects</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <ProjectCard
            title="Portfolio Website"
            description="Personal website built with Next.js and Tailwind CSS."
            githubUrl="https://github.com/ClassyPJ/PJ-s_CV.git"
          />
        </div>
      </section>

      {/* Education */}
      <section id="education" className="bg-gray-900 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-3xl font-bold">Education</h2>

          <div className="rounded-xl bg-gray-800 p-6">
            <h3 className="text-xl font-semibold">
              BSc Information Technology
            </h3>

            <p className="text-gray-400">North-West University</p>

            <p className="mt-2 text-gray-300">currently obtaining</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-3xl font-bold">Contact</h2>

        <div className="space-y-3 text-lg">
          <p>Email: pieterjacobusvermeulen@gmail.com</p>

          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/pieter-jacobus-vermeulen-2530382b7?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              className="text-blue-400"
            >
              linkedin.com/in/pieter-jacobus-vermeulen
            </a>
          </p>

          <p>
            GitHub:{" "}
            <a href="https://github.com/ClassyPJ" className="text-blue-400">
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
    <div className="rounded-xl bg-gray-800 p-6">
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>

      <ul className="space-y-2 text-gray-300">
        {items.map((item) => (
          <li key={item}>• {item}</li>
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
    <div className="rounded-xl border border-gray-800 p-6">
      <h3 className="text-2xl font-semibold">{title}</h3>

      <p className="mt-4 text-gray-300">{description}</p>

      <div className="mt-6 flex gap-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
