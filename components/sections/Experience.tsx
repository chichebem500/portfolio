import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-white/10 bg-zinc-950 px-5 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
            Experience
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            What I&apos;m focused on.
          </h2>
        </div>

        <div className="space-y-8">
          {experience.map((item) => (
            <article
              key={`${item.role}-${item.company}`}
              className="relative border-l border-white/10 pl-8"
            >
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-zinc-950" />

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.role}
                  </h3>

                  <p className="mt-1 text-blue-400">
                    {item.company}
                  </p>
                </div>

                <span className="text-sm text-gray-500">
                  {item.period}
                </span>
              </div>

              <p className="mt-5 max-w-3xl leading-7 text-gray-400">
                {item.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
