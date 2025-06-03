"use client";
import React, { useEffect, useState, useRef } from "react";

export default function EasterEggModal() {
  const [open, setOpen] = useState(false);
  const buffer = useRef<string>("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      buffer.current += e.key.toLowerCase();
      if (buffer.current.length > 3) buffer.current = buffer.current.slice(-3);
      if (buffer.current === "max") {
        setOpen(true);
        buffer.current = "";
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleClose = () => setOpen(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-[#1a2b1e] border border-lime-400/30 rounded-2xl shadow-2xl px-8 py-6 min-w-[300px] text-center relative">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 text-xl hover:text-red-400 transition-colors duration-200"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="text-5xl mb-2 animate-bounce">🥚</div>
        <h2 className="text-2xl font-bold text-gray-100 mb-2">
          You found the Max Easter Egg!
        </h2>
        <p className="text-gray-300 text-base">
          Congrats! You typed <b className="text-lime-300">max</b>.
        </p>
      </div>
    </div>
  );
}