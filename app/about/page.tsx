export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-2xl font-semibold text-white">About</h1>
      <section className="mt-6 space-y-4 text-gray-400">
        <p>
          I'm an application developer building toward full-stack
          engineering — learning by actually shipping things, not just
          studying them.
        </p>
        <p>
          This portfolio is where that happens in public. Every project
          here is real and running, including this site itself, which is
          Case Study #1. I'm early in this journey, and I'd rather show
          honest, working things as I go than wait until it looks
          impressive.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-medium text-white">Stack</h2>
        <p className="mt-2 text-gray-400">
          Next.js, TypeScript, Tailwind CSS, Framer Motion, pnpm, deployed
          on Vercel. Backend and full-stack work is next — not claimed
          until it's real.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-medium text-white">Contact</h2>
        <p className="mt-2 text-gray-400">

          <a
            href="mailto:phobpynatthakorn@gmail.com"
            className="hover:text-white"
          >
            phobpynatthakorn@gmail.com
          </a>

          <a href="https://github.com/ppoiipy"
            className="hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/natthakorn-tainkrue-660171265/"
            className="hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </section>
    </main>
  );
}