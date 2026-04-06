import { motion } from "framer-motion";
import { Download } from "lucide-react";

import { styles } from "../styles";
import { portfolioData } from "@/data/portfolio-data";

const Hero = () => {
  const { greeting, description, cv } = portfolioData.hero;
  const { shortName } = portfolioData.owner;

  return (
    <section
      id="home"
      className="relative w-full h-screen mx-auto overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
      <div
        className={`absolute inset-0 top-[160px] z-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#9059fd]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#9059fd] via-[#55389f] to-transparent" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-slate-100`}>
            {greeting} <span className="text-[#9059fd]">{shortName}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-slate-300 max-w-3xl`}>
            {description}
          </p>

          <a
            href={cv.filePath}
            download={cv.fileName}
            className="mt-8 inline-flex items-center gap-2 rounded-xl border border-[#9059fd]/45 bg-slate-950/40 px-5 py-3 text-base font-semibold text-slate-100 transition-colors hover:border-[#9059fd] hover:bg-[#201845]/85"
          >
            {cv.label}
            <Download className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
