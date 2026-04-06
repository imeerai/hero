"use client";
import { motion } from "framer-motion";
import { useState } from "react";

function EducationCard({
  degree,
  institution,
  duration,
  year,
  description,
  gpa,
  icon,
  dateIcon,
  index,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: isHovered
          ? "rgba(144, 89, 253, 0.7)"
          : "rgba(85, 56, 159, 0.65)",
        boxShadow: isHovered ? "0 10px 34px rgba(144, 89, 253, 0.26)" : "none",
      }}
      className={`rounded-2xl backdrop-blur-sm relative overflow-hidden p-5 transition-all duration-300 cursor-pointer border ${
        isHovered ? "-translate-y-1" : ""
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center cursor-pointer">
            <div className="w-14 h-10 p-2 bg-slate-800 rounded-md flex items-center justify-center text-[#9059fd]">
              {icon}
            </div>
            <div className="ml-4">
              <div className="lg:text-xl md:text-lg sm:text-sm font-bold text-slate-100 leading-snug">
                {degree}
              </div>
              <p className="text-[#9059fd]">{institution}</p>
              <div className="flex items-center text-slate-300 text-sm justify-start mt-2">
                {dateIcon}
                <span className="ml-2">{year}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-slate-300 mb-4 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export { EducationCard };
