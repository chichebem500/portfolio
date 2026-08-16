export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-10 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold text-white">Akachukwu Kingsley</p>
          <p className="mt-1 text-sm text-gray-500">Full Stack Developer</p>
        </div>

        <div className="flex gap-6 text-sm text-gray-400">
          <a
            href="mailto:akachukwuchebem410@gmail.com"
            className="transition-colors hover:text-white"
          >
            Email
          </a>
          <a
            href="tel:09049929312"
            className="transition-colors hover:text-white"
          >
            Phone
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6">
        <p className="text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Akachukwu Kingsley. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
