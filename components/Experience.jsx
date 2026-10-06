import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

function ExperienceCard({ experience, theme }) {
  const accent = experience.accentColor || "#915eff";

  return (
    <VerticalTimelineElement
      contentStyle={{
        background:
          theme !== "dark"
            ? "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)"
            : "linear-gradient(135deg, #0d1322 0%, #070b16 100%)",
        color: theme !== "dark" ? "#1e293b" : "#f8fafc",
        border: `1px solid ${accent}45`,
        borderRadius: "1.25rem",
        boxShadow: `0 10px 30px -10px ${accent}33`,
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${accent}`,
      }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg || "#1e293b",
        border: `3px solid ${accent}`,
        boxShadow: `0 0 16px ${accent}90`,
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full p-2">
          <div className="w-full h-full relative">
            <Image
              src={experience.icon}
              alt={experience.company_name}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
              className="object-contain"
            />
          </div>
        </div>
      }
    >
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: accent }}
          />
          <span
            className="text-xs uppercase font-bold tracking-wider"
            style={{ color: accent }}
          >
            {experience.date}
          </span>
        </div>
        <h3 className="dark:text-white text-gray-900 text-[20px] sm:text-[22px] font-bold">
          {experience.title}
        </h3>
        <p
          className="text-gray-400 text-[14px] sm:text-[15px] font-medium mt-1"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-4 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="dark:text-gray-300 text-gray-700 text-[13.5px] pl-1 leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>

      {experience.tags && (
        <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-gray-700/30">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-0.5 rounded-md font-semibold transition-colors"
              style={{
                backgroundColor: `${accent}18`,
                color: accent,
                border: `1px solid ${accent}35`,
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </VerticalTimelineElement>
  );
}

function Experience() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-8 my-16 relative z-0" id="roadmap">
      <span className="hash-span" id="roadmap">
        &nbsp;
      </span>

      <div className="text-center max-w-3xl mx-auto">
        <p className="sectionSubText text-center font-bold tracking-[0.2em] text-cyan-400 mb-2">
          Learning &amp; Career Roadmap
        </p>
        <h2 className="sectionHeadText text-center">
          My Journey.
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-[16.5px] text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
          A journey from academic foundations to practical development, data analysis, digital marketing, and continuous professional growth.
        </p>
      </div>

      <div className="mt-12 sm:mt-14 flex flex-col">
        {mounted && (
          <VerticalTimeline lineColor={theme === "dark" ? "#7e8c9f" : "#8c9db1"}>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
                theme={theme}
              />
            ))}
          </VerticalTimeline>
        )}
      </div>
    </section>
  );
}

export default Experience;
