"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-white/10 bg-zinc-950 px-5 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
              Contact
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s build something great.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-gray-400">
              Have a project, idea, or opportunity you&apos;d like to discuss?
              I&apos;d love to hear from you.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a
                  href="mailto:akachukwuchebem410@gmail.com"
                  className="mt-1 inline-block break-all text-lg text-white transition-colors hover:text-blue-400"
                >
                  akachukwuchebem410@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <a
                  href="tel:09049929312"
                  className="mt-1 inline-block text-lg text-white transition-colors hover:text-blue-400"
                >
                  09049929312
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black p-6 sm:p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-gray-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-gray-600 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-gray-600 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-gray-600 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-500"
              >
                Prepare Message
              </button>

              <p aria-live="polite" className="text-sm leading-6 text-gray-500">
                {submitted
                  ? "This form is ready for an email service, but submissions are not enabled yet. Please use the email address above."
                  : "Form submissions are not enabled yet. Please use the email address above to get in touch."}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
