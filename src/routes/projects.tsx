import { createFileRoute } from "@tanstack/react-router"
import Section from "../components/Section"
import ProjectCard from "../components/ProjectCard"

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard
          title="Task Tracker Dashboard"
          description="Collaborative task management system."
        />
        <ProjectCard
          title="API Explorer"
          description="Frontend interface for API testing and visualization."
        />
        <ProjectCard
          title="Finance Tracker"
          description="Lightweight personal finance dashboard."
        />
      </div>
    </Section>
  )
}
