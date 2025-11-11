"use client"

import { useScrollAnimations } from "@/hooks/useScrollAnimations"

export function ScrollAnimationsWrapper({ children }: { children: React.ReactNode }) {
  useScrollAnimations()
  
  return <>{children}</>
}
