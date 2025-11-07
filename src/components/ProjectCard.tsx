import { motion } from "framer-motion"
import { ProjectCardProps } from "../types"

export default function ProjectCard({ title, description }: ProjectCardProps) {
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
    </motion.div>
  )
}
