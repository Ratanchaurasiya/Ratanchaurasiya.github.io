import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import truncateText from "@/utils/truncate";
import GithubLogo from "./../public/assets/icons/github.svg";
import RocketLogo from "./../public/assets/icons/rocket.svg";
import ProjectModal from "./ProjectModal";
import { soundManager } from "@/utils/audio";

const categories = [
  "All",
  "Web Development",
  "Management Systems",
  "Data & Dashboards",
];

function ProjectCard({
  index,
  project,
  onOpenArchitecture,
}) {
  const {
    name,
    category,
    description,
    tags,
    image,
    source_code_link,
    deployed_link,
  } = project;
  const hasLiveDemo = Boolean(deployed_link && deployed_link.trim() !== "" && deployed_link !== "#");

  return (
    <motion.div
      layout
      variants={fadeIn("up", "spring", index * 0.08, 0.75)}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, scale: 0.9 }}
      className="flex w-full justify-center"
    >
      <Tilt
        tiltMaxAngleX="6"
        tiltMaxAngleY="6"
        className="group dark:bg-[#0c1222]/90 bg-white/95 p-4 sm:p-5 rounded-2xl w-full max-w-[390px] sm:min-h-[540px] border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/60 dark:hover:border-cyan-400/60 transition-all duration-300 shadow-xl shadow-slate-950/10 dark:shadow-black/50 hover:shadow-cyan-500/15 hover:-translate-y-1.5 flex flex-col justify-between backdrop-blur-xl"
      >
        <div>
          {/* Thumbnail Container */}
          <a
            href={hasLiveDemo ? deployed_link : source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playClick()}
            className="block relative w-full h-[210px] rounded-xl overflow-hidden bg-slate-900 border border-slate-700/40 cursor-pointer group/thumb"
            title="Click to view project"
          >
            <Image
              src={image}
              alt={name}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover/thumb:scale-105 transition-transform duration-500"
            />
            {/* Gradient overlay for aesthetic depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222]/80 via-transparent to-transparent opacity-60" />

            {/* Category tag badge */}
            <div className="absolute top-3 left-3 z-10">
              <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white backdrop-blur-md border border-white/20 shadow-md">
                {category}
              </span>
            </div>
          </a>

          {/* Project Details */}
          <div className="mt-5">
            <h3 className="dark:text-white text-gray-900 font-bold text-[19px] sm:text-[20px] leading-snug group-hover:text-cyan-400 transition-colors">
              {name}
            </h3>
            <p className="mt-2.5 dark:text-slate-300 text-gray-600 text-[13.5px] leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div>
          {/* Tech Stack Tags */}
          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md dark:bg-cyan-950/40 bg-cyan-50 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300"
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {/* Direct Action Buttons */}
          <div className="mt-4 flex items-center gap-2.5 pt-1">
            {hasLiveDemo && (
              <a
                href={deployed_link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playSuccess()}
                className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:brightness-110 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md shadow-indigo-600/30 hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <RocketLogo className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}

            {source_code_link && (
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                className={`${
                  hasLiveDemo ? "flex-1" : "w-full"
                } py-2.5 px-3 rounded-xl dark:bg-slate-800/80 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white text-xs sm:text-sm font-semibold border border-slate-300 dark:border-slate-700 flex items-center justify-center gap-2 transition-all duration-300 shadow-sm`}
              >
                <GithubLogo className="w-4 h-4 fill-current" />
                <span>GitHub</span>
              </a>
            )}
          </div>

          {/* Architecture & Case Study Button */}
          <button
            onClick={() => {
              soundManager.playClick();
              onOpenArchitecture(project);
            }}
            className="w-full mt-2.5 py-2 px-3 rounded-xl dark:bg-indigo-950/30 bg-indigo-50 hover:bg-indigo-100 dark:hover:bg-indigo-950/60 text-indigo-700 dark:text-cyan-300 border border-indigo-500/30 dark:border-cyan-500/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm group/arch"
          >
            <span className="group-hover/arch:scale-110 transition-transform">🏗️</span>
            <span>Architecture &amp; Case Study</span>
          </button>
        </div>
      </Tilt>
    </motion.div>
  );
}

const INITIAL_COUNT = 6;

function Works() {
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const handleTabChange = (cat) => {
    soundManager.playClick();
    setActiveTab(cat);
    setVisibleCount(INITIAL_COUNT);
  };

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;
  const canShowLess = visibleCount > INITIAL_COUNT && filteredProjects.length > INITIAL_COUNT;

  return (
    <section className="my-16 sm:my-28 mx-auto max-w-7xl p-4 sm:p-8 relative z-0" id="projects">
      <span className="hash-span" id="projects">
        &nbsp;
      </span>

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase shadow-sm mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>PORTFOLIO SHOWCASE</span>
        </div>
        <h2 className="sectionHeadText text-center">
          <span className="text-gray-900 dark:text-white">My </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-300">
            Projects.
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-[16px] text-gray-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          A collection of practical web applications, database systems, dashboards, and development projects built while learning and applying full-stack technologies.
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleTabChange(cat)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 border ${
              activeTab === cat
                ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white border-cyan-400/50 shadow-lg shadow-cyan-500/20 scale-105"
                : "bg-white/80 dark:bg-[#0c1222] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-cyan-400/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="md:mt-12 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center w-full"
      >
        <AnimatePresence>
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              index={index}
              project={project}
              onOpenArchitecture={setSelectedProject}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Load More & Action Buttons Area */}
      <div className="mt-12 flex flex-col items-center justify-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {hasMore ? (
            <button
              onClick={() => {
                soundManager.playClick();
                setVisibleCount((prev) => prev + 6);
              }}
              className="py-3.5 px-8 rounded-2xl bg-gradient-to-r from-primary via-[#915eff] to-primary hover:brightness-110 text-white font-bold text-sm sm:text-base shadow-xl shadow-primary/35 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5 cursor-pointer ring-2 ring-primary/30"
            >
              <span>Load More Projects</span>
              <span className="bg-white/20 text-white text-xs px-2.5 py-0.5 rounded-full font-mono font-bold">
                +{filteredProjects.length - visibleCount}
              </span>
              <span className="text-lg font-bold">↓</span>
            </button>
          ) : canShowLess ? (
            <button
              onClick={() => {
                soundManager.playClick();
                setVisibleCount(INITIAL_COUNT);
                const el = document.getElementById("projects");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="py-3 px-6 rounded-2xl bg-white/5 hover:bg-white/15 border border-purple-500/40 dark:text-gray-200 text-gray-800 hover:text-white font-semibold text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Show Less</span>
              <span className="text-base font-bold">↑</span>
            </button>
          ) : (
            <div className="py-2.5 px-5 rounded-2xl bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold flex items-center gap-2">
              <span>✓ All {filteredProjects.length} Projects Displayed</span>
            </div>
          )}

          <a
            href="https://github.com/Ratanchaurasiya?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playSuccess()}
            className="py-3.5 px-7 rounded-2xl bg-white/5 hover:bg-white/10 border border-purple-500/30 dark:text-gray-200 text-gray-800 hover:text-white text-sm sm:text-base font-semibold flex items-center gap-2 shadow-md hover:border-primary transition-all duration-300 cursor-pointer"
          >
            <GithubLogo className="w-4 h-4 fill-current" />
            <span>Explore All Repos on GitHub</span>
            <span className="text-primary font-bold">↗</span>
          </a>
        </div>

        <p className="text-xs text-gray-400 font-mono text-center">
          Showing {Math.min(visibleCount, filteredProjects.length)} of {filteredProjects.length} projects
        </p>
      </div>

      {/* System Architecture & Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Works;
