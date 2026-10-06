import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { achievements } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { soundManager } from "@/utils/audio";

const INITIAL_COUNT = 3;

function AchievementCard({
  index,
  title,
  issuer,
  tag,
  score,
  description,
  image,
  link,
}) {
  return (
    <motion.div
      layout
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, scale: 0.9 }}
      className="flex w-full justify-center"
    >
      <Tilt
        tiltMaxAngleX="6"
        tiltMaxAngleY="6"
        className="group dark:bg-[#0c1222]/90 bg-white/95 p-4 sm:p-5 rounded-2xl w-full max-w-[390px] sm:min-h-[500px] border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/60 dark:hover:border-cyan-400/60 transition-all duration-300 shadow-xl shadow-slate-950/10 dark:shadow-black/50 hover:shadow-cyan-500/15 hover:-translate-y-1.5 flex flex-col justify-between backdrop-blur-xl"
      >
        <div>
          {/* Certificate image preview */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playClick()}
            className="block relative w-full h-[200px] rounded-xl overflow-hidden dark:bg-[#070b16] bg-slate-100 border border-slate-200 dark:border-slate-800 cursor-pointer group/img"
            title="Click to view certificate"
          >
            <Image
              src={image}
              alt={title}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain p-2 group-hover/img:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 left-3 z-10">
              <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white backdrop-blur-md border border-white/20 shadow-md">
                {tag}
              </span>
            </div>
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="bg-black/75 text-white text-xs px-3 py-1.5 rounded-lg border border-white/20 shadow-lg backdrop-blur-sm flex items-center gap-1.5">
                <span>View Full Certificate</span>
                <span>↗</span>
              </span>
            </div>
          </a>

          <div className="mt-5">
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-cyan-500 dark:text-cyan-400">
              {issuer}
            </span>
            <h3 className="dark:text-white text-gray-900 font-bold text-[18px] mt-1 leading-snug group-hover:text-cyan-400 transition-colors">
              {title}
            </h3>
            {score && (
              <div className="mt-2.5 inline-block text-[12px] font-semibold px-2.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                {score}
              </div>
            )}
            <p className="mt-3 text-gray-600 dark:text-slate-300 text-[13px] leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playClick()}
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:brightness-110 text-white transition-all duration-300 shadow-md shadow-indigo-600/30 hover:shadow-cyan-500/25"
          >
            <span>View Credential</span>
            <span>↗</span>
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
}

function Achievements() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleAchievements = achievements.slice(0, visibleCount);
  const hasMore = visibleCount < achievements.length;

  return (
    <section className="my-16 sm:my-28 mx-auto max-w-7xl p-4 sm:p-8 relative z-0" id="certificates">
      <span id="achievements" className="hash-span">&nbsp;</span>
      <div className="text-center max-w-3xl mx-auto">
        <p className="sectionSubText text-center font-bold tracking-[0.2em] text-[#915eff] dark:text-purple-400 mb-2">
          MILESTONES &amp; CREDENTIALS
        </p>
        <h2 className="sectionHeadText text-center">
          Certificates &amp; Achievements.
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-[16px] text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Recognitions, elite academic certifications, and milestones earned through rigorous technical coursework, assessments, and competitive student leadership programs.
        </p>
      </div>

      <motion.div
        layout
        className="md:mt-12 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center w-full"
      >
        <AnimatePresence>
          {visibleAchievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              index={index}
              {...achievement}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Load More / Show Less Button */}
      {hasMore ? (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => {
              soundManager.playClick();
              setVisibleCount((prev) => prev + 3);
            }}
            className="py-3 px-8 rounded-xl bg-gradient-to-r from-primary to-[#915eff] hover:brightness-110 text-white font-semibold text-sm shadow-lg shadow-primary/30 hover:scale-105 hover:shadow-primary/50 transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <span>Load More Certificates</span>
            <span className="text-base font-bold">↓</span>
          </button>
        </div>
      ) : achievements.length > INITIAL_COUNT ? (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => {
              soundManager.playClick();
              setVisibleCount(INITIAL_COUNT);
              const el = document.getElementById("certificates") || document.getElementById("achievements");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="py-2.5 px-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-purple-500/30 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:border-primary/60 font-medium text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <span>Show Less</span>
            <span className="text-base font-bold">↑</span>
          </button>
        </div>
      ) : null}
    </section>
  );
}

export default Achievements;
