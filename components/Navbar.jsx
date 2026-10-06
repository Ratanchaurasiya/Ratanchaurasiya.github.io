import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { navLinks } from "../constants";
import ThemeButton from "./ThemeButton";
import Menu from "./../public/assets/icons/menu.svg";
import Close from "./../public/assets/icons/close.svg";
import { soundManager } from "@/utils/audio";

function Navbar({ onOpenResume, onOpenCmd, isSoundEnabled, toggleSound }) {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [avatarToggle, setAvatarToggle] = useState(false);

  useEffect(() => {
    if (avatarToggle || toggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [avatarToggle, toggle]);

  function AvatarModal() {
    return (
      <aside
        className="w-[100svw] h-[100svh] flex justify-center items-center bg-[#000000aa] fixed top-0 left-0 z-50 backdrop-blur-md"
        onClick={() => {
          soundManager.playClick();
          setAvatarToggle(false);
        }}
      >
        <div
          className="sm:w-[480px] sm:h-[480px] xs:w-[360px] xs:h-[360px] w-[280px] h-[280px] dark:bg-[#0b0f19]/95 bg-[#ffffff] p-6 flex flex-col justify-between items-center backdrop-blur-xl border border-cyan-500/30 rounded-3xl shadow-2xl shadow-indigo-950/40 modal relative"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-[80%] rounded-2xl overflow-hidden border border-cyan-500/20">
            <Image
              src="/assets/avatar.png"
              alt="Ratan Chaurasiya"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              className="object-cover"
            />
          </div>

          <div className="w-full flex items-center justify-between pt-3">
            <div>
              <h4 className="dark:text-white text-gray-900 font-bold text-base">
                Ratan Chaurasiya
              </h4>
              <p className="text-xs text-indigo-500 dark:text-cyan-300 font-medium">
                Full Stack Developer &amp; SEO Specialist
              </p>
            </div>
            <button
              onClick={() => {
                soundManager.playClick();
                setAvatarToggle(false);
              }}
              className="px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-600 dark:text-cyan-300 text-xs font-semibold transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </aside>
    );
  }

  const handleNavClick = (nav) => {
    soundManager.playClick();
    setActive(nav.title);
    setToggle(false);
    const targetId = nav.id;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="paddingX w-full flex items-center py-4 fixed top-0 z-40 bg-white/90 dark:bg-[#070b16]/90 backdrop-blur-xl border-b border-indigo-100 dark:border-cyan-500/20 shadow-lg shadow-indigo-950/25">
        {avatarToggle && <AvatarModal />}

        <div className="w-full flex justify-between items-center max-w-7xl mx-auto gap-3">
          {/* Logo & Avatar */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <div
              className="w-10 h-10 rounded-full relative cursor-pointer ring-2 ring-cyan-500/50 hover:ring-indigo-400 transition-all overflow-hidden shrink-0"
              onClick={() => {
                soundManager.playClick();
                setAvatarToggle(true);
              }}
              title="Click to view avatar"
            >
              <Image
                src="/assets/avatar.png"
                alt="Ratan Chaurasiya"
                fill={true}
                sizes="40px"
                className="object-cover"
              />
            </div>
            <Link href="/" className="flex flex-col">
              <span className="dark:text-white text-gray-900 text-[16px] sm:text-[18px] font-black tracking-tight leading-tight hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                <span>Ratan Chaurasiya</span>
              </span>
              <span className="hidden sm:inline-block text-[11px] font-medium text-cyan-600 dark:text-cyan-400">
                Full Stack Developer &amp; SEO
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="list-none hidden lg:flex flex-row gap-5 xl:gap-7 items-center">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`dark:text-slate-300 text-slate-700 transition-colors text-[14px] xl:text-[15px] font-semibold cursor-pointer ${
                  active === nav.title
                    ? "text-indigo-600 dark:text-cyan-400 border-b-2 border-indigo-600 dark:border-cyan-400"
                    : "hover:text-indigo-600 dark:hover:text-cyan-300"
                }`}
                onClick={() => handleNavClick(nav)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          {/* Desktop Action Buttons: View CV, Terminal, Audio, Theme */}
          <div className="hidden md:flex items-center gap-2.5">
            {onOpenResume && (
              <button
                onClick={() => {
                  soundManager.playClick();
                  onOpenResume();
                }}
                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:brightness-110 text-white text-xs font-semibold shadow-md shadow-indigo-500/30 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
                title="View Resume / CV"
              >
                <span>CV</span>
                <span>📄</span>
              </button>
            )}

            {onOpenCmd && (
              <button
                onClick={() => {
                  soundManager.playClick();
                  onOpenCmd();
                }}
                className="px-2.5 py-1.5 rounded-xl bg-indigo-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-indigo-700 dark:text-cyan-300 hover:text-indigo-900 dark:hover:text-white text-xs font-mono transition-all flex items-center gap-1 cursor-pointer"
                title="Command Palette (Ctrl + K)"
              >
                <span>⌘K</span>
              </button>
            )}

            {toggleSound && (
              <button
                onClick={() => {
                  soundManager.playClick();
                  toggleSound();
                }}
                className="w-8 h-8 rounded-xl bg-indigo-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-indigo-700 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-300 flex items-center justify-center transition-all cursor-pointer text-sm"
                title={isSoundEnabled ? "Sound ON (Click to Mute)" : "Sound OFF (Click to Unmute)"}
              >
                {isSoundEnabled ? "🔊" : "🔇"}
              </button>
            )}

            <div className="ml-1">
              <ThemeButton />
            </div>
          </div>

          {/* Mobile Hamburger & Actions */}
          <div className="lg:hidden flex items-center gap-2">
            {onOpenResume && (
              <button
                onClick={() => {
                  soundManager.playClick();
                  onOpenResume();
                }}
                className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-[11px] font-semibold flex items-center gap-1 shadow-sm"
              >
                <span>CV</span>
                <span>📄</span>
              </button>
            )}

            <button
              onClick={() => {
                soundManager.playClick();
                setToggle(!toggle);
              }}
              className="w-9 h-9 rounded-xl bg-indigo-50/80 dark:bg-white/5 border border-indigo-200 dark:border-cyan-500/30 text-slate-800 dark:text-white flex items-center justify-center cursor-pointer p-2 hover:border-cyan-400 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {toggle ? <Close className="w-5 h-5 fill-current" /> : <Menu className="w-5 h-5 fill-current" />}
            </button>
          </div>
        </div>

        {/* Mobile Full Drawer Dropdown */}
        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed top-[68px] left-3 right-3 p-5 bg-white/95 dark:bg-[#070b16]/98 border border-indigo-100 dark:border-cyan-500/30 rounded-3xl shadow-2xl shadow-indigo-950/40 backdrop-blur-2xl z-50 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-indigo-100 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400">
                  Navigation Menu
                </span>
                <ThemeButton />
              </div>

              <ul className="list-none flex flex-col gap-2.5">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-semibold text-[15px] p-2.5 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                      active === nav.title
                        ? "bg-indigo-600/15 text-indigo-600 dark:text-cyan-300 border border-indigo-500/30 dark:border-cyan-500/40"
                        : "text-slate-800 dark:text-slate-200 hover:bg-indigo-50/60 dark:hover:bg-white/5"
                    }`}
                    onClick={() => handleNavClick(nav)}
                  >
                    <span>{nav.title}</span>
                    <span className="text-xs text-cyan-500 dark:text-cyan-400 font-bold">→</span>
                  </li>
                ))}
              </ul>

              {/* Mobile Quick Utility Actions */}
              <div className="pt-3 border-t border-indigo-100 dark:border-slate-800 grid grid-cols-3 gap-2">
                {onOpenResume && (
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      setToggle(false);
                      onOpenResume();
                    }}
                    className="py-2 px-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
                  >
                    <span>View CV</span>
                    <span>📄</span>
                  </button>
                )}

                {toggleSound && (
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      toggleSound();
                    }}
                    className="py-2 px-3 rounded-xl bg-indigo-500/10 hover:bg-cyan-500/20 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 border border-cyan-500/30 active:scale-95 transition-all"
                  >
                    <span>{isSoundEnabled ? "Sound ON" : "Sound OFF"}</span>
                    <span>{isSoundEnabled ? "🔊" : "🔇"}</span>
                  </button>
                )}

                {onOpenCmd && (
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      setToggle(false);
                      onOpenCmd();
                    }}
                    className="py-2 px-3 rounded-xl bg-indigo-500/10 hover:bg-cyan-500/20 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 border border-cyan-500/30 font-mono active:scale-95 transition-all"
                  >
                    <span>Terminal</span>
                    <span>⌘K</span>
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

export default Navbar;
