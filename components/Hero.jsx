import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { ComputersCanvas } from "./canvas";
import { fadeIn, textVariant } from "@/utils/motion";
import { heroTexts } from "@/constants";

function Hero({ loading, isMobile, onOpenResume }) {
  return (
    <section
      className="relative w-full min-h-[100svh] lg:min-h-[860px] pb-12 mx-auto flex flex-col justify-start overflow-x-clip"
      id="home"
    >
      {/* 3D PC Canvas in Background (Active for both mobile and desktop) */}
      <motion.div
        variants={fadeIn("up", "spring")}
        initial="hidden"
        whileInView={!loading && "show"}
        viewport={{ once: true, amount: 0.05 }}
        className="w-full h-[460px] xs:h-[520px] sm:h-[620px] md:h-[800px] absolute top-[210px] xs:top-[230px] sm:top-[200px] md:top-[170px] left-0 md:left-[20%] z-10 pointer-events-none md:pointer-events-auto"
      >
        <ComputersCanvas isMobile={isMobile} />
      </motion.div>

      {/* Foreground Content Container (z-20 keeps all text, buttons, and stats crystal clear on top of 3D PC) */}
      <div
        className="relative md:absolute md:inset-0 pt-24 sm:pt-28 md:pt-0 md:top-[120px] max-w-7xl mx-auto paddingX w-full flex flex-row items-start gap-3 sm:gap-5 z-20 pointer-events-auto"
      >
        {/* Pin and violet gradient line */}
        <div className="flex flex-col justify-center items-center mt-3 sm:mt-5 shrink-0 pointer-events-auto">
          <div className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
          <div className="w-1 sm:h-80 h-32 xs:h-40 violet-gradient rounded-full" />
        </div>

        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView={!loading && "show"}
          viewport={{ once: true, amount: 0.05 }}
          className="z-20 max-w-2xl w-full pointer-events-auto"
        >
          {/* Status pill with profile photo */}
          <div className="flex items-center gap-2.5 sm:gap-3 mb-2 flex-wrap">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full ring-2 ring-cyan-500/80 overflow-hidden relative shadow-lg shadow-indigo-950/40 shrink-0">
              <Image
                src="/assets/avatar.png"
                alt="Ratan Chaurasiya"
                fill={true}
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/40 text-cyan-300 text-[11px] sm:text-xs font-semibold backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Full Stack &amp; SEO Roles</span>
            </div>
          </div>

          <h1 className="heroHeadText drop-shadow-md">
            Hello, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-300">
              Ratan Chaurasiya
            </span>
          </h1>

          <p className="heroSubText mt-2 tracking-wide flex flex-wrap items-center gap-1.5 sm:gap-2 drop-shadow-sm">
            <span>And I&apos;m a</span>{" "}
            <span className="text-cyan-400 font-semibold">
              <TypeAnimation
                sequence={heroTexts}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </span>
          </p>

          <p className="mt-3 text-slate-300 text-[13px] xs:text-[14px] sm:text-[16.5px] leading-[22px] xs:leading-[25px] sm:leading-[28px] max-w-xl font-normal drop-shadow-sm">
            A passionate{" "}
            <span className="text-cyan-400 font-semibold">Full Stack Developer</span>{" "}
            specializing in modern web applications,{" "}
            <span className="text-indigo-400 font-semibold">database-driven systems</span>,{" "}
            <span className="text-amber-400 font-semibold">SEO</span>, and practical{" "}
            <span className="text-emerald-400 font-semibold">AI-assisted development</span>.
          </p>

          {/* Action Buttons */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-4 z-30 relative pointer-events-auto">
            <a
              href="#contact"
              className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:brightness-110 text-white py-3 px-6 sm:px-7 rounded-xl font-semibold text-xs xs:text-sm sm:text-[15px] shadow-lg shadow-indigo-600/30 active:scale-95 transition-all text-center flex-1 xs:flex-none cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Contact Me</span>
              <span>✉️</span>
            </a>
            <button
              onClick={() => (onOpenResume ? onOpenResume() : window.open("/document/Ratan-Chaurasiya-Resume.pdf", "_blank"))}
              className="border-2 border-cyan-500/40 text-white bg-slate-900/70 hover:bg-cyan-500/20 hover:border-cyan-400 py-2.5 px-5 sm:px-6 rounded-xl font-semibold text-xs xs:text-sm sm:text-[15px] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer flex-1 xs:flex-none backdrop-blur-md shadow-md"
            >
              <span>View CV / Resume</span>
              <span>📄</span>
            </button>
          </div>

          {/* Key Stats Row: 3 columns with glassmorphism over the 3D PC background */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-slate-700/50 grid grid-cols-3 gap-2 sm:gap-4 z-30 relative pointer-events-auto">
            <div className="bg-slate-900/80 dark:bg-[#0d1322]/85 border border-slate-700/60 dark:border-cyan-500/25 backdrop-blur-md p-2.5 sm:px-4 sm:py-2.5 rounded-xl shadow-lg shadow-black/40 hover:border-cyan-400/60 transition-all duration-300 text-center sm:text-left">
              <h3 className="text-lg xs:text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                200+
              </h3>
              <p className="text-[10px] xs:text-xs sm:text-sm text-slate-300 font-medium mt-0.5 leading-tight">
                Coding Solved
              </p>
            </div>
            <div className="bg-slate-900/80 dark:bg-[#0d1322]/85 border border-slate-700/60 dark:border-cyan-500/25 backdrop-blur-md p-2.5 sm:px-4 sm:py-2.5 rounded-xl shadow-lg shadow-black/40 hover:border-cyan-400/60 transition-all duration-300 text-center sm:text-left">
              <h3 className="text-lg xs:text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                5+
              </h3>
              <p className="text-[10px] xs:text-xs sm:text-sm text-slate-300 font-medium mt-0.5 leading-tight">
                Projects Built
              </p>
            </div>
            <div className="bg-slate-900/80 dark:bg-[#0d1322]/85 border border-slate-700/60 dark:border-cyan-500/25 backdrop-blur-md p-2.5 sm:px-4 sm:py-2.5 rounded-xl shadow-lg shadow-black/40 hover:border-cyan-400/60 transition-all duration-300 text-center sm:text-left">
              <h3 className="text-lg xs:text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                7+
              </h3>
              <p className="text-[10px] xs:text-xs sm:text-sm text-slate-300 font-medium mt-0.5 leading-tight">
                Certifications
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator (Desktop only) */}
      <div className="absolute xs:bottom-10 bottom-32 left-1/2 -translate-x-1/2 justify-center items-center z-20 hidden md:flex pointer-events-auto">
        <a href="#about" aria-label="Scroll to About section">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-[#aaa6c3] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#aaa6c3] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
