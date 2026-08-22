import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = projects[slug as Slug];
  if (!project) return {};
  return {
    title: project.title,
    description: project.problem,
  };
};

const projects = {
  "this-portfolio": {
    title: "This portfolio",
    status: "In progress, in public",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "class-variance-authority", "pnpm", "Vercel"],
    problem:
      "I wanted a portfolio that proves ability through real, inspectable engineering — not through claims. That meant the site itself needed to be the first proof, not just a container for other projects.",
    solution:
      "A Next.js + TypeScript site built and documented in public, starting from my actual current skill level — frontend-focused, full-stack in progress. Every page, component, and decision here is real.",
    architecture:
      "App Router, mostly server components with client components only where interactivity requires it (mobile nav toggle, CodeBlock's copy button). A components/ui design system (Button, Card, Badge, Navbar, Footer, ProjectCard, CodeBlock) built with Tailwind + class-variance-authority for typed variant handling. Content lives as code/MDX rather than a database-backed CMS, since a single-author site doesn't need that complexity yet.",
    challenges: [
      "pnpm's newer build-script approval step blocked install until sharp and unrs-resolver were explicitly approved.",
      "Added asChild-style button-as-link usage before actually implementing asChild support — caught before shipping invalid HTML, resolved by using plain styled Links instead of adding a dependency for two instances.",
      "Tailwind classes appeared to have no effect after an edit — turned out to be stale dev-server cache, not a code bug.",
    ],
    lessons: [
      "Decide component styling strategy (Tailwind + cva) before building the first component, not after — retrofitting variants later would've meant rewriting Button.",
      "Hard refresh before assuming a CSS change is broken.",
    ],
  },
} as const;

type Slug = keyof typeof projects;

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug as Slug];

  if (!project) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/projects" className="text-sm text-gray-500 hover:text-white">
        ← Projects
      </Link>

      <h1 className="mt-4 text-3xl font-semibold text-white">{project.title}</h1>
      <p className="mt-2 text-sm text-gray-500">{project.status}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-medium text-white">Problem</h2>
        <p className="mt-2 text-gray-400">{project.problem}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-medium text-white">Solution</h2>
        <p className="mt-2 text-gray-400">{project.solution}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-medium text-white">Architecture</h2>
        <p className="mt-2 text-gray-400">{project.architecture}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-medium text-white">Challenges (real, ongoing)</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-400">
          {project.challenges.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-medium text-white">Lessons Learned (so far)</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-400">
          {project.lessons.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </section>

      <p className="mt-10 text-sm text-gray-500">
        This case study grows as the build continues — see the live{" "}
        <Link href="https://github.com/ppoiipy/portfolio" className="underline hover:text-white">
          commit history
        </Link>
        .
      </p>
    </main>
  );
}