import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function SocialsPage() {
  return (
    <div className="min-h-screen w-full px-4 py-16 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold pb-2 text-lime-300 drop-shadow text-center">
        Connect with Me
      </h1>
      <p className="text-lg text-gray-300 mt-4 max-w-2xl text-center">
        Want to get in touch or follow my work? Here are the best ways to reach
        me online.
      </p>
      <hr className="my-10 border-lime-400/30 w-full max-w-2xl" />

      <div className="flex flex-col items-center gap-12 w-full">
        <div className="flex flex-row justify-center items-center gap-12 w-full">
          <a
            href="https://www.linkedin.com/in/max-berglund04/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group transition"
            aria-label="LinkedIn"
          >
            <LinkedInIcon
              fontSize="inherit"
              className="text-lime-300 group-hover:text-white group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_#a3e635] transition-all duration-200"
              style={{ fontSize: 64 }}
            />
            <span className="mt-2 text-gray-200 group-hover:text-lime-300 transition font-semibold text-lg">
              LinkedIn
            </span>
          </a>
          <a
            href="https://github.com/maxberglund2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group transition"
            aria-label="GitHub"
          >
            <GitHubIcon
              fontSize="inherit"
              className="text-lime-300 group-hover:text-white group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_#a3e635] transition-all duration-200"
              style={{ fontSize: 64 }}
            />
            <span className="mt-2 text-gray-200 group-hover:text-lime-300 transition font-semibold text-lg">
              GitHub
            </span>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=max.berglund2004@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group transition"
            aria-label="Email"
          >
            <EmailIcon
              fontSize="inherit"
              className="text-lime-300 group-hover:text-white group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_#a3e635] transition-all duration-200"
              style={{ fontSize: 64 }}
            />
            <span className="mt-2 text-gray-200 group-hover:text-lime-300 transition font-semibold text-lg">
              Email
            </span>
          </a>
        </div>
      </div>

      <div className="mt-20 w-full flex flex-col items-center">
        <h2 className="text-2xl font-bold text-lime-200 mb-5 text-center tracking-tight">
          Why Connect?
        </h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
          <span className="bg-lime-400/5 text-lime-200 px-4 py-2 rounded-full font-medium text-base">
            See my latest projects & updates
          </span>
          <span className="bg-lime-400/5 text-lime-200 px-4 py-2 rounded-full font-medium text-base">
            Network & collaborate
          </span>
          <span className="bg-lime-400/5 text-lime-200 px-4 py-2 rounded-full font-medium text-base">
            Ask questions or share ideas
          </span>
          <span className="bg-lime-400/5 text-lime-200 px-4 py-2 rounded-full font-medium text-base">
            Just say hello!
          </span>
        </div>
      </div>
    </div>
  );
}
