import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-white/10 bg-zinc-950 px-5 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
            Projects
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Things I&apos;ve built.
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-400">
            A collection of project placeholders, ready to be replaced with
            real case studies, screenshots, and links.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-black transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
            >
              <div className="relative flex h-52 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-blue-500/15 via-zinc-900 to-black">
                <div className="absolute h-32 w-48 rounded-xl border border-white/10 bg-black/50 shadow-2xl transition duration-300 group-hover:scale-105 group-hover:border-blue-400/40" />
                <span className="relative text-sm font-medium text-gray-400">
                  Preview coming soon
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                  <span className="font-medium text-gray-500">
                    Source link to be added
                  </span>
                  <span className="font-medium text-blue-300/70">
                    Live preview to be added
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
