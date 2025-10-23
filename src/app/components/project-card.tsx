"use client";

import Image from "next/image";
import type { Project } from "../lib/projects";

// UI Components - Card
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// UI Components - Badge & Button
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Icons
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onSeeMore: (project: Project) => void;
}

export function ProjectCard({ project, onSeeMore }: ProjectCardProps) {
  return (
    <Card className="group h-full bg-slate-800 border-slate-700 hover:transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
      <CardHeader>
        <div className="w-full h-48 mt-2 mb-4 rounded-t-lg overflow-hidden bg-slate-700 relative">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />
        </div>
        <CardTitle className="text-white text-xl">{project.title}</CardTitle>
        <CardDescription className="text-slate-400">{project.shortDescription}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-slate-700 text-slate-200 text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="secondary" className="bg-slate-700 text-slate-200 text-xs">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>

        {/* See More Button */}
        <Button
          onClick={() => onSeeMore(project)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white group/btn"
        >
          See More
          <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
}
