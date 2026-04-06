"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function SectionHeading({ title, subtitle, className }) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-black tracking-tight mb-3 text-slate-100"
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-slate-300/90 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}

export { SectionHeading };
