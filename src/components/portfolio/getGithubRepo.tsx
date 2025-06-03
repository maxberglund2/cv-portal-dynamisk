"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const GITHUB_USERNAME = "maxberglund2";
const HIGHLIGHTED_REPOS = ["Critter", "OtakuStyle", "greenTech", "KyotoInc"];

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
};

const GetGithubRepo: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await axios.get<Repo[]>(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos`
        );
        setRepos(res.data);
      } catch (error) {
        console.error(error);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  const highlighted = repos.filter((repo) =>
    HIGHLIGHTED_REPOS.includes(repo.name)
  );
  const others = repos.filter((repo) => !HIGHLIGHTED_REPOS.includes(repo.name));

  function RepoCard({ repo }: { repo: Repo }) {
    return (
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-gradient-to-tr from-[#1a2b1e]/80 to-[#232323]/80 rounded-2xl shadow-xl p-6 flex flex-col gap-2 border border-lime-400/10 hover:scale-[1.025] transition-transform"
      >
        <div className="flex items-center gap-2">
          <span className="text-lime-400 text-2xl">
            <i className="fa-brands fa-github" />
          </span>
          <span className="font-semibold text-lime-200 group-hover:underline">
            {repo.name}
          </span>
        </div>
        <p className="text-gray-300 text-sm">
          {repo.description || "No description"}
        </p>
        {repo.language && (
          <span className="text-xs text-lime-400 bg-lime-900/30 rounded px-2 py-0.5 w-fit">
            {repo.language}
          </span>
        )}
      </a>
    );
  }

  if (loading) {
    return (
      <div className="text-center text-gray-400 py-10">
        Loading GitHub projects...
      </div>
    );
  }

  return (
    <section className="flex justify-center items-start min-h-screen py-10">
      <div className="w-full max-w-4xl">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4 text-center">
          Highlighted Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {highlighted.length === 0 ? (
            <div className="text-gray-400 col-span-full text-center">
              No highlighted repositories found.
            </div>
          ) : (
            highlighted.map((repo) => <RepoCard key={repo.id} repo={repo} />)
          )}
        </div>
        <hr className="border-lime-400/10 mb-10" />
        <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4 text-center">
          All Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {others.length === 0 ? (
            <div className="text-gray-400 col-span-full text-center">
              No repositories found.
            </div>
          ) : (
            others.map((repo) => <RepoCard key={repo.id} repo={repo} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default GetGithubRepo;
