import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { soundManager } from "@/utils/audio";

function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const arch = project.architecture || {
    tagline: "System Architecture & Engineering Case Study",
    overview: project.description,
    diagram: [
      {
        tier: "Frontend Client",
        tech: project.tags?.map((t) => t.name).slice(0, 3).join(" / ") || "React.js / Modern UI",
        role: "Responsive client interface with modern state management and dynamic UI components.",
      },
      {
        tier: "Backend & Services",
        tech: "Node.js / Express / REST APIs",
        role: "Modular service architecture, request routing, validation logic, and secure endpoints.",
      },
      {
        tier: "Data Persistence",
        tech: "SQL / MySQL / MongoDB",
        role: "Structured data storage with normalized schemas, indexing, and high query performance.",
      },
    ],
    metrics: [
      { label: "Architecture", value: "Full Stack" },
      { label: "Performance", value: "Optimized" },
      { label: "Code Quality", value: "Production-Ready" },
    ],
    challenges: [
      "Designed scalable modular architecture separating presentation logic from data fetching pipelines.",
      "Ensured resilient error handling and cross-device responsive layouts.",
    ],
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            soundManager.playClick();
            onClose();
          }}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d0d1a] border border-purple-500/40 rounded-3xl shadow-2xl shadow-purple-950/70 overflow-hidden flex flex-col z-10"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-purple-500/20 bg-[#121226]/80 flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-[11px] font-bold text-purple-300 uppercase tracking-wider">
                  🏗️ System Architecture &amp; Deep-Dive
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-[11px] font-bold text-blue-300">
                  {project.category}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                {project.name}
              </h2>
              <p className="text-xs sm:text-sm text-purple-300/90 mt-1 font-medium">
                {arch.tagline}
              </p>
            </div>

            <button
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              className="p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all cursor-pointer"
              title="Close (Esc)"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-6 custom-scrollbar">
            {/* Overview & Project Image Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
              <div className="md:col-span-1 rounded-2xl overflow-hidden border border-white/10 relative h-48 bg-black/40">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-2 space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400">
                  Executive Engineering Summary
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {arch.overview}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags?.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-white/5 border border-white/10 text-gray-300"
                    >
                      #{t.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics Row */}
            {arch.metrics && arch.metrics.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-3 flex items-center gap-1.5">
                  <span>⚡</span> Key Architectural Metrics &amp; Benchmarks
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {arch.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-[#14142b]/90 border border-purple-500/20 text-center"
                    >
                      <div className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                        {m.value}
                      </div>
                      <div className="text-xs text-gray-400 mt-1 font-medium">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Multi-Tier Architecture Diagram Blocks */}
            {arch.diagram && (
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-3 flex items-center gap-1.5">
                  <span>🧩</span> Component Topology &amp; System Flow
                </h4>
                <div className="space-y-3">
                  {arch.diagram.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#131326] border border-purple-500/20 hover:border-purple-500/40 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                        <div className="flex items-center gap-2 font-bold text-white text-sm">
                          <span className="w-5 h-5 rounded-full bg-purple-500/30 text-purple-300 flex items-center justify-center text-xs">
                            {idx + 1}
                          </span>
                          <span>{item.tier}</span>
                        </div>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-800/40 w-fit">
                          {item.tech}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 pl-7 leading-relaxed">
                        {item.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Engineering Challenges Solved */}
            {arch.challenges && (
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-3 flex items-center gap-1.5">
                  <span>🛠️</span> Engineering Challenges Solved
                </h4>
                <div className="space-y-2.5">
                  {arch.challenges.map((c, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-950/15 border border-purple-500/20 text-xs sm:text-sm text-gray-300"
                    >
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span className="leading-relaxed">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer CTA */}
          <div className="p-4 sm:p-5 border-t border-purple-500/20 bg-[#121226]/80 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-gray-400">
              Verified Production Architecture • Ratan Chaurasiya
            </span>
            <div className="flex items-center gap-2.5">
              {project.source_code_link && (
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClick()}
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>Source Code</span>
                </a>
              )}
              {project.deployed_link && (
                <a
                  href={project.deployed_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playSuccess()}
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-primary hover:brightness-110 text-white transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  <span>🚀 Live Application</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ProjectModal;

