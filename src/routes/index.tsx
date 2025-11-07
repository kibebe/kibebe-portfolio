import { createFileRoute, Link } from "@tanstack/react-router"
import Section from "../components/Section"
import ProjectCard from "../components/ProjectCard"

export const Route = createFileRoute("/")({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Section id="about" title="About Me">
        <p className="text-lg leading-relaxed">
          I’m <strong>Ciira Kibebe</strong>, a Software Engineer focused on
          building scalable backend and frontend systems with Spring Boot,
          Django, React, and modern cloud tools.
        </p>
      </Section>

      <Section id="skills" title="Skills">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
          <li>React + TanStack</li>
          <li>Spring Boot / Kotlin</li>
          <li>Django / Python</li>
          <li>Docker & Kubernetes</li>
          <li>GCP (Pub/Sub, Cloud Run)</li>
          <li>PostgreSQL / Redis</li>
        </ul>
      </Section>

      <Section id="featured" title="Featured Projects">
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Task Tracker Dashboard"
            description="A team task manager built with TanStack Table and Query."
          />
          <ProjectCard
            title="API Explorer"
            description="A sleek interface for testing and documenting APIs."
          />
        </div>
        <Link
          to="/projects"
          className="inline-block mt-6 text-blue-600 hover:underline"
        >
          View all projects →
        </Link>
      </Section>
    </>
  )
}
