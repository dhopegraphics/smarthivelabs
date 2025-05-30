import type { Metadata } from "next"
import CareersClientPage from "./CareersClientPage"

export const metadata: Metadata = {
  title: "Careers & Internships - Smart Hive Labs",
  description: "Join our innovative team at Smart Hive Labs! We're looking for passionate individuals to grow with us.",
}

export default function CareersPage() {
  return <CareersClientPage />
}
