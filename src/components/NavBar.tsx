import { Link } from "@tanstack/react-router"
import ThemeToggle from "./ThemeToggle"
import { NavbarProps } from "../types"

export default function Navbar({ toggleDarkMode, darkMode }: NavbarProps) {
  return (
    <nav className="w-full py-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-xl font-bold">
          Ciira Kibebe
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <Link
            to="/projects"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Contact
          </Link>
          <ThemeToggle darkMode={darkMode} toggle={toggleDarkMode} />
        </div>
      </div>
    </nav>
  )
}
