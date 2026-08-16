import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-white/10 bg-zinc-950 px-5 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
            Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Technologies I work with.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-400">
            A collection of technologies and tools I use to design, build,
            and maintain modern web applications.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="rounded-2xl border border-white/10 bg-black/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.03]"
            >
              <h3 className="text-xl font-semibold text-white">
                {skill.category}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {skill.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
