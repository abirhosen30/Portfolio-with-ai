import { Icons } from "./icons";
import { portfolioData } from "@/data/portfolioData";

export default function Contact() {
  const { contact, personal, socialLinks } = portfolioData;
  const socials = [
    { label: "GitHub", href: socialLinks.github, icon: Icons.Github },
    { label: "LinkedIn", href: socialLinks.linkedin, icon: Icons.Linkedin },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-slate-800/70 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
          Contact
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Let&apos;s get in touch.
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          Have a project idea or want to say hello? Send me an email.
        </p>

        <a
          href={`mailto:${contact.email}`}
          className="mt-7 inline-flex items-center gap-3 break-all text-base font-medium text-teal-300 transition-colors hover:text-teal-200"
        >
          <Icons.Mail size={19} className="shrink-0" />
          {contact.email}
        </a>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors"
            >
              <Icon size={16} />
              <span>{label}</span>
            </a>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-400">{personal.location}</p>
      </div>
    </section>
  );
}
