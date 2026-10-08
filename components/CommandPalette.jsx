import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { soundManager } from "@/utils/audio";

const COMMANDS = [
  {
    id: "projects",
    title: "Browse Projects",
    subtitle: "View 3-column full-stack web applications & live demos",
    category: "Navigation",
    icon: "🚀",
    action: (helpers) => {
      helpers.close();
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: "education",
    title: "Education & Academic Honors",
    subtitle: "Silver Oak University Topper, Science Exhibition & Awards",
    category: "Highlights",
    icon: "🎓",
    action: (helpers) => {
      helpers.close();
      const el = document.getElementById("education");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: "resume",
    title: "View Resume (In-Site Preview)",
    subtitle: "Open full CV with technical skills and qualifications",
    category: "Profile",
    icon: "📄",
    action: (helpers) => {
      helpers.close();
      helpers.openResume();
    },
  },
  {
    id: "skills",
    title: "Explore Technologies & Skills",
    subtitle: "Languages, Frameworks, Databases & Developer Tools",
    category: "Navigation",
    icon: "⚡",
    action: (helpers) => {
      helpers.close();
      const el = document.getElementById("skills");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: "achievements",
    title: "Certifications & Achievements",
    subtitle: "NPTEL, IIT Roorkee, IIT Bombay, Microsoft Power BI",
    category: "Navigation",
    icon: "🏆",
    action: (helpers) => {
      helpers.close();
      const el = document.getElementById("achievements");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: "roadmap",
    title: "Growth Roadmap / Journey",
    subtitle: "Timeline of learning and software milestones",
    category: "Navigation",
    icon: "🗺️",
    action: (helpers) => {
      helpers.close();
      const el = document.getElementById("roadmap");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: "contact",
    title: "Contact Ratan Chaurasiya",
    subtitle: "Send a direct message or inquiry",
    category: "Navigation",
    icon: "✉️",
    action: (helpers) => {
      helpers.close();
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: "sound",
    title: "Toggle Sci-Fi Audio / Sound Effects",
    subtitle: "Turn micro-interaction sounds ON or OFF",
    category: "Settings",
    icon: "🔊",
    action: (helpers) => {
      helpers.toggleSound();
      helpers.close();
    },
  },
  {
    id: "github",
    title: "Open GitHub Profile",
    subtitle: "https://github.com/Ratanchaurasiya",
    category: "Social",
    icon: "💻",
    action: (helpers) => {
      helpers.close();
      window.open("https://github.com/Ratanchaurasiya", "_blank");
    },
  },
  {
    id: "linkedin",
    title: "Open LinkedIn Profile",
    subtitle: "Connect professionally on LinkedIn",
    category: "Social",
    icon: "💼",
    action: (helpers) => {
      helpers.close();
      window.open(
        "https://www.linkedin.com/in/ratan-codespace",
        "_blank"
      );
    },
  },
];

function CommandPalette({
  isOpen,
  onClose,
  onOpenResume,
  isSoundEnabled,
  toggleSound,
}) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const filteredCommands = COMMANDS.filter((cmd) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      cmd.title.toLowerCase().includes(q) ||
      cmd.subtitle.toLowerCase().includes(q) ||
      cmd.category.toLowerCase().includes(q) ||
      cmd.id.includes(q)
    );
  });

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      soundManager.playOpen();
    } else {
      setQuery("");
    }
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      soundManager.playClick();
      setSelectedIndex((prev) =>
        prev < filteredCommands.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      soundManager.playClick();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredCommands.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      const selected = filteredCommands[selectedIndex];
      if (selected) {
        soundManager.playSuccess();
        selected.action({
          close: onClose,
          openResume: onOpenResume,
          toggleSound,
        });
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="w-full max-w-2xl bg-[#141428]/95 border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDown}
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-5 py-3.5 border-b border-gray-700/50 bg-[#1c1c38]/90">
              <span className="text-xl">⚡</span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or jump to section... (e.g. 'projects', 'resume')"
                className="w-full bg-transparent text-white placeholder-gray-400 text-sm sm:text-base outline-none font-medium"
              />
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/10 text-gray-300 border border-white/10">
                ESC
              </span>
            </div>

            {/* Commands List */}
            <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-gray-800/40">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={cmd.id}
                      onClick={() => {
                        soundManager.playSuccess();
                        cmd.action({
                          close: onClose,
                          openResume: onOpenResume,
                          toggleSound,
                        });
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-xl cursor-pointer transition-all duration-150 ${
                        isSelected
                          ? "bg-gradient-to-r from-primary/30 to-[#915eff]/20 border border-primary/40 shadow-sm"
                          : "hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl p-1.5 rounded-lg bg-white/5 border border-white/10">
                          {cmd.icon}
                        </span>
                        <div>
                          <h4
                            className={`text-sm font-semibold ${
                              isSelected ? "text-white" : "text-gray-200"
                            }`}
                          >
                            {cmd.title}
                          </h4>
                          <p className="text-xs text-gray-400 leading-snug">
                            {cmd.subtitle}
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">
                        {cmd.category}
                      </span>
                    </div>
                  );
                })
              ) : (
                <div className="py-8 text-center text-gray-400 text-sm">
                  No commands matching &quot;{query}&quot;
                </div>
              )}
            </div>

            {/* Footer Hints */}
            <div className="flex items-center justify-between px-5 py-2.5 bg-[#0e0e1c] border-t border-gray-800/50 text-[11px] text-gray-400">
              <div className="flex items-center gap-3 font-mono">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
                <span>ESC Close</span>
              </div>
              <span className="text-[#915eff] font-medium">
                Developer Palette
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CommandPalette;
