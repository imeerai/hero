"use client";
import { SectionHeading } from "@/components/ui/section-heading";
import { EducationCard } from "./education-card";
import { GraduationCap, CalendarClock } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { SparklesCore } from "@/components/sparkles";

function EducationSection() {
  const { title, subtitle } = portfolioData.sectionHeadings.education;
  const education = portfolioData.education;

  return (
    <section
      id="education"
      className="relative overflow-hidden py-20 md:py-32 px-4 bg-[rgba(32,24,69,0.22)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#050512] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#050512]/55 via-[#050512]/20 to-transparent" />
      <SparklesCore
        background="transparent"
        minSize={0.55}
        maxSize={1.7}
        particleCount={40}
        className="absolute inset-0 opacity-40"
      />
      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-20 mt-12">
          {education.map((item, index) => (
            <EducationCard
              key={item.degree}
              {...item}
              index={index}
              icon={<GraduationCap />}
              dateIcon={<CalendarClock />}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
