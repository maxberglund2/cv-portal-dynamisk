import React from "react";
import GetGithubRepo from "@/components/portfolio/getGithubRepo";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen w-full px-4 py-16">
      <div className="max-w-4xl mx-auto mb-10 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold pb-2 text-lime-400 drop-shadow-lg">
          My Portfolio
        </h2>
        <p className="text-lg text-gray-300 mt-2">
          Explore my highlighted projects and a collection of all my creative
          work.
        </p>
      </div>
      <GetGithubRepo />
    </div>
  );
};

export default PortfolioPage;
