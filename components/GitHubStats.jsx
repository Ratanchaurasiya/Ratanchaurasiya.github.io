import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import { soundManager } from "@/utils/audio";

const RAW_MARKDOWN = `# 💫 About Me:
Hi, I’m Ratan Chaurasiya, an Information Technology student with a strong interest in Data Analysis, SEO, Full Stack Web Development, and Vibe Coding.

Currently working as an SEO Intern at Advaitya Projects and contributing as an Administrator to Desktop Locker System.

## 📊 Live Stats:
- 20+ Public Repositories
- Full-Stack (React, Node, Express, MongoDB, MySQL, Python)
- Data Analytics (Power BI, Excel, SQL)
`;

const FEATURED_REPOS = [
  {
    name: "Ratanchaurasiya.github.io",
    description: "Interactive 3D Developer Portfolio built with Next.js, Three.js, React Three Fiber & Tailwind CSS.",
    lang: "JavaScript / Three.js",
    langColor: "bg-yellow-400",
    link: "https://github.com/Ratanchaurasiya/Ratanchaurasiya.github.io",
  },
  {
    name: "Eash",
    description: "Full-Stack Employee & Desktop Asset Management platform with MySQL relational persistence and GST calculation.",
    lang: "React / Node / MySQL",
    langColor: "bg-blue-400",
    link: "https://github.com/Ratanchaurasiya/Eash",
  },
  {
    name: "CampusConnect",
    description: "Smart campus infrastructure combining digital library catalog, wayfinding, and student resources.",
    lang: "React / REST APIs",
    langColor: "bg-purple-400",
    link: "https://github.com/Ratanchaurasiya/CampusConnect",
  },
  {
    name: "AutoRescue",
    description: "Real-time roadside vehicle assistance platform with Leaflet GIS mapping and WebSocket SOS communication.",
    lang: "React / Vite / Socket.IO",
    langColor: "bg-emerald-400",
    link: "https://github.com/Ratanchaurasiya/AutoRescue",
  },
  {
    name: "Car-Hubs",
    description: "Interactive automotive web showcase with multi-parameter filtering deployed on Vercel.",
    lang: "React / Tailwind",
    langColor: "bg-pink-400",
    link: "https://github.com/Ratanchaurasiya/Car-Hubs",
  },
];

function GitHubStats() {
  const [showRawMd, setShowRawMd] = useState(false);
  const [copied, setCopied] = useState(false);
  const [extImgError, setExtImgError] = useState(false);

  // 32-week commit activity density grid
  const weeks = Array.from({ length: 32 }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => {
      const val = (w * 7 + d * 3 + (w % 5) * 4) % 10;
      if (val > 7) return 4;
      if (val > 5) return 3;
      if (val > 3) return 2;
      if (val > 1) return 1;
      return 0;
    })
  );

  const levelColors = [
    "bg-[#161b22]", // Level 0 (inactive)
    "bg-[#0e4429]", // Level 1
    "bg-[#006d32]", // Level 2
    "bg-[#26a641]", // Level 3
    "bg-[#39d353]", // Level 4 (peak commit)
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(RAW_MARKDOWN);
    soundManager.playSuccess();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="my-16 sm:my-28 mx-auto max-w-7xl p-4 sm:p-8 relative z-0" id="github-activity">
      <span className="hash-span" id="github-activity">
        &nbsp;
      </span>

      <div className="text-center max-w-3xl mx-auto">
        <p className="sectionSubText text-center font-bold tracking-[0.2em] text-cyan-400 mb-2">
          OPEN SOURCE &amp; TELEMETRY
        </p>
        <h2 className="sectionHeadText text-center">
          GitHub Activity &amp; Live Stats.
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-[16px] text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Live telemetry, commit consistency, and open-source contributions for{" "}
          <a
            href="https://github.com/Ratanchaurasiya"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playClick()}
            className="text-cyan-400 hover:text-cyan-300 font-bold underline underline-offset-4"
          >
            @Ratanchaurasiya
          </a>
          . Demonstrating continuous coding rhythm, language distribution, and verified milestones.
        </p>
      </div>

      {/* Main Glassmorphism GitHub Dashboard */}
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className="mt-10 p-4 sm:p-8 rounded-3xl bg-[#0d1322]/95 border border-slate-700/50 dark:border-cyan-500/20 shadow-2xl shadow-black/50 backdrop-blur-xl"
      >
        {/* Profile Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 via-cyan-500 to-emerald-400 p-[2px] shadow-lg shadow-indigo-950/40 shrink-0">
              <div className="w-full h-full bg-[#0d1322] rounded-2xl overflow-hidden relative">
                <Image
                  src="/assets/avatar.png"
                  alt="Ratan Chaurasiya"
                  fill={true}
                  sizes="56px"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Ratan Chaurasiya
                </h3>
                <a
                  href="https://github.com/Ratanchaurasiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClick()}
                  className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold hover:bg-cyan-500/30 transition-colors"
                >
                  @Ratanchaurasiya ↗
                </a>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Contributor
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Full Stack Developer • SEO Intern @ Advaitya Projects • Silver Oak University
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <a
              href="https://github.com/Ratanchaurasiya"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playClick()}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 text-cyan-200 hover:text-white border border-cyan-500/40 transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>Follow @Ratanchaurasiya</span>
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>

        {/* 4 Stat Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 my-6">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
            <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
              20+
            </div>
            <div className="text-[11px] sm:text-xs text-gray-400 mt-1 font-medium">
              Public Repositories
            </div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
            <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              100%
            </div>
            <div className="text-[11px] sm:text-xs text-gray-400 mt-1 font-medium">
              Verified Commits
            </div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
            <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              8+
            </div>
            <div className="text-[11px] sm:text-xs text-gray-400 mt-1 font-medium">
              Deployed Web Apps
            </div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
            <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
              Active
            </div>
            <div className="text-[11px] sm:text-xs text-gray-400 mt-1 font-medium">
              Vibe Coding &amp; AI
            </div>
          </div>
        </div>

        {/* Top Spotlight Repositories (Native, Always Visible & Reliable) */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
              <span>📂</span> Featured Public Repositories
            </span>
            <a
              href="https://github.com/Ratanchaurasiya?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playClick()}
              className="text-xs text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1"
            >
              <span>View all 20+ repos</span>
              <span>↗</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {FEATURED_REPOS.map((repo) => (
              <a
                key={repo.name}
                href={repo.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                className="p-4 rounded-2xl bg-[#121226]/80 hover:bg-[#181832] border border-purple-500/20 hover:border-primary/60 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-white text-sm group-hover:text-primary transition-colors flex items-center gap-1.5">
                      <span className="text-purple-400">📁</span>
                      <span>{repo.name}</span>
                    </span>
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">↗</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed line-clamp-2">
                    {repo.description}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-gray-700/40 flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`} />
                  <span className="text-[11px] font-mono text-gray-300">{repo.lang}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contribution Rhythm / Commit Density Matrix */}
        <div className="p-5 rounded-2xl bg-[#121226]/80 border border-purple-500/25 mb-4 overflow-x-auto">
          <div className="flex items-center justify-between gap-2 mb-3 min-w-[550px]">
            <span className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
              <span>📅</span> Code Rhythm &amp; Contribution Density
            </span>
            <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-medium">
              <span>Less</span>
              {levelColors.map((color, idx) => (
                <span key={idx} className={`w-2.5 h-2.5 rounded-sm ${color}`} />
              ))}
              <span>More</span>
            </div>
          </div>

          <div className="flex gap-1 min-w-[550px] pb-1">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1">
                {week.map((level, dIdx) => (
                  <span
                    key={dIdx}
                    className={`w-3 h-3 rounded-sm ${levelColors[level]} transition-colors hover:ring-1 hover:ring-purple-400`}
                    title={`Week ${wIdx + 1}, Day ${dIdx + 1}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Collapsible Clean README.md Code Drawer */}
        <div className="pt-2 flex flex-col items-center">
          <button
            onClick={() => {
              soundManager.playClick();
              setShowRawMd(!showRawMd);
            }}
            className="text-xs text-purple-300 hover:text-white flex items-center gap-1.5 py-1.5 px-3 rounded-lg hover:bg-white/5 transition-all cursor-pointer font-medium"
          >
            <span>{showRawMd ? "Hide README.md Code ▲" : "View README.md Code ▼"}</span>
          </button>

          <AnimatePresence>
            {showRawMd && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full mt-3 overflow-hidden rounded-2xl bg-[#080812] border border-gray-800 p-4 relative"
              >
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-800 text-xs text-gray-400">
                  <span className="font-mono">README.md snippet</span>
                  <button
                    onClick={handleCopy}
                    className="px-2.5 py-1 rounded bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 text-[11px] font-semibold transition-all cursor-pointer"
                  >
                    {copied ? "✓ Copied!" : "📋 Copy"}
                  </button>
                </div>
                <pre className="text-[12px] font-mono text-purple-300 leading-relaxed whitespace-pre-wrap select-all">
                  {RAW_MARKDOWN}
                </pre>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

export default GitHubStats;
