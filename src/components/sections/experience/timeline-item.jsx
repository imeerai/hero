"use client";
import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { portfolioData } from "@/data/portfolio-data";

function TimelineItem() {
  const data = portfolioData.experience.map((item) => ({
    title: item.title,
    content: (
      <div className="space-y-2">
        <span className="text-sm text-slate-300 font-medium">{item.date}</span>
        <h3 className="text-lg text-[#9059fd] font-semibold">{item.company}</h3>
        <span className="text-sm text-slate-300 font-medium">
          {item.employmentType} • {item.locationType}
        </span>

        <p className="text-slate-300/90 leading-relaxed">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.skills.map((skill) => (
            <span key={skill} className="ui-chip text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ delay: 0.3 }}
      className="relative pb-12 last:pb-0"
    >
      <Timeline data={data} />
    </motion.div>
  );
}

export { TimelineItem };
