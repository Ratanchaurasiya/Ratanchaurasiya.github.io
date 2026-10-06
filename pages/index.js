import { useEffect, useState } from "react";
import Image from "next/image";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
  GitHubStats,
  Achievements,
  Education,
  ResumeModal,
  CommandPalette,
} from "@/components";
import HeroBackground from "@/components/HeroBackground";
import EarthContainer from "@/components/EarthContainer";
import PlayerContainer from "@/components/PlayerContainer";
import UpArrow from "./../public/assets/icons/up-arrow.svg";
import Services from "@/components/Services";
import { soundManager } from "@/utils/audio";

function App({ loading }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [isMobile, setIsMobile] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);

  useEffect(() => {
    setIsSoundEnabled(soundManager.getEnabled());
  }, []);

  const toggleSound = async () => {
    const next = !isSoundEnabled;
    setIsSoundEnabled(next);
    await soundManager.setEnabled(next);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCmdOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Arrow / Mouse Cursor Hover Voice Reader (Speaks word when arrow hovers over element)
  useEffect(() => {
    if (!isSoundEnabled) return;

    let lastSpokenText = "";
    let hoverTimer = null;

    const handleMouseOver = (e) => {
      const target = e.target.closest(
        "button, a, h1, h2, h3, h4, [data-voice], .btn, li, span, p"
      );
      if (!target) return;

      let text =
        target.getAttribute("data-voice") ||
        target.getAttribute("aria-label") ||
        target.getAttribute("title");

      if (!text) {
        if (target.children.length === 0) {
          text = target.innerText;
        } else {
          const firstLine = target.innerText?.split("\n")[0];
          if (firstLine && firstLine.length <= 40) {
            text = firstLine;
          }
        }
      }

      if (!text) return;
      const clean = text.trim();
      if (!clean || clean === lastSpokenText || clean.length < 2) return;

      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => {
        lastSpokenText = clean;
        soundManager.speakHover(clean);
      }, 100);
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      clearTimeout(hoverTimer);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isSoundEnabled]);

  return (
    <main className="relative z-0 w-full h-full">
      <div className="bg-cover bg-no-repeat bg-center">
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenCmd={() => setIsCmdOpen(true)}
          isSoundEnabled={isSoundEnabled}
          toggleSound={toggleSound}
        />
        <HeroBackground />
        <Hero
          loading={loading}
          isMobile={isMobile}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </div>

      <section className="relative z-0 flex md:flex-row flex-col-reverse w-full h-full overflow-hidden">
        <About onOpenResume={() => setIsResumeOpen(true)} />
        {!isMobile && (
          <PlayerContainer
            isMobile={isMobile}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}
      </section>

      <Services />
      <Experience />
      <Tech />
      <Works />
      <GitHubStats />
      <Achievements />
      <Education />

      <section className="relative z-0 flex md:flex-row justify-between items-center flex-col-reverse w-full h-full overflow-x-hidden sm:p-8 p-2 pb-8">
        <Contact />
        <EarthContainer isMobile={isMobile} />
        <StarsCanvas />
      </section>

      <footer className="w-full py-8 text-center text-xs sm:text-sm text-ctnSecondaryLight dark:text-ctnSecondaryDark border-t border-gray-600/20 backdrop-blur-md flex flex-col items-center justify-center gap-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full ring-2 ring-primary/60 overflow-hidden relative shadow-sm">
            <Image
              src="/assets/avatar.png"
              alt="Ratan Chaurasiya"
              fill={true}
              sizes="28px"
              className="object-cover"
            />
          </div>
          <span className="font-bold dark:text-white text-gray-800 text-sm">Ratan Chaurasiya</span>
        </div>
        <p>© 2026 Ratan Chaurasiya | All Rights Reserved.</p>
      </footer>

      {/* Floating Quick Terminal Launcher (Bottom Left) */}
      <button
        onClick={() => {
          soundManager.playClick();
          setIsCmdOpen(true);
        }}
        title="Developer Terminal (Ctrl + K)"
        className="fixed bottom-8 left-6 z-30 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#181829]/90 border border-purple-500/30 text-gray-300 hover:text-white shadow-xl shadow-purple-950/40 backdrop-blur-md hover:scale-105 hover:border-primary/60 transition-all text-xs font-mono cursor-pointer"
      >
        <span className="text-primary font-bold">⌘</span>
        <span>Ctrl + K</span>
      </button>

      {/* Scroll to Top Button (Bottom Right) */}
      <button
        onClick={() => {
          soundManager.playClick();
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        className="fixed md:w-10 md:h-10 h-8 w-8 p-2 bottom-8 md:right-10 right-8 text-center text-secondary backdrop-filter backdrop-blur-xl bg-opacity-20 bg-tertiary rounded-lg hover:scale-110 transition-all duration-300 z-30"
        title="Back to top"
      >
        <UpArrow />
      </button>

      {/* Interactive In-Site Resume PDF Preview Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Developer Command Palette / Terminal Modal */}
      <CommandPalette
        isOpen={isCmdOpen}
        onClose={() => setIsCmdOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        isSoundEnabled={isSoundEnabled}
        toggleSound={toggleSound}
      />
    </main>
  );
}

export default App;
