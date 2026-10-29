"use client";

import { useState } from "react";
import Image from "next/image";
import { Icons } from "./icons";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const { personal, contact } = portfolioData;
  const [showPortraitFallback, setShowPortraitFallback] = useState(false);
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}`;

  return (
    <section
      id="home"
      className="hero-section scroll-mt-24 px-4 sm:px-6"
    >
      <div className="hero-content mx-auto">
        <div className="hero-copy">
          <p className="hero-greeting text-lg font-semibold sm:text-xl">
            Hello, I&apos;m
          </p>
          <h1 className="hero-title mt-2 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {personal.name}
          </h1>
          <p className="hero-role mt-3 text-lg font-semibold sm:text-xl">
            {personal.designation}
          </p>
          <p className="hero-description mt-5 max-w-2xl text-base leading-7 sm:text-lg">
            {personal.shortTagline}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 hero-actions">
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-primary-action inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors"
            >
              Let&apos;s talk
              <Icons.ChevronRight size={16} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="hero-secondary-action inline-flex cursor-pointer items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors"
            >
              <Icons.Download size={16} />
              Resume
            </a>
          </div>

        </div>

        <div className="hero-portrait">
          {showPortraitFallback ? (
            <div
              className="hero-portrait-fallback"
              role="img"
              aria-label={`${personal.name} profile photo placeholder`}
            >
              <span>{personal.name.split(" ").map((part) => part[0]).join("")}</span>
              <small>{personal.name}</small>
            </div>
          ) : (
            <Image
              src={personal.profilePhoto}
              alt={`${personal.name} portrait`}
              width={640}
              height={640}
              priority
              className="h-full w-full object-cover"
              onError={() => setShowPortraitFallback(true)}
              onLoad={(event) => {
                if (
                  event.currentTarget.naturalWidth <= 1 ||
                  event.currentTarget.naturalHeight <= 1
                ) {
                  setShowPortraitFallback(true);
                }
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
