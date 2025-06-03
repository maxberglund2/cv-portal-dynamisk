"use client";

import Image from "next/image";
import "../print.css";
import axios from "axios";
import { useEffect, useState } from "react";

type ResumeData = {
  profile: { name: string; dob: string; avatar: string };
  languages: { name: string; level: string }[];
  softSkills: string[];
  techSkills: string[][];
  personalStatement: string;
  careerGoals: string;
  workExperience: { year: string; title: string; description: string }[];
  education: {
    period: string;
    degree: string;
    school: string;
    description: string;
  }[];
  aboutMe: string;
};

export default function ResumePage() {
  const [data, setData] = useState<ResumeData | null>(null);

  useEffect(() => {
    axios
      .get("/resumeData.json")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <svg
            className="animate-spin h-12 w-12 text-lime-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
          <span className="text-lime-400 text-lg font-semibold">
            Loading...
          </span>
        </div>
      </div>
    );

  return (
    <div className="flex justify-center items-start min-h-screen py-10">
      <div className="w-full max-w-5xl bg-[#181f1a]/80 rounded-3xl shadow-2xl border border-lime-400/10 flex flex-col md:flex-row overflow-hidden">
        {/* Left Side */}
        <aside className="md:w-1/3 w-full bg-gradient-to-b from-[#1a2b1e]/80 to-[#181818]/90 p-8 flex flex-col items-center gap-6 border-r border-lime-400/10">
          <div className="relative w-40 h-40">
            <Image
              src={data.profile.avatar}
              alt={`Picture of ${data.profile.name}`}
              fill
              className="rounded-full object-cover border-4 border-lime-400/30 shadow-lg"
            />
          </div>
          <div className="text-center">
            <p className="text-lime-400 text-sm mb-1">{data.profile.dob}</p>
            <h2 className="text-3xl font-bold text-lime-300 mb-2">
              {data.profile.name}
            </h2>
          </div>
          <div className="w-full">
            <h3 className="text-lime-300 text-lg font-semibold mb-2">
              Languages
            </h3>
            <ul className="mb-4">
              {data.languages.map((lang) => (
                <li key={lang.name} className="text-gray-200">
                  <span className="font-medium text-lime-400">{lang.name}</span>{" "}
                  ({lang.level})
                </li>
              ))}
            </ul>
            <h3 className="text-lime-300 text-lg font-semibold mb-2">
              Soft Skills
            </h3>
            <ul className="mb-4 flex flex-wrap gap-2">
              {data.softSkills.map((skill) => (
                <li
                  key={skill}
                  className="bg-lime-900/30 text-lime-300 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
            <h3 className="text-lime-300 text-lg font-semibold mb-2">
              Technical Skills
            </h3>
            <div className="flex gap-4">
              {data.techSkills.map((col, i) => (
                <ul key={i} className="flex flex-col gap-1">
                  {col.map((skill) => (
                    <li
                      key={skill}
                      className="text-lime-200 bg-lime-900/20 px-2 py-0.5 rounded text-xs"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </aside>
        {/* Right Side */}
        <section className="md:w-2/3 w-full p-8 flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-bold text-lime-300 mb-2 text-center md:text-left">
              Personal Statement
            </h2>
            <p className="text-gray-200 text-base leading-relaxed">
              {data.personalStatement}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-lime-300 mb-2 text-center md:text-left">
              Career Goals
            </h2>
            <p className="text-gray-200 text-base leading-relaxed">
              {data.careerGoals}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-lime-300 mb-2 text-center md:text-left">
              Work Experience
            </h2>
            <div className="flex flex-col gap-6">
              {data.workExperience.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-[#232823]/80 rounded-xl p-5 border border-lime-400/10 shadow flex flex-col md:flex-row md:items-start md:gap-6"
                >
                  <div className="flex-shrink-0 flex md:flex-col items-center md:items-start md:w-14 w-full mb-2 md:mb-0">
                    <span className="bg-lime-900/40 text-lime-400 font-semibold text-xs px-4 py-1 rounded-full shadow mb-2 md:mb-0 md:mr-0 md:ml-0">
                      {exp.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lime-200 font-semibold mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-lime-300 mb-4 text-center md:text-left">
              Education
            </h2>
            <div className="flex flex-col gap-6">
              {data.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-[#232823]/80 rounded-xl p-5 border border-lime-400/10 shadow"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                    <span className="text-lime-400 font-semibold">
                      {edu.period}
                    </span>
                    <span className="text-lime-400 text-xs md:text-sm">
                      {edu.degree}
                    </span>
                  </div>
                  <h3 className="text-lime-200 font-semibold mb-1">
                    {edu.school}
                  </h3>
                  <p className="text-gray-300 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-lime-300 mb-2 text-center md:text-left">
              About Me
            </h2>
            <p className="text-gray-200 text-base leading-relaxed">
              {data.aboutMe}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
