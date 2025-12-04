import { ReactNode } from "react"

export interface SectionProps {
  id?: string
  title: string
  children: ReactNode
}

export interface ThemeToggleProps {
  darkMode: boolean
  toggle: () => void
}

export interface NavbarProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

export interface ProjectCardProps {
  title: string
  description: string
  git?: string
  demo?: string
}
