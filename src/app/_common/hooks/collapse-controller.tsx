'use client'

import { useEffect } from 'react'
import { useSidebarStore } from '~/app/_common/stores/sidebar'

export function SidebarCollapseController() {
  const toggleCollapse = useSidebarStore((state) => state.toggleCollapse)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey && event.key === 'b') {
        toggleCollapse()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [toggleCollapse])

  return null
}
