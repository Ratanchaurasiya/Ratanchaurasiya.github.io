import Image from "next/image";

import Mountain1 from "../public/assets/background/mountain1.svg";
import Mountain2 from "../public/assets/background/mountain2.svg";
import Mountain3 from "../public/assets/background/mountain3.svg";
import Mountain5 from "../public/assets/background/mountain5.svg";
import HeroSvg from "../public/assets/background/hero-wave.svg";

function HeroBackground() {
  return (
    <div className="absolute top-0 w-full h-full min-h-[100svh] bg-gradient-to-b dark:from-[#070b16] dark:via-[#0c1427] dark:to-[#070b16] from-[#e0e7ff] to-[#f8fafc] overflow-hidden pointer-events-none">
      <Mountain1 className="w-full h-[446px] wave top-[170px] opacity-40 dark:opacity-30" />
      <Mountain2 className="w-full h-[464px] wave top-[160px] opacity-40 dark:opacity-30" />
      <div className="w-full h-[1503px] wave top-[-200px]">
        <Image
          src={"/assets/background/blur-layer.png"}
          alt="blur-layer"
          fill={true}
        />
      </div>
      <Mountain3 className="w-full h-[408px] wave top-[347px] opacity-50 dark:opacity-40" />
      <Mountain5 className="w-full h-[867px] wave md:top-[450px] top-[300px] opacity-60 dark:opacity-50" />
      <HeroSvg className="w-full h-[1200px] wave md:top-[100dvh] top-[100svh] left-0 dark:text-[#070b16] text-[#f8fafc]" />
    </div>
  );
}

export default HeroBackground;
