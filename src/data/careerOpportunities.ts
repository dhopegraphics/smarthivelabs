import { Palette, Briefcase, Users } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface CareerOpportunity {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  disabled?: boolean;
}

export const careerOpportunities: CareerOpportunity[] = [
  {
    id: "internships",
    icon: Palette,
    title: "Internship Programs",
    description: "Graphics, Frontend, Backend, AI/ML",
    buttonText: "Learn More",
    buttonLink: "/careers/internships"
  },
  {
    id: "entry-level",
    icon: Briefcase,
    title: "Entry-Level Roles",
    description: "React, Node.js, Photoshop, Blender, etc.",
    buttonText: "View Openings",
    buttonLink: "/careers/entry-level"
  },
  {
    id: "nss",
    icon: Users,
    title: "NSS Placements",
    description: "Coming Soon! Stay tuned for national service opportunities.",
    buttonText: "Details Soon",
    disabled: true
  }
];