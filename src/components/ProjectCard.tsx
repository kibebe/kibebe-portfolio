import { motion } from "framer-motion"
import { ProjectCardProps } from "../types"
import { Github } from "lucide-react"

export default function ProjectCard({
  title,
  description,
  git,
  demo,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="border bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <p className="text-gray-600 font-bold dark:text-gray-300">
        In progress.....
      </p>
      {git && demo && (
        <div className="flex gap-3 mt-4">
          <a
            href={git}
            target="_blank"
            className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <Github />
          </a>
          <a
            href={demo}
            target="_blank"
            className="px-4 py-2 rounded-xl border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition"
          >
            Demo
          </a>
        </div>
      )}
    </motion.div>
  )
}
