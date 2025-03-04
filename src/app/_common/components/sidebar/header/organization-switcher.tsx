'use client'

import { OrganizationSwitcher } from '@clerk/nextjs'
import { useSidebarStore } from '~/app/_common/stores/sidebar'

export function SidebarOrgSwitcher() {
  const isCollapsed = useSidebarStore((state) => state.isCollapsed)

  if (isCollapsed) {
    return null
  }

  return (
    <OrganizationSwitcher
      hidePersonal={true}
      appearance={{
        elements: {
          rootBox: isCollapsed ? 'hidden' : 'w-full',
          organizationSwitcherTrigger:
            'w-full flex items-center justify-center gap-2 rounded-md p-2 hover:bg-[#003300] retro-terminal-border transition-colors duration-200 font-mono',
          organizationPreview: 'font-mono text-sm retro-terminal-accent',
          organizationSwitcherPopoverCard:
            'shadow-md rounded-lg border border-dotted border-[#00ff00] bg-black retro-terminal',
          organizationSwitcherPopoverActions: 'p-2',
          organizationList: 'p-2',
          organizationSwitcherPopoverActionButton:
            'w-full flex items-center gap-2 rounded-md p-2 text-sm hover:bg-[#003300] font-mono transition-colors duration-200',
          '.__clerk_internal_div': 'hidden',
          internal: 'hidden',
          organizationPreviewTextContainer: isCollapsed ? 'hidden' : '',
          organizationSwitcherTriggerIcon: isCollapsed ? 'hidden' : '',
        },
      }}
    />
  )
}
