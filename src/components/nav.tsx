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
        ? "bg-zinc-800 text-lime-400"
        : "text-white hover:bg-zinc-800"
    }`;

  return (
    <>
      {/* Hamburger for mobile */}
      {!open && (
        <button
          className="fixed top-4 left-4 z-50 md:hidden text-white text-3xl bg-zinc-900 rounded p-1 shadow"
          aria-label="Open navigation"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      )}

      {/* Sidebar overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-zinc-900 border-r border-zinc-800 flex flex-col z-50
      transition-transform duration-300 transform
      ${open ? "translate-x-0" : "-translate-x-full"}
      md:hidden`}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-14 px-4 border-b border-zinc-800">
          <span className="font-bold text-xl text-white">
            <span className="text-lime-400">M</span>ax Berglund
          </span>
          <button
            className="text-white text-2xl md:hidden"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center gap-1 mt-6">
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
        <p className="mt-auto mb-4 text-xs text-zinc-400 text-center">
          &copy; 2025 Max Berglund
        </p>
      </aside>
      {/* Static sidebar for desktop */}
      <aside
        className="hidden md:fixed md:top-0 md:left-0 md:h-full md:w-56 md:bg-zinc-900 md:border-r md:border-zinc-800 md:flex md:flex-col"
        aria-label="Main navigation"
      >
        <div className="flex items-center h-16 px-4 border-b border-zinc-800">
          <span className="font-bold text-2xl text-white">
            <span className="text-lime-400">M</span>ax Berglund
          </span>
        </div>
        <div className="flex-1 flex flex-col items-center gap-1 mt-6">
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
        <p className="mt-auto mb-4 text-xs text-zinc-400 text-center">
          &copy; 2025 Max Berglund
        </p>
      </aside>
    </>
  );
}
