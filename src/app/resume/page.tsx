"use client";

import Image from "next/image";
import "../print.css";

const softSkills = [
  "Responsibility",
  "Communication",
  "Goal-oriented",
  "Efficiency",
  "Teamwork",
];

const techSkills = [
  ["Python", "Javascript", "C#"],
  ["HTML/CSS", "React.js", "Typescript"],
];

const languages = [
  { name: "Swedish", level: "Native" },
  { name: "English", level: "Fluent" },
];

export default function ResumePage() {
  return (
    <main className="flex justify-center items-start min-h-screen py-10">
      <div className="w-full max-w-5xl bg-[#181f1a]/80 rounded-3xl shadow-2xl border border-lime-400/10 flex flex-col md:flex-row overflow-hidden">
        {/* Left Side */}
        <aside className="md:w-1/3 w-full bg-gradient-to-b from-[#1a2b1e]/80 to-[#181818]/90 p-8 flex flex-col items-center gap-6 border-r border-lime-400/10">
          <div className="relative w-40 h-40">
            <Image
              src="/defaultAvatar.jpg"
              alt="Picture of Max Berglund"
              fill
              className="rounded-full object-cover border-4 border-lime-400/30 shadow-lg"
            />
          </div>
          <div className="text-center">
            <p className="text-lime-400 text-sm mb-1">2004.03.15</p>
            <h2 className="text-3xl font-bold text-lime-300 mb-2">
              Max Berglund
            </h2>
          </div>
          <div className="w-full">
            <h3 className="text-lime-300 text-lg font-semibold mb-2">
              Languages
            </h3>
            <ul className="mb-4">
              {languages.map((lang) => (
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
              {softSkills.map((skill) => (
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
              {techSkills.map((col, i) => (
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
              My curiosity for technology and problem-solving has driven me to
              explore various fields, from hardware and software to teamwork and
              project management. I enjoy learning new things and adapting to
              different work environments, which helps me develop both technical
              and communication skills. Regardless of the setting, I appreciate
              the opportunity to take on challenges, solve problems, and work in
              a dynamic environment where I can contribute and grow.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-lime-300 mb-2 text-center md:text-left">
              Career Goals
            </h2>
            <p className="text-gray-200 text-base leading-relaxed">
              I value experience and see every work opportunity as a chance to
              develop both professionally and personally. I am open to various
              roles where I can contribute with my engagement, adaptability, and
              interest in technology and effective collaboration. My ambition is
              to broaden my skills and gather experiences that will shape my
              future career.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-lime-300 mb-2 text-center md:text-left">
              Work Experience
            </h2>
            <div className="flex flex-col gap-6">
              {/* 2witness Internship */}
              <div className="bg-[#232823]/80 rounded-xl p-5 border border-lime-400/10 shadow flex flex-col md:flex-row md:items-start md:gap-6">
                <div className="flex-shrink-0 flex md:flex-col items-center md:items-start md:w-14 w-full mb-2 md:mb-0">
                  <span className="bg-lime-900/40 text-lime-400 font-semibold text-xs px-4 py-1 rounded-full shadow mb-2 md:mb-0 md:mr-0 md:ml-0">
                    2024
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lime-200 font-semibold mb-1">
                    Internship as Mobile App Developer at 2witness
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Actively engaged in a team of interns developing a mobile
                    application. Initially focused on backend development, later
                    expanded to frontend tasks. Improved programming,
                    communication, and teamwork skills through hands-on
                    experience.
                  </p>
                </div>
              </div>
              {/* Ariake College Internship */}
              <div className="bg-[#232823]/80 rounded-xl p-5 border border-lime-400/10 shadow flex flex-col md:flex-row md:items-start md:gap-6">
                <div className="flex-shrink-0 flex md:flex-col items-center md:items-start md:w-14 w-full mb-2 md:mb-0">
                  <span className="bg-lime-900/40 text-lime-400 font-semibold text-xs px-4 py-1 rounded-full shadow mb-2 md:mb-0 md:mr-0 md:ml-0">
                    2024
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lime-200 font-semibold mb-1">
                    Internship at National Institute of Technology, Ariake
                    College (Fukuoka, Japan)
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Completed a two-week internship as part of a dynamic
                    exchange program. Worked with image recognition using
                    Python, gaining insights into cutting-edge technologies and
                    international collaboration.
                  </p>
                </div>
              </div>
              {/* Sanitation Worker */}
              <div className="bg-[#232823]/80 rounded-xl p-5 border border-lime-400/10 shadow flex flex-col md:flex-row md:items-start md:gap-6">
                <div className="flex-shrink-0 flex md:flex-col items-center md:items-start md:w-14 w-full mb-2 md:mb-0">
                  <span className="bg-lime-900/40 text-lime-400 font-semibold text-xs px-4 py-1 rounded-full shadow mb-2 md:mb-0 md:mr-0 md:ml-0">
                    2020
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lime-200 font-semibold mb-1">
                    Sanitation Worker
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Strengthened work ethic and proactive approach to tasks,
                    contributing to a cleaner community environment.
                  </p>
                </div>
              </div>
              {/* Teaching Assistant */}
              <div className="bg-[#232823]/80 rounded-xl p-5 border border-lime-400/10 shadow flex flex-col md:flex-row md:items-start md:gap-6">
                <div className="flex-shrink-0 flex md:flex-col items-center md:items-start md:w-14 w-full mb-2 md:mb-0">
                  <span className="bg-lime-900/40 text-lime-400 font-semibold text-xs px-4 py-1 rounded-full shadow mb-2 md:mb-0 md:mr-0 md:ml-0">
                    2020
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lime-200 font-semibold mb-1">
                    High School Teaching Assistant
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Managed administrative duties, document management, and
                    communication handling to support academic needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-lime-300 mb-4 text-center md:text-left">
              Education
            </h2>
            <div className="flex flex-col gap-6">
              {/* Chas Academy */}
              <div className="bg-[#232823]/80 rounded-xl p-5 border border-lime-400/10 shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                  <span className="text-lime-400 font-semibold">
                    2024 - Present | Stockholm
                  </span>
                  <span className="text-lime-400 text-xs md:text-sm">
                    Higher Vocational Education Diploma
                  </span>
                </div>
                <h3 className="text-lime-200 font-semibold mb-1">
                  Chas Academy (Fullstack .NET)
                </h3>
                <p className="text-gray-300 text-sm">
                  Deepening knowledge in .NET development with a focus on both
                  frontend and backend. Curriculum covers JavaScript,
                  frameworks, databases, and C#/.NET. Gaining business insights
                  and teamwork experience through practical projects.
                </p>
              </div>
              {/* NTI Gymnasiet Södertörn (TE4) */}
              <div className="bg-[#232823]/80 rounded-xl p-5 border border-lime-400/10 shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                  <span className="text-lime-400 font-semibold">
                    2023 - 2024 | Stockholm
                  </span>
                  <span className="text-lime-400 text-xs md:text-sm">
                    High school engineering degree
                  </span>
                </div>
                <h3 className="text-lime-200 font-semibold mb-1">
                  NTI Gymnasiet Södertörn (TE4) - Highschool Engineering Program
                </h3>
                <p className="text-gray-300 text-sm">
                  Specialized in practical programming, web development, and
                  work methods such as Agile and Waterfall. Gained experience
                  with the MERN stack and improved coding and teamwork skills
                  through projects.
                </p>
              </div>
              {/* NTI Gymnasiet Södertörn (IMT) */}
              <div className="bg-[#232823]/80 rounded-xl p-5 border border-lime-400/10 shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                  <span className="text-lime-400 font-semibold">
                    2020 - 2023 | Stockholm
                  </span>
                  <span className="text-lime-400 text-xs md:text-sm">
                    High School Diploma
                  </span>
                </div>
                <h3 className="text-lime-200 font-semibold mb-1">
                  NTI Gymnasiet Södertörn (Information and Media Technology
                  Program)
                </h3>
                <p className="text-gray-300 text-sm">
                  Specialized in information and media technology, exploring
                  programming, web development, design, 3D printing, and
                  hardware management.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-lime-300 mb-2 text-center md:text-left">
              About Me
            </h2>
            <p className="text-gray-200 text-base leading-relaxed">
              In my free time, I enjoy training, video games, and TV series. I
              have a strong passion for technology and problem-solving and
              thrive on developing my skills through creating and improving. My
              internship in Fukuoka, Japan, sparked my interest in international
              work and cultural exchange. Now, I am looking for opportunities to
              gain practical experience, build networks, and explore my
              strengths and interests. I am motivated, eager to learn, and
              focused on continuous professional and personal growth.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
