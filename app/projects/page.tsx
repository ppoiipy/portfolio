import { ProjectCard } from "@/components/ui/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <section>
        <h1 className="text-2xl font-semibold text-white">Projects</h1>
        <p className="mt-2 text-gray-400">
          One real case study right now — this site. More will land here as
          they're actually finished, not before.
        </p>
      </section>

      <section className="mt-10 space-y-6">
        <ProjectCard
          slug="this-portfolio"
          title="This portfolio"
          description="Built in public — the site itself is Case Study #1."
          stack={["Next.js", "TypeScript", "Tailwind"]}
          status="in-progress"
        />

        {/* Honest empty state — not hiding the gap, naming it */}
        <div className="rounded-lg border border-dashed border-gray-800 p-6 text-center text-sm text-gray-500">
          More case studies go here once they're real and finished.
          <br />
          No placeholders, no "coming soon" message — just not here yet.
        </div>
      </section>
    </main>
  );
}