"use client";

import React from "react";
import { Icons } from "./icons";
import { portfolioData, EducationItem } from "@/data/portfolioData";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-teal-400 uppercase bg-teal-500/10 px-3.5 py-1.5 rounded-full border border-teal-500/20">
            Education
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Computer Science & Engineering
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            My current degree program.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-sky-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Guide Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-teal-400 via-sky-500 to-slate-800" />

          <div className="space-y-8">
            {education.map((item: EducationItem, idx: number) => (
              <div key={idx} className="relative flex flex-col md:flex-row gap-6 items-start group">
                
                {/* Timeline Node Icon (Desktop) */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-[#070b14] border-2 border-teal-500/40 text-teal-400 group-hover:border-teal-400 group-hover:scale-110 transition-all duration-300 shrink-0 shadow-lg shadow-teal-500/10 z-10">
                  <Icons.GraduationCap size={28} />
                </div>

                {/* Card Container */}
                <div className="education-card flex-1 w-full glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl border border-slate-800/80">
                  
                  {/* Card Header: Degree, Year, Result */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div>
                      <div className="md:hidden inline-flex items-center gap-2 text-teal-400 mb-2">
                        <Icons.GraduationCap size={20} />
                        <span className="text-xs font-mono uppercase font-semibold">Academic Degree</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-sm font-medium text-slate-300 mt-0.5">
                        {item.institution}
                      </p>
                    </div>

                    {(item.year || item.result) && (
                      <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2">
                        {item.year && (
                          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-teal-300 bg-teal-950/70 border border-teal-500/30">
                            {item.year}
                          </span>
                        )}
                        {item.result && (
                          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-sky-300 bg-sky-950/70 border border-sky-500/30">
                            {item.result}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Highlights / Coursework */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-800/80">
                      <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">
                        Key Highlights & Coursework:
                      </h4>
                      <ul className="space-y-1.5">
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                            <span className="text-teal-400 mt-1 shrink-0">•</span>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
