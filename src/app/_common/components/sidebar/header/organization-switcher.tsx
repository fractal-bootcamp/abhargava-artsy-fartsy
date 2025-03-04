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
            'w-full flex items-center justify-center gap-2 rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200',
          organizationPreview: 'font-medium text-sm',
          organizationSwitcherPopoverCard:
            'shadow-md rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950',
          organizationSwitcherPopoverActions: 'p-2',
          organizationList: 'p-2',
          organizationSwitcherPopoverActionButton:
            'w-full flex items-center gap-2 rounded-md p-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200',
          '.__clerk_internal_div': 'hidden',
          internal: 'hidden',
          organizationPreviewTextContainer: isCollapsed ? 'hidden' : '',
          organizationSwitcherTriggerIcon: isCollapsed ? 'hidden' : '',
        },
      }}
    />
  )
}
