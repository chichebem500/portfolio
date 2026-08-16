export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-20 items-center justify-center overflow-hidden px-5 pb-16 pt-28 sm:px-6 sm:pt-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px] sm:h-96 sm:w-96" />
        <div className="absolute -right-24 bottom-12 h-56 w-56 rounded-full bg-sky-500/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      </div>

      <div className="relative z-10 max-w-4xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blue-400 sm:text-sm sm:tracking-[0.35em]">
          Full Stack Developer
        </p>

        <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl">
          Hi, I&apos;m <span className="text-blue-500">Akachukwu Kingsley</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
          I build modern, responsive, and scalable web applications that turn
          ideas into thoughtful digital experiences.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#projects"
            className="rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-500"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.07]"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
