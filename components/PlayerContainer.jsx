import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideIn } from "@/utils/motion";
import { PlayerCanvas } from "./canvas";
import { soundManager } from "@/utils/audio";

function PlayerContainer({ isMobile, onOpenResume }) {
  const [bubbleVisible, setBubbleVisible] = useState(true);

  return (
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative md:w-1/3 w-full md:h-auto h-[480px] flex flex-col justify-end"
    >
      {/* Interactive Speech Bubble */}
      <AnimatePresence>
        {bubbleVisible && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute top-4 left-4 right-4 z-20 p-4 rounded-2xl bg-[#181829]/95 border border-purple-500/40 shadow-2xl shadow-purple-950/40 backdrop-blur-xl"
          >
            {/* Pointer notch pointing down to avatar */}
            <div className="absolute -bottom-2 right-12 w-4 h-4 bg-[#181829] border-b border-r border-purple-500/40 transform rotate-45" />

            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-lg animate-bounce">👋</span>
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Ratan Chaurasiya
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Online
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  soundManager.playClick();
                  setBubbleVisible(false);
                }}
                className="text-gray-400 hover:text-white text-xs p-1"
                title="Dismiss"
              >
                ✕
              </button>
            </div>

            <p className="mt-2 text-xs sm:text-[13px] text-gray-200 leading-relaxed font-medium">
              &quot;Welcome to my 3D universe! I build high-performance full-stack web applications &amp; data solutions.&quot;
            </p>

            {/* Quick Interactive Action Chips */}
            <div className="mt-3 pt-2.5 border-t border-gray-700/40 flex flex-wrap gap-1.5">
              <button
                onClick={() => {
                  soundManager.playClick();
                  const el = document.getElementById("projects");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-primary hover:brightness-110 text-white transition-all shadow-sm"
              >
                🚀 Projects
              </button>
              {onOpenResume && (
                <button
                  onClick={() => {
                    soundManager.playClick();
                    onOpenResume();
                  }}
                  className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-gray-200 border border-white/10 transition-all"
                >
                  📄 View CV
                </button>
              )}
              <a
                href="https://wa.me/916390035039?text=Hi%20Ratan,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playSuccess()}
                className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-emerald-500/25 hover:bg-emerald-500/40 text-emerald-300 border border-emerald-500/40 transition-all flex items-center gap-1 shadow-sm"
              >
                <span>💬 Say Hi (WhatsApp)</span>
              </a>
              <button
                onClick={() => {
                  soundManager.playClick();
                  soundManager.speak(
                    "Hi there! I am Ratan Chaurasiya, Full Stack Developer at Silver Oak University. Welcome to my portfolio universe!"
                  );
                }}
                className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-purple-500/20 hover:bg-purple-500/35 text-purple-300 border border-purple-500/40 transition-all flex items-center gap-1 shadow-sm cursor-pointer"
                title="Listen to voice greeting"
              >
                <span>🔊 Listen</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Re-open bubble button if dismissed */}
      {!bubbleVisible && (
        <button
          onClick={() => {
            soundManager.playClick();
            setBubbleVisible(true);
          }}
          className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-xl bg-[#181829]/90 border border-purple-500/30 text-xs text-purple-300 hover:text-white shadow-lg backdrop-blur-md transition-all flex items-center gap-1.5 cursor-pointer"
        >
          <span>💬 Chat with Avatar</span>
        </button>
      )}

      {/* 3D Canvas */}
      <div
        className="w-full h-full relative"
        onClick={() => soundManager.playClick()}
      >
        <PlayerCanvas isMobile={isMobile} suitTheme="navy" />
      </div>
    </motion.div>
  );
}

export default PlayerContainer;
