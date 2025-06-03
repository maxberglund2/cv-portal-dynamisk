"use client";

import React from "react";

const BG_CLASSES = [
  "bg-gradient-to-br from-[#101010] via-[#181818] to-[#232323]",
  "bg-gradient-to-br from-[#232323] via-[#2d2d2d] to-[#101010]",
];

const ThemeButton: React.FC = () => {
  const handleClick = () => {
    const main = document.querySelector("main");
    if (!main) return;
    const hasFirst = main.classList.contains("from-[#101010]");
    main.classList.remove(...BG_CLASSES.flatMap((cls) => cls.split(" ")));
    if (hasFirst) {
      main.classList.add(...BG_CLASSES[1].split(" "));
    } else {
      main.classList.add(...BG_CLASSES[0].split(" "));
    }
  };

  React.useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;
    // Ensure one of the backgrounds is always set
    if (
      !main.classList.contains("from-[#101010]") &&
      !main.classList.contains("from-[#232323]")
    ) {
      main.classList.add(...BG_CLASSES[0].split(" "));
    }
  }, []);

  return (
    <button
      aria-label="Easter Egg"
      onClick={handleClick}
      className="absolute bottom-0 left-0 w-10 h-10 opacity-0 z-50"
      tabIndex={0}
      type="button"
    />
  );
};

export default ThemeButton;
