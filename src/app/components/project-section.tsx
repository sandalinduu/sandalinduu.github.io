"use client"

import { useState } from "react"
import { projects, type Project } from "../lib/projects"
import { ProjectCard } from "./project-card"
import { ProjectModal } from "./project-modal"

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSeeMore = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-[#0A0A23]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore my latest work and projects that showcase my skills in web development, design, and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onSeeMore={handleSeeMore} />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}



