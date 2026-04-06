import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioData } from "@/data/portfolio-data";
import { mobile, backend, creator, web } from "@/assets";

const serviceIcons = {
  web,
  mobile,
  backend,
  creator,
};

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full"
    tiltMaxAngleX={18}
    tiltMaxAngleY={18}
    transitionSpeed={450}
    scale={1.01}
    glareEnable={false}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="Service icon"
          className="w-16 h-16 object-contain"
          loading="lazy"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const { section, summary, services } = portfolioData.about;

  return (
    <section id="about" className="section-shell px-6 sm:px-16">
      <motion.div variants={textVariant()} className="max-w-6xl mx-auto">
        <SectionHeading title={section.title} subtitle={section.subtitle} />
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-slate-300 text-[17px] max-w-3xl leading-[30px] mx-auto text-center"
      >
        {summary}
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            title={service.title}
            icon={serviceIcons[service.icon] || serviceIcons.web}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
