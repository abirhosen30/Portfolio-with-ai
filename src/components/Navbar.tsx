"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icons } from "./icons";
import { portfolioData } from "@/data/portfolioData";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const router = useRouter();
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolioData.contact.email)}`;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition =
        window.scrollY + Math.max(120, window.innerHeight * 0.3);
      let currentSection = NAV_LINKS[0].href.substring(1);
      let currentSectionTop = -Infinity;

      for (const link of NAV_LINKS) {
        const section = document.getElementById(link.href.substring(1));
        if (!section) continue;

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (sectionTop <= scrollPosition && sectionTop > currentSectionTop) {
          currentSection = link.href.substring(1);
          currentSectionTop = sectionTop;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setIsOpen(false);
      const targetId = href.substring(1);
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        setActiveSection(targetId);
        targetElem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      } else {
        router.push("/" + href);
      }
    }
  };

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "is-scrolled py-3" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link
          href="/#home"
          className="site-brand shrink-0 text-xl font-extrabold tracking-tight focus:outline-none"
        >
          {portfolioData.personal.name.split(" ")[0]}
          <span className="site-brand-dot">.</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="site-nav hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`site-nav-link text-sm font-semibold transition-colors ${
                  isActive
                    ? "is-active"
                    : ""
                }`}
              >
                {link.name === "Home" ? "Home" : `${link.name}`}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="site-contact-link hidden rounded-md px-4 py-2 text-sm font-semibold transition-colors sm:inline-flex"
          >
            Let&apos;s talk
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="site-menu-button rounded-md p-2 lg:hidden"
          >
            {isOpen ? <Icons.Close size={22} /> : <Icons.Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="site-mobile-menu absolute inset-x-0 top-full px-4 py-4 shadow-xl lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`site-mobile-link flex items-center justify-between rounded-md px-4 py-3 text-sm font-medium ${
                    isActive ? "is-active" : ""
                  }`}
                >
                  <span>{link.name === "Home" ? "Home" : `/${link.name}`}</span>
                  <Icons.ChevronRight size={16} />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
