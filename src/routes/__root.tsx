/// <reference types="vite/client" />
import type { ReactNode } from "react"
import { useState, useEffect } from "react"
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "../queryClient"
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import appCss from "../styles/app.css?url"

export const Route = createRootRoute({
  head: () => ({
    title: "Ciira Kibebe | Software Engineer",
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "description",
        content:
          "Portfolio of Ciira Kibebe – Software Engineer specializing in TypeScript, React, Spring Boot, Django, Docker, GCP, and Kubernetes.",
      },

      // Open Graph (Facebook, WhatsApp, LinkedIn)
      { property: "og:title", content: "Ciira Kibebe – Software Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio showcasing projects in React, TypeScript, TanStack, Cloudflare.",
      },
      {
        property: "og:image",
        // use absolute URL
        content:
          "https://ciirakibebe.ciirakibebe-portfolio.workers.dev/og-image.png",
      },
      {
        property: "og:url",
        content: "https://ciirakibebe.ciirakibebe-portfolio.workers.dev/",
      },
      { property: "og:type", content: "website" },

      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ciira Kibebe – Software Engineer" },
      {
        name: "twitter:description",
        content:
          "Portfolio showcasing projects in React, TypeScript, TanStack, Cloudflare.",
      },
      {
        name: "twitter:image",
        content:
          "https://ciirakibebe.ciirakibebe-portfolio.workers.dev/og-image.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light"
    }
    return "light"
  })

  useEffect(() => {
    const root = document.documentElement

    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }

    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <RootDocument>
      <QueryClientProvider client={queryClient}>
        <Navbar toggleDarkMode={toggleTheme} darkMode={theme === "dark"} />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </QueryClientProvider>
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
