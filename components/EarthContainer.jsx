import { motion } from "framer-motion";

import { slideIn } from "@/utils/motion";
import { EarthCanvas } from "./canvas";

function EarthContainer({ isMobile }) {
	return (
		<motion.div
			variants={slideIn("right", "tween", 0.2, 1)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			className="xl:w-1/2 w-full md:w-1/2 h-[450px] sm:h-[520px] md:h-[600px] lg:h-[650px] xl:h-[700px] flex items-center justify-center relative my-auto"
		>
			<EarthCanvas isMobile={isMobile} />
		</motion.div>
	);
}

export default EarthContainer;
