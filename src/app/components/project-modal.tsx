"use client";

import Image from "next/image";
import type { Project } from "../lib/projects";

// UI Components - Dialog
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// UI Components - Badge & Button
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Icons
import { Github } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">{project.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image */}
          <div className="relative w-full h-64 rounded-lg overflow-hidden bg-slate-800">
            <Image
              src={project.image2 || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
              priority
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">About</h3>
            <p className="text-slate-300 leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} className="bg-blue-600 hover:bg-blue-700 text-white">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-4">
            {project.github && (
              <Button
                onClick={() => window.open(project.github, "_blank")}
                variant="outline"
                className="flex items-center gap-2 border-[#1A1A70] text-[#1A1A70] hover:bg-[#1A1A70] hover:text-white transition-colors duration-300"
              >
                <Github size={18} />
                GitHub
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
