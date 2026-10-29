import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const { about, personal } = portfolioData;

  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-slate-800/70 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
          About me
        </p>
        <div className="mt-5 grid gap-8 md:grid-cols-[minmax(0,1fr)_16rem] md:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {about.heading}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-slate-300">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-slate-700/70 bg-slate-900/50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Based in
            </p>
            <p className="mt-2 text-base font-medium text-slate-100">
              {personal.location}
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-teal-400">
              Currently exploring
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Full-stack web development and AI/ML
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
