"use client";
import { SectionHeading } from "@/components/ui/section-heading";
import { TimelineItem } from "./timeline-item";
import { portfolioData } from "@/data/portfolio-data";
import { SparklesCore } from "@/components/sparkles";

function ExperienceSection() {
  const { title, subtitle } = portfolioData.sectionHeadings.experience;

  return (
    <section
      id="experience"
      className="section-shell relative overflow-hidden bg-[rgba(32,24,69,0.22)]"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050512]/82 via-[#201845]/28 to-transparent" />
      <SparklesCore
        background="transparent"
        minSize={0.55}
        maxSize={1.6}
        particleCount={36}
        className="absolute inset-0 opacity-35"
      />
      <div className="relative z-10 max-w-3xl mx-auto">
        <SectionHeading title={title} subtitle={subtitle} />
        <div className="mt-12">
          <TimelineItem />
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
