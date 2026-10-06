import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import EmailIcon from "./../public/assets/icons/email.svg";
import { soundManager } from "@/utils/audio";

function About({ onOpenResume }) {
  return (
    <section
      className="my-16 md:my-28 md:w-2/3 w-full h-full xl:ml-36 lg:ml-12 p-4 sm:p-8"
      id="about"
    >
      <div>
        <p className="sectionSubText dark:text-gray-300 text-gray-600">
          Full Stack Developer &amp; Data Analytics
        </p>
        <h2 className="sectionHeadText dark:text-white text-ctnPrimaryLight">
          About Me.
        </h2>
      </div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-6 dark:text-gray-200 text-gray-800 text-[16px] sm:text-[17px] w-full leading-[30px] flex flex-col justify-between gap-6"
      >
        {/* Profile Card Header with User's Photo */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-5 rounded-2xl dark:bg-[#0d1322]/90 bg-white/90 border border-indigo-500/30 dark:border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-950/20">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden ring-3 ring-cyan-500/50 shadow-md shrink-0">
            <Image
              src="/assets/avatar.png"
              alt="Ratan Chaurasiya"
              fill={true}
              sizes="96px"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-gray-900">
              Ratan Chaurasiya
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-cyan-400 mt-0.5">
              Full Stack Developer • SEO Intern @ Advaitya Projects
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400 font-semibold">Available for Work &amp; Collaborations</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p>
            Hello! I&apos;m{" "}
            <span className="dark:text-white text-gray-900 font-bold">
              Ratan Chaurasiya
            </span>
            , a B.Tech Information Technology student at Silver Oak University
            passionate about{" "}
            <span className="text-purple-400 font-semibold">Web Development</span>,{" "}
            <span className="text-blue-400 font-semibold">Data Analytics</span>,{" "}
            <span className="text-emerald-400 font-semibold">SEO</span>, and{" "}
            <span className="text-pink-400 font-semibold">AI Systems</span>. I
            enjoy transforming raw data into meaningful insights and building
            modern digital solutions.
          </p>
          <p>
            I combine creativity, problem-solving, and analytical thinking to
            engineer user-friendly applications and practical software systems.
            Currently working as an{" "}
            <span className="text-emerald-400 font-bold">
              SEO Intern at ADVAITYA PROJECTS
            </span>{" "}
            (Science City, Ahmedabad), driving organic visibility, keyword
            strategy, and technical search performance.
          </p>
          <p>
            I also contribute to real-world software projects, including a{" "}
            <span className="text-cyan-400 font-bold">
              Desktop Locker System
            </span>
            , where I manage system functionality, user access control, security
            data, and administrative operations.
          </p>

          <div className="p-5 rounded-2xl dark:bg-[#0d1322]/80 bg-indigo-50/60 border border-indigo-500/20 dark:border-cyan-500/25 text-sm space-y-3 shadow-md">
            <p className="font-bold dark:text-white text-gray-900 flex items-center gap-2">
              <span>💻</span> What I bring to the table:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 dark:text-gray-300 text-gray-700 text-xs sm:text-sm pl-2 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Full Stack Web Dev (React.js, Node.js, Express, MongoDB, MySQL)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Data Analytics &amp; Visualizations (Python, SQL, Power BI, Excel)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Technical SEO, Site Audits &amp; Search Performance (Advaitya Projects)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Modern AI Workflows &amp; Rapid Prototyping for high-impact software delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>System Administration &amp; Access Management (Desktop Locker System)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Display badges */}
        <div className="flex flex-wrap gap-3 pt-1">
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl dark:bg-[#0d1322] bg-white border border-indigo-500/30 dark:border-cyan-500/30 shadow-sm">
            <span className="text-cyan-400 font-bold text-lg">🎓</span>
            <span className="dark:text-white text-gray-900 font-semibold text-xs sm:text-sm">
              B.Tech IT — Silver Oak University
            </span>
          </div>
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl dark:bg-emerald-950/30 bg-emerald-50 border border-emerald-500/30 shadow-sm">
            <span className="text-emerald-400 font-bold text-lg">💼</span>
            <span className="text-emerald-700 dark:text-emerald-300 font-semibold text-xs sm:text-sm">
              SEO Intern @ ADVAITYA PROJECTS
            </span>
          </div>
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl dark:bg-cyan-950/30 bg-cyan-50 border border-cyan-500/30 shadow-sm">
            <span className="text-cyan-400 font-bold text-lg">🛡️</span>
            <span className="text-cyan-800 dark:text-cyan-300 font-semibold text-xs sm:text-sm">
              Admin @ Desktop Locker System
            </span>
          </div>
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl dark:bg-[#0d1322] bg-white border border-indigo-500/30 dark:border-cyan-500/30 shadow-sm">
            <span className="text-cyan-400 font-bold text-lg">🚀</span>
            <span className="dark:text-white text-gray-900 font-semibold text-xs sm:text-sm">
              Full-Stack &amp; Data Analytics
            </span>
          </div>
        </div>

        {/* Contact Quick Links */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-fit break-words">
          <Link
            href="mailto:ratanchaurasiya61@gmail.com"
            onClick={() => soundManager.playClick()}
            className="hover:text-primary dark:text-gray-200 text-gray-800 transition-all duration-100 ease-in flex items-center gap-2.5 flex-wrap word-break hover:-translate-y-0.5 font-medium text-sm sm:text-base"
          >
            <EmailIcon className="w-[22px] h-[22px] fill-current text-primary" />
            <span>ratanchaurasiya61@gmail.com</span>
          </Link>
          <a
            href="https://wa.me/916390035039?text=Hi%20Ratan,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playClick()}
            className="hover:text-emerald-500 dark:text-gray-200 text-gray-800 transition-all duration-100 ease-in flex items-center gap-2 hover:-translate-y-0.5 font-medium text-sm sm:text-base"
          >
            <span className="text-xl">💬</span>
            <span>+91 6390035039</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 items-center">
          {socials.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              key={social.id}
              onClick={() => soundManager.playClick()}
              className="w-9 h-9 p-1.5 rounded-xl bg-white/5 hover:bg-primary/20 dark:text-gray-200 text-gray-700 hover:text-primary transition-all duration-150 flex items-center justify-center border border-gray-600/30 hover:border-primary"
              title={social.id}
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* Action Button: View CV / Resume */}
        <div className="pt-2">
          <button
            onClick={() => {
              soundManager.playClick();
              if (onOpenResume) {
                onOpenResume();
              } else {
                window.open("/document/Ratan-Chaurasiya-Resume.pdf", "_blank");
              }
            }}
            className="py-3 px-8 rounded-2xl bg-gradient-to-r from-indigo-600 via-cyan-500 to-indigo-600 hover:brightness-110 text-white font-bold text-sm sm:text-base shadow-xl shadow-cyan-900/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer ring-2 ring-cyan-400/40"
          >
            <span>View CV / Resume</span>
            <span className="text-base">📄</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
