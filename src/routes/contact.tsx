import { createFileRoute } from "@tanstack/react-router"
import Section from "../components/Section"
import { motion } from "framer-motion"

export const Route = createFileRoute("/contact")({
  component: ContactPage,
})

function ContactPage() {
  return (
    <Section id="contact" title="Get in Touch">
      <motion.div
        className="text-center flex flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg max-w-xl">
          I’m always open to new opportunities, collaborations, and discussions
          on engineering systems, architecture, and innovation. Let’s connect!
        </p>

        <div className="flex flex-col gap-3 mt-6">
          <a
            href="mailto:cik.cir@gmail.com"
            className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition"
          >
            Send me an Email
          </a>
          <div className="flex gap-6 justify-center mt-4">
            <a
              href="https://github.com/kibebe"
              target="_blank"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ciirakibebe/"
              target="_blank"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/ciirakibebe"
              target="_blank"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Twitter
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
