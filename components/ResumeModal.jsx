import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { soundManager } from "@/utils/audio";

function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      soundManager.playOpen();
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-[88vh] bg-[#111322] border border-purple-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-700/50 bg-[#181829]/90">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg">
                    Ratan Chaurasiya — Resume
                  </h3>
                  <p className="text-xs text-gray-400">
                    Full Stack Developer | B.Tech IT Topper (Silver Oak University)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/document/Ratan-Chaurasiya-Resume.pdf"
                  download="Ratan-Chaurasiya-Resume.pdf"
                  onClick={() => soundManager.playClick()}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary hover:brightness-110 text-white transition-all shadow-md"
                >
                  <span>Download CV</span>
                  <span>↓</span>
                </a>
                <a
                  href="/document/Ratan-Chaurasiya-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClick()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-gray-200 transition-all border border-white/10"
                >
                  <span className="hidden sm:inline">New Tab</span>
                  <span>↗</span>
                </a>
                <button
                  onClick={() => {
                    soundManager.playClick();
                    onClose();
                  }}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-red-500/20 hover:text-red-400 text-gray-400 flex items-center justify-center transition-all text-sm font-bold ml-1"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* PDF Viewer Frame */}
            <div className="flex-1 w-full bg-slate-950 relative">
              <iframe
                src="/document/Ratan-Chaurasiya-Resume.pdf#toolbar=1"
                title="Ratan Chaurasiya Resume Preview"
                className="w-full h-full border-none"
              />
            </div>

            {/* Bottom Bar for Mobile */}
            <div className="sm:hidden px-4 py-3 bg-[#181829] border-t border-gray-700/50 flex justify-between items-center">
              <span className="text-xs text-gray-400">PDF Preview</span>
              <a
                href="/document/Ratan-Chaurasiya-Resume.pdf"
                download="Ratan-Chaurasiya-Resume.pdf"
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary text-white"
              >
                Download PDF ↓
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ResumeModal;
