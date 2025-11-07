import { motion } from "framer-motion"
import { SectionProps } from "../types"

export default function Section({ id, title, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className="py-16 px-6 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
        {title}
      </h2>
      {children}
    </motion.section>
  )
}
