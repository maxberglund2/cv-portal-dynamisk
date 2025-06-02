"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Utility for active link styling
  const linkClass = (href: string) =>
    `w-full text-center py-2 rounded transition-colors font-medium ${
      pathname === href
        ? "bg-lime-400/10 text-lime-300 border-l-4 border-lime-400"
        : "text-gray-200 hover:bg-[#232323] hover:text-lime-300"
    }`;

  return (
    <>
      {/* Hamburger for mobile */}
      {!open && (
        <button
          className="fixed top-4 left-4 z-50 md:hidden text-lime-300 text-3xl bg-[#181818] rounded p-1 shadow border border-lime-400/30"
          aria-label="Open navigation"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      )}

      {/* Sidebar overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-[#181818] border-r border-lime-400/20 flex flex-col z-50
      transition-transform duration-300 transform
      ${open ? "translate-x-0" : "-translate-x-full"}
      md:hidden`}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-14 px-4 border-b border-lime-400/10">
          <span className="font-bold text-xl text-lime-400 drop-shadow">
            Max Berglund
          </span>
          <button
            className="text-lime-300 text-2xl md:hidden"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center gap-1">
          <Link
            href="/"
            className={linkClass("/")}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/socials"
            className={linkClass("/socials")}
            onClick={() => setOpen(false)}
          >
            Socials
          </Link>
          <Link
            href="/resume"
            className={linkClass("/resume")}
            onClick={() => setOpen(false)}
          >
            Resume
          </Link>
          <Link
            href="/portfolio"
            className={linkClass("/portfolio")}
            onClick={() => setOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/background"
            className={linkClass("/background")}
            onClick={() => setOpen(false)}
          >
            Background
          </Link>
        </div>
        <p className="mt-auto mb-4 text-xs text-gray-400 text-center">
          &copy; 2025 Max Berglund
        </p>
      </aside>
      {/* Static sidebar for desktop */}
      <aside
        className="hidden md:fixed md:top-0 md:left-0 md:h-full md:w-56 md:bg-[#181818] md:border-r md:border-lime-400/20 md:flex md:flex-col"
        aria-label="Main navigation"
      >
        <div className="flex items-center h-16 px-4 border-b border-lime-400/10">
          <span className="font-bold text-2xl text-lime-400 drop-shadow">
            Max Berglund
          </span>
        </div>
        <div className="flex-1 flex flex-col items-center gap-1">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/socials" className={linkClass("/socials")}>
            Socials
          </Link>
          <Link href="/resume" className={linkClass("/resume")}>
            Resume
          </Link>
          <Link href="/portfolio" className={linkClass("/portfolio")}>
            Portfolio
          </Link>
          <Link href="/background" className={linkClass("/background")}>
            Background
          </Link>
        </div>
        <p className="mt-auto mb-4 text-xs text-gray-400 text-center">
          &copy; 2025 Max Berglund
        </p>
      </aside>
    </>
  );
}
