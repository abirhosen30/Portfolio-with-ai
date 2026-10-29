import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abir Hosen | Frontend Developer",
  description:
    "Portfolio of Abir Hosen, a frontend developer and Computer Science undergraduate from Dhaka, Bangladesh.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="min-h-screen bg-[var(--bg-primary)] text-[#e2e8f0] font-sans antialiased selection:bg-teal-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
