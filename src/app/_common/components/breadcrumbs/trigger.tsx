'use client'

import { SidebarClose } from 'lucide-react'
import { useSidebarStore } from '~/app/_common/stores/sidebar'
import { useSidebar } from '~/components/ui/sidebar'

export function SidebarToggleButton() {
  const toggleCollapse = useSidebarStore((state) => state.toggleCollapse)
  const { toggleSidebar } = useSidebar()

  const handleToggle = () => {
    toggleCollapse()
    toggleSidebar()
  }

  return (
    <button
      onClick={handleToggle}
      className=" hover:bg-gray-100 rounded-md"
      aria-label="Toggle sidebar"
      type="button"
    >
      <SidebarClose className="w-4 h-4" />
    </button>
  )
}
