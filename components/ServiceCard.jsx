import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

function ServiceCard({ index, title, icon, description }) {
  return (
    <Tilt className="w-full max-w-[340px] h-full" tiltMaxAngleX="10" tiltMaxAngleY="10">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.15, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="w-full h-full bg-gradient-to-br from-indigo-500/50 via-cyan-500/40 to-teal-400/30 p-[1px] rounded-[24px] shadow-card group hover:shadow-cyan-500/20 transition-all duration-300"
      >
        <div
          className="dark:bg-[#0d1322]/95 bg-white/95 rounded-[24px] py-7 px-5 sm:px-6 min-h-[310px] h-full flex flex-col justify-between items-center text-center backdrop-blur-xl border border-slate-800/60 dark:border-cyan-500/10"
        >
          <div className="w-16 h-16 object-contain relative flex items-center justify-center text-indigo-500 dark:text-cyan-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <div className="mt-4 flex flex-col items-center justify-center flex-1">
            <h3 className="dark:text-white text-slate-900 text-[18px] sm:text-[19px] font-bold text-center leading-snug group-hover:text-cyan-400 transition-colors">
              {title}
            </h3>
            {description && (
              <p className="dark:text-slate-400 text-slate-600 text-[13px] sm:text-[13.5px] mt-2.5 leading-relaxed font-normal">
                {description}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
}

export default ServiceCard;
