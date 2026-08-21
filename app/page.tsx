import Link from "next/link";
import { ProjectCard } from "@/components/ui/ProjectCard";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      {/* Hero */}
      <section className="text-center">
        <p className="mb-4 text-sm text-gray-500">
          Application developer, building toward full-stack — in public
        </p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">
          I build real software.
          <br />
          and this site shows exactly how.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-gray-400">
          Every project here is real and running — including this site,
          which is Case Study #1.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex h-10 items-center justify-center rounded-md bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-gray-200"
          >
            View projects
          </Link>
          <Link
            href="https://github.com/ppoiipy/portfolio"
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-700 px-4 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Read the code
          </Link>
        </div>
      </section>

      {/* Meta row */}
      <section className="mt-16 grid grid-cols-3 gap-4 border-y border-gray-800 py-6 text-center text-sm">
        <div>
          <p className="text-gray-500">Case study #1</p>
          <p className="text-white">This portfolio</p>
        </div>
        <div>
          <p className="text-gray-500">Stack</p>
          <p className="text-white">Next.js · TypeScript</p>
        </div>
        <div>
          <p className="text-gray-500">Status</p>
          <p className="text-white">In progress, in public</p>
        </div>
      </section>

      {/* Featured project */}
      <section className="mt-16">
        <ProjectCard
          slug="this-portfolio"
          title="This portfolio"
          description="Built in public — the site itself is Case Study #1."
          stack={["Next.js", "TypeScript", "Tailwind"]}
          status="in-progress"
        />
      </section>

      {/* Links out */}
      <section className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3">
        <Link
          href="/playground"
          className="rounded-lg border border-gray-800 p-4 text-sm text-gray-400 transition-colors hover:border-gray-600 hover:text-white"
        >
          Playground →
        </Link>
        <Link
          href="/articles"
          className="rounded-lg border border-gray-800 p-4 text-sm text-gray-400 transition-colors hover:border-gray-600 hover:text-white"
        >
          Articles →
        </Link>
        <Link
          href="/about"
          className="rounded-lg border border-gray-800 p-4 text-sm text-gray-400 transition-colors hover:border-gray-600 hover:text-white"
        >
          About →
        </Link>
      </section>
    </main>
  );
}