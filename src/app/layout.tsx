import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import EasterEggModal from "@/components/easterEggModal";
import ThemeButton from "@/components/themeButton";

export const metadata: Metadata = {
  title: "Max Berglund – CV Portal",
  description:
    "Explore Max Berglund's CV, skills, and experience in software development, teamwork, and international projects.",
  keywords: [
    "Max Berglund",
    "CV",
    "Portfolio",
    "Fullstack Developer",
    ".NET",
    "Chas Academy",
    "Sweden",
    "Fukuoka",
    "Internship",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <EasterEggModal />
        <Nav />
        <ThemeButton />
        <main className="bg-gradient-to-br from-[#101010] via-[#181818] to-[#232323]">
          {children}
        </main>
      </body>
    </html>
  );
}
