import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";

import { fadeIn, textVariant } from "../utils/motion";
import { soundManager } from "@/utils/audio";

const educationItems = [
  {
    institution: "Silver Oak University (SOCET)",
    degree: "B.Tech in Information Technology",
    timeline: "2023 — 2027",
    honor: "🏆 Rank 3 Topper — 9.10 SPI (1st Sem IT)",
    badge: "Official University Honor",
    tagline: "University Topper",
    theme: {
      cardBorder:
        "border-amber-400/40 dark:border-amber-500/30 hover:border-amber-400 dark:hover:border-amber-300",
      cardShadow: "hover:shadow-amber-500/20",
      cardBg:
        "dark:bg-gradient-to-b dark:from-[#17130a]/90 dark:to-[#0b101c]/90 bg-gradient-to-b from-amber-50/70 to-white/95",
      badge:
        "bg-amber-500/20 text-amber-800 dark:text-amber-200 border-amber-500/40 shadow-amber-500/10",
      institution: "text-amber-600 dark:text-amber-400",
      honorPill:
        "bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-500/35",
      checkIcon: "text-amber-500 dark:text-amber-400",
      titleHover: "group-hover:text-amber-500 dark:group-hover:text-amber-300",
      button:
        "bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:brightness-110 shadow-md shadow-amber-600/30",
      footerTag: "text-amber-600 dark:text-amber-400",
      ambientGlow: "from-amber-500/25 via-yellow-500/10 to-transparent",
    },
    description:
      "Officially recognized and felicitated by Silver Oak University on their official channels for securing Rank 3 with an outstanding 9.10 SPI in 1st Semester B.Tech Information Technology.",
    keyPoints: [
      "Secured Rank 3 with 9.10 SPI among IT B.Tech Students",
      "Published on Silver Oak University Official Congratulations Poster",
      "Rigorous foundations in Data Structures, OOPs, DBMS & Cloud",
    ],
    image: "/assets/education/silver_oak_rank3.png",
    link: "https://www.instagram.com/p/DGKz0kGT7XO/?stkn=cGdkZ25kaGZrNXE5",
    linkText: "View Official Post",
  },
  {
    institution: "R.D.B. Academy Senior Secondary School",
    degree: "Science Exhibition Working Model Lead",
    timeline: "Senior Secondary",
    honor: "🥇 1st Prize Winner & Newspaper Featured",
    badge: "Published in Regional Press",
    tagline: "Science & Innovation",
    theme: {
      cardBorder:
        "border-emerald-400/40 dark:border-emerald-500/30 hover:border-emerald-400 dark:hover:border-emerald-300",
      cardShadow: "hover:shadow-emerald-500/20",
      cardBg:
        "dark:bg-gradient-to-b dark:from-[#061812]/90 dark:to-[#0b101c]/90 bg-gradient-to-b from-emerald-50/70 to-white/95",
      badge:
        "bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 border-emerald-500/40 shadow-emerald-500/10",
      institution: "text-emerald-600 dark:text-emerald-400",
      honorPill:
        "bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/35",
      checkIcon: "text-emerald-500 dark:text-emerald-400",
      titleHover: "group-hover:text-emerald-500 dark:group-hover:text-emerald-300",
      button:
        "bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 hover:brightness-110 shadow-md shadow-emerald-600/30",
      toggleActive: "bg-emerald-600 text-white shadow-emerald-600/40",
      footerTag: "text-emerald-600 dark:text-emerald-400",
      ambientGlow: "from-emerald-500/25 via-teal-500/10 to-transparent",
    },
    description:
      "Spearheaded working models of 'Network Jammer & Smart Automated Street Lighting System'. Praised by school management and featured in regional news media for engineering innovation.",
    keyPoints: [
      "Built working Network Jammer & Smart Street Light prototype",
      "Featured in local newspaper: 'छात्रों ने एक से एक मॉडल बनाए'",
      "Demonstrated circuit automation and wireless RF fundamentals",
    ],
    image: "/assets/education/science_model_lead.jpg",
    secondaryImage: "/assets/education/science_model_newspaper.jpg",
    link: "/assets/education/science_model_newspaper.jpg",
    linkText: "View Newspaper Article",
  },
  {
    institution: "R.D.B. Academy Senior Secondary School",
    degree: "Senior Secondary (Science Stream)",
    timeline: "Academic Distinction",
    honor: "🎖️ Academic Excellence Topper",
    badge: "School Rank 1",
    tagline: "Scholastic Distinction",
    theme: {
      cardBorder:
        "border-purple-400/40 dark:border-purple-500/30 hover:border-purple-400 dark:hover:border-purple-300",
      cardShadow: "hover:shadow-purple-500/20",
      cardBg:
        "dark:bg-gradient-to-b dark:from-[#150b23]/90 dark:to-[#0b101c]/90 bg-gradient-to-b from-purple-50/70 to-white/95",
      badge:
        "bg-purple-500/20 text-purple-800 dark:text-purple-200 border-purple-500/40 shadow-purple-500/10",
      institution: "text-purple-600 dark:text-purple-400",
      honorPill:
        "bg-purple-500/15 text-purple-800 dark:text-purple-300 border-purple-500/35",
      checkIcon: "text-purple-500 dark:text-purple-400",
      titleHover: "group-hover:text-purple-500 dark:group-hover:text-purple-300",
      button:
        "bg-gradient-to-r from-purple-600 via-indigo-600 to-fuchsia-500 hover:brightness-110 shadow-md shadow-purple-600/30",
      footerTag: "text-purple-600 dark:text-purple-400",
      ambientGlow: "from-purple-500/25 via-indigo-500/10 to-transparent",
    },
    description:
      "Awarded School Academic Topper and felicitated with garland, cash prize, and Certificate of Merit by the school principal and management for securing the highest marks in academic examinations.",
    keyPoints: [
      "Rank 1 Academic Topper in Senior Secondary Board exams",
      "Felicitated with cash prize, honor garland & certificate",
      "Distinction in Mathematics, Physics & Computer Science",
    ],
    image: "/assets/education/academic_topper_press.jpg",
    link: "/assets/education/academic_topper_press.jpg",
    linkText: "View Felicitation & Press",
  },
];

function EducationCard({
  index,
  institution,
  degree,
  timeline,
  honor,
  badge,
  tagline,
  theme,
  description,
  keyPoints,
  image,
  secondaryImage,
  link,
  linkText,
}) {
  const [currentImg, setCurrentImg] = React.useState(image);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className="flex w-full justify-center"
    >
      <Tilt
        tiltMaxAngleX="5"
        tiltMaxAngleY="5"
        className={`group ${theme.cardBg} p-4 sm:p-5 rounded-2xl w-full max-w-[390px] sm:min-h-[580px] border ${theme.cardBorder} transition-all duration-300 shadow-xl shadow-black/25 ${theme.cardShadow} hover:-translate-y-1.5 flex flex-col justify-between backdrop-blur-xl relative overflow-hidden`}
      >
        {/* Subtle decorative background ambient glow */}
        <div
          className={`absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gradient-to-br ${theme.ambientGlow} blur-2xl pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity duration-500`}
        />

        {/* Top subtle highlight line */}
        <div
          className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${theme.ambientGlow}`}
        />

        <div className="relative z-10">
          {/* Main Photo with clickable preview */}
          <a
            href={currentImg || link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playClick()}
            className="block relative w-full h-[210px] rounded-xl overflow-hidden bg-slate-900/90 dark:bg-[#070b16] border border-slate-700/50 dark:border-slate-800 cursor-pointer group/img"
            title="Click to view full photo or article"
          >
            <Image
              src={currentImg}
              alt={honor}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain p-1 group-hover/img:scale-105 transition-transform duration-500"
            />
            {/* Tag badge overlay */}
            <div className="absolute top-3 left-3 z-10">
              <span
                className={`text-[11px] font-semibold px-3 py-1 rounded-full backdrop-blur-md border shadow-sm ${theme.badge}`}
              >
                {badge}
              </span>
            </div>

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="bg-black/80 text-white text-xs px-3 py-1.5 rounded-lg border border-white/20 shadow-lg backdrop-blur-sm flex items-center gap-1.5">
                <span>View Full Photo</span>
                <span>↗</span>
              </span>
            </div>
          </a>

          {/* Toggle buttons if multiple images exist */}
          {secondaryImage && (
            <div className="flex gap-2 mt-2.5 justify-center">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  soundManager.playClick();
                  setCurrentImg(image);
                }}
                className={`text-[11px] font-medium px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  currentImg === image
                    ? `${theme.toggleActive || "bg-indigo-600 text-white"} font-semibold shadow-sm`
                    : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white border border-slate-300 dark:border-slate-700/60"
                }`}
              >
                📸 Model Photo
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  soundManager.playClick();
                  setCurrentImg(secondaryImage);
                }}
                className={`text-[11px] font-medium px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  currentImg === secondaryImage
                    ? `${theme.toggleActive || "bg-indigo-600 text-white"} font-semibold shadow-sm`
                    : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white border border-slate-300 dark:border-slate-700/60"
                }`}
              >
                📰 Newspaper
              </button>
            </div>
          )}

          {/* Details */}
          <div className="mt-4">
            <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 font-medium">
              <span className={`${theme.institution} font-semibold`}>
                {institution}
              </span>
              <span>{timeline}</span>
            </div>

            <h3
              className={`dark:text-white text-ctnPrimaryLight font-bold text-[18px] mt-1 leading-snug transition-colors ${theme.titleHover}`}
            >
              {degree}
            </h3>

            <div
              className={`mt-2 inline-block text-[12px] font-semibold px-2.5 py-0.5 rounded-md border ${theme.honorPill}`}
            >
              {honor}
            </div>

            <p className="mt-3 text-gray-600 dark:text-gray-300 text-[13px] leading-relaxed">
              {description}
            </p>

            {/* Key Accomplishments Checklist */}
            <ul className="mt-3 space-y-1.5 border-t border-slate-200 dark:border-slate-800/80 pt-3">
              {keyPoints.map((point, i) => (
                <li
                  key={i}
                  className="text-xs text-gray-700 dark:text-gray-300 flex items-start gap-2"
                >
                  <span className={`${theme.checkIcon} font-bold`}>✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Button */}
        <div className="relative z-10 mt-5 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex justify-between items-center">
          <span
            className={`text-xs font-mono font-medium ${theme.footerTag}`}
          >
            {tagline}
          </span>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playClick()}
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl text-white transition-all duration-300 ${theme.button}`}
          >
            <span>{linkText}</span>
            <span>↗</span>
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
}

function Education() {
  return (
    <section
      className="my-16 sm:my-28 mx-auto max-w-7xl p-4 sm:p-8 relative z-0"
      id="education"
    >
      <span className="hash-span" id="education">
        &nbsp;
      </span>
      <div className="text-center max-w-3xl mx-auto">
        <p className="sectionSubText text-center font-bold tracking-[0.2em] bg-gradient-to-r from-amber-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent mb-2">
          ACADEMIC EXCELLENCE &amp; HONORS
        </p>
        <h2 className="sectionHeadText text-center">
          Education &amp; Honors.
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-[16px] text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Recognized for top academic standings, official college topper honors at Silver Oak University, state/school level science model innovations, and scholastic leadership.
        </p>
      </div>

      <div className="md:mt-12 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center w-full">
        {educationItems.map((item, index) => (
          <EducationCard key={item.honor} index={index} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Education;
