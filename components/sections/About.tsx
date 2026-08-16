export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-white/10 bg-zinc-950 px-5 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
              About Me
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Building ideas into{" "}
              <span className="text-blue-500">digital experiences.</span>
            </h2>
          </div>

          <div className="space-y-5 text-gray-400">
            <p className="text-lg leading-8">
              I&apos;m Akachukwu Kingsley, a Full Stack Developer passionate
              about building modern web applications and solving real-world
              problems with technology.
            </p>

            <p className="leading-7">
              I enjoy working across both the frontend and backend, creating
              interfaces that are clean and responsive while building reliable
              systems behind them.
            </p>

            <p className="leading-7">
              My goal is to continuously improve my skills, explore new
              technologies, and create software that provides meaningful
              experiences for users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
