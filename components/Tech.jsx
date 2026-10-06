import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "@/utils/motion";

const categories = ["All", "Languages", "Frameworks", "Databases", "Tools"];

const allTech = [
  ...technologies.languages.map((t) => ({ ...t, category: "Languages" })),
  ...technologies.frameworks.map((t) => ({ ...t, category: "Frameworks" })),
  ...technologies.databases.map((t) => ({ ...t, category: "Databases" })),
  ...technologies.tools.map((t) => ({ ...t, category: "Tools" })),
];

function Tech() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTech =
    activeFilter === "All"
      ? allTech
      : allTech.filter((t) => t.category === activeFilter);

  return (
    <section className="w-full h-fit p-4 sm:p-8 mt-20" id="skills">
      <div className="text-center mx-auto max-w-4xl">
        <p className="sectionSubText text-center font-bold tracking-[0.2em] text-indigo-600 dark:text-cyan-400 mb-2">
          TECH STACK &amp; TOOLING
        </p>
        <h2 className="sectionHeadText text-center">
          My Skills.
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-[16px] text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
          A practical combination of frontend development, backend development, databases, programming, data analytics, and modern AI-assisted development tools.
        </p>
      </div>

      {/* Filter Tabs for Technologies & Developer Tools */}
      <div className="mt-10 flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border ${
              activeFilter === cat
                ? "bg-primary text-white border-primary shadow-lg shadow-primary/30"
                : "bg-bgSecondaryLight dark:bg-[#0d1322]/80 text-ctnSecondaryLight dark:text-ctnSecondaryDark border-gray-600/30 hover:border-primary/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Filterable Technologies & Developer Tools Showcase */}
      <motion.div
        layout
        variants={fadeIn("up", "tween", 0.2, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-10 max-w-5xl mx-auto p-6 sm:p-8 rounded-2xl dark:bg-[#0d1322]/95 bg-white/95 border border-slate-200 dark:border-cyan-500/20 backdrop-blur-md shadow-card min-h-[260px]"
      >
        <h3 className="text-center text-lg sm:text-xl font-bold mb-8 text-ctnPrimaryLight dark:text-ctnPrimaryDark">
          Technologies & Developer Tools
        </h3>

        <motion.div
          layout
          className="flex flex-wrap justify-center items-center gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredTech.map((tech) => (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25 }}
              >
                <Link
                  href={tech.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center gap-2.5 p-3.5 rounded-xl hover:bg-primary/10 transition-all duration-200"
                  title={`${tech.name} — ${tech.level || tech.category}`}
                >
                  <div className="w-12 h-12 relative group-hover:scale-110 transition-transform duration-200">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill={true}
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[13px] font-medium text-ctnSecondaryLight dark:text-ctnSecondaryDark group-hover:text-primary transition-colors">
                    {tech.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default SectionWrapper(Tech, "skills");
