import React from "react";
import Link from "next/link";
import { Icons } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-slate-100 flex flex-col items-center justify-center p-6 text-center">
      {/* Background radial highlight */}
      <div className="absolute w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-md w-full glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 text-center shadow-2xl">
        <span className="text-6xl sm:text-7xl font-extrabold font-mono text-teal-400">
          404
        </span>

        <h1 className="text-2xl font-bold text-white mt-4">
          Page Not Found
        </h1>

        <p className="text-sm text-slate-400 mt-2 leading-relaxed">
          The project or page you are looking for does not exist or has been relocated.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors shadow-md shadow-teal-500/20"
          >
            <Icons.ArrowLeft size={16} />
            <span>Return Home</span>
          </Link>
          <Link
            href="/#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-slate-300 bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
          >
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
