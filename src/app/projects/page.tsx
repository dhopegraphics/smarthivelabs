import type { Metadata } from "next"
import ProjectsClientPage from "./ProjectsClientPage"

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Discover innovative projects by Smart Hive Labs, including Hivedemia (AI Study Platform) and CivicLink (Ghana Digital Voting System).",
}

export default function ProjectsPage() {
  return <ProjectsClientPage />
}
