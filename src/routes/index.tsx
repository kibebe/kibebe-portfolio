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
          I’m <strong>Ciira Kibebe</strong>, a Software Engineer specializing in
          building scalable, cloud-native backend and frontend systems using
          Spring Boot, Django, React, and TypeScript. I design and deploy
          containerized applications on Google Cloud Platform (GCP) using Docker
          and Kubernetes, with CI/CD automation through Bitbucket Pipelines. My
          work spans RESTful APIs, event-driven systems, distributed
          architectures, and modern web interfaces optimized for performance and
          reliability.
        </p>
      </Section>

      <Section id="skills" title="Skills">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
          {/* Languages & Frontend */}
          <li>TypeScript / JavaScript</li>
          <li>React / TanStack Router</li>
          <li>Tailwind CSS</li>

          {/* Backend */}
          <li>Spring Boot / Kotlin</li>
          <li>Django / Python</li>
          <li>REST & Event-Driven APIs</li>

          {/* Cloud & DevOps */}
          <li>Docker / Kubernetes</li>
          <li>GCP (GKE, Cloud Run, Pub/Sub)</li>
          <li>Bitbucket Pipelines (CI/CD)</li>

          {/* Databases */}
          <li>PostgreSQL</li>
          <li>Redis</li>
          <li>Cloud SQL</li>
        </ul>
      </Section>

      <Section id="resume" title="Resume & Cover Letter">
        <div className="space-y-6 text-lg">
          <p className="text-gray-700 dark:text-gray-300">
            You can download my most up-to-date resume and cover letter below.
            These documents highlight my experience across cloud-native
            engineering, backend & frontend development, and deployment
            pipelines on GCP.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Resume */}
            <div className="flex flex-col p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3">Resume</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A concise overview of my technical experience, cloud projects,
                and engineering background.
              </p>
              <div className="mt-auto flex gap-3">
                <a
                  href="/assets/CiiraKibebe-Resume.pdf"
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  View Resume
                </a>
                <a
                  href="/assets/CiiraKibebe-Resume.pdf"
                  download
                  className="px-4 py-2 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                >
                  Download
                </a>
              </div>
            </div>

            {/* Cover Letter */}
            <div className="flex flex-col p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3">Cover Letter</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A personalized cover letter tailored to highlight my strengths,
                values, and engineering approach.
              </p>
              <div className="mt-auto flex gap-3">
                <a
                  href="/assets/CiiraKibebe-CoverLetter.pdf"
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 transition"
                >
                  View Letter
                </a>
                <a
                  href="/assets/CiiraKibebe-CoverLetter.pdf"
                  download
                  className="px-4 py-2 rounded-xl border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
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
