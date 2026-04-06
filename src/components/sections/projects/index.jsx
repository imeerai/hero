"use client";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "./project-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { portfolioData } from "@/data/portfolio-data";

function ProjectsSection() {
  const { title, subtitle } = portfolioData.sectionHeadings.projects;
  const projects = portfolioData.projects;

  return (
    <section id="projects" className="section-shell-soft">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={title} subtitle={subtitle} />

        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem
                key={`${project.title}-${index}`}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <ProjectCard {...project} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

export default ProjectsSection;
