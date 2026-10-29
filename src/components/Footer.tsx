import Link from "next/link";
import { Icons } from "./icons";
import { portfolioData } from "@/data/portfolioData";

const quickLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Education", href: "/#education" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export default function Footer() {
  const { personal, socialLinks } = portfolioData;
  const currentYear = 2026;

  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/30 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/#home"
            className="text-lg font-bold text-white transition-colors hover:text-teal-300"
          >
            {personal.name}
            <span className="text-teal-400">.</span>
          </Link>
          <p className="mt-2 text-sm text-slate-400">{personal.designation}</p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2">
          {quickLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-slate-400 transition-colors hover:text-teal-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 transition-colors hover:text-teal-300"
          >
            <Icons.Github size={19} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 transition-colors hover:text-teal-300"
          >
            <Icons.Linkedin size={19} />
          </a>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            aria-label="Email"
            className="text-slate-400 transition-colors hover:text-teal-300"
          >
            <Icons.Mail size={19} />
          </a>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-5xl border-t border-slate-800/70 pt-5 text-xs text-slate-500">
        © {currentYear} {personal.name}
      </p>
    </footer>
  );
}
