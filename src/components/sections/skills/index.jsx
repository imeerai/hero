"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioData } from "@/data/portfolio-data";
import { SparklesCore } from "@/components/sparkles";
import {
  FaBootstrap,
  FaCode,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNetworkWired,
  FaPython,
  FaWordpress,
} from "react-icons/fa";
import { TbBrandDjango, TbBrandVercel, TbBrandVscode } from "react-icons/tb";
import { PiPaletteFill } from "react-icons/pi";

const skillIcons = {
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: FaJs,
  python: FaPython,
  django: TbBrandDjango,
  bootstrap: FaBootstrap,
  bulma: FaCode,
  git: FaGitAlt,
  github: FaGithub,
  vscode: TbBrandVscode,
  vercel: TbBrandVercel,
  netlify: FaNetworkWired,
  photoshop: PiPaletteFill,
  illustrator: PiPaletteFill,
  canvaDesign: PiPaletteFill,
  wordpress: FaWordpress,
};

function SkillsSection() {
  const { title, subtitle } = portfolioData.sectionHeadings.skills;
  const skills = portfolioData.skills;

  return (
    <section
      id="skills"
      className="section-shell relative overflow-hidden bg-[rgba(32,24,69,0.22)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050512]/88 via-[#201845]/26 to-transparent" />
      <SparklesCore
        background="transparent"
        minSize={0.55}
        maxSize={1.6}
        particleCount={36}
        className="absolute inset-0 opacity-35"
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
          {skills.map((skill, index) => {
            const Icon = skillIcons[skill.icon] || FaCode;

            return (
              <motion.div
                key={`${skill.name}-${index}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                transition={{ delay: index * 0.03 }}
                className="ui-surface-card ui-surface-card-hover inline-flex items-center gap-3 px-4 md:px-5 py-2.5 md:py-3 text-zinc-100"
              >
                <Icon className="h-5 w-5 text-[#9059fd]" />
                <span className="text-base md:text-lg font-medium tracking-wide">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
