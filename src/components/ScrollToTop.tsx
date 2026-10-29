"use client";

import React, { useState, useEffect } from "react";
import { Icons } from "./icons";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-teal-400 text-slate-950 font-bold shadow-xl shadow-teal-500/30 hover:bg-teal-300 hover:scale-110 active:scale-95 transition-all duration-300"
    >
      <Icons.ArrowUp size={20} />
    </button>
  );
}

