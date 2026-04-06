"use client";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

function ProjectCard({
  title,
  type,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
  index,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.04, 0.12),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="ui-surface-card ui-surface-card-hover group relative overflow-hidden h-full flex flex-col"
    >
      <div className="aspect-video relative overflow-hidden brightness-95 w-full flex-shrink-0">
        <span className="absolute top-2 right-2 z-10 bg-slate-900/80 text-slate-100 font-semibold px-2 py-1 rounded-full text-xs border border-slate-700">
          {type}
        </span>
        <img
          src={image}
          alt={title || "Project image"}
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
          loading={index === 0 ? "eager" : "lazy"}
        />
      </div>

      <div className="p-6 flex flex-col flex-grow min-h-[280px]">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-slate-100">
          {title}
        </h3>
        <p className="text-slate-300 mb-4 text-sm leading-relaxed line-clamp-3 flex-shrink-0">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="ui-chip">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-4">
          <Button variant="outline" size="sm" asChild>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <span className="rounded-full w-3 h-3 mr-2 animate-pulse bg-green-500" />
              Demo
            </a>
          </Button>

          <Button variant="outline" size="sm" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export { ProjectCard };
