// src/components/theme-provider.tsx
import { ThemeProvider as NextThemesProvider } from "next-themes"

import { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" enableSystem={true}>
      {children}
    </NextThemesProvider>
  )
}