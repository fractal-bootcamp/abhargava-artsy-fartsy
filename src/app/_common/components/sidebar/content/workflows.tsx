'use client'

import { ChevronDown, Paintbrush, Workflow } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSidebarStore } from '~/app/_common/stores/sidebar'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '~/components/ui/collapsible'
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from '~/components/ui/sidebar'
// import { api } from '~/trpc/react'

type ArtMenuItem = {
  id: string
  name: string
  updatedAt: Date
  createdAt: Date
  status: 'active' | 'completed' | 'draft'
}

const MOCK_ART: ArtMenuItem[] = [
  {
    id: '1',
    name: 'Dads Playing Chess',
    updatedAt: new Date(),
    createdAt: new Date(),
    status: 'active',
  },
]

const RECENT_WORKFLOWS_LIMIT = 3

export function WorkflowMenu() {
  // Mock implementation
  const [isLoading, setIsLoading] = useState(true)
  const [recentArt, setRecentArt] = useState<ArtMenuItem[]>([])
  const isCollapsed = useSidebarStore((state) => state.isCollapsed)
  useEffect(() => {
    const timer = setTimeout(() => {
      setRecentArt(MOCK_ART)
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // tRPC implementation - uncomment when server is sorted out.
  /* 
  const { data: recentWorkflows, isLoading } = api.workflows.getRecent.useQuery(
    { limit: RECENT_WORKFLOWS_LIMIT },
    {
      refetchInterval: 30000,
      staleTime: 10000,
    },
  )
  */

  if (isCollapsed) {
    return null
  }

  return (
    <SidebarMenu className="pl-2">
      <Collapsible defaultOpen className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <Paintbrush className="h-4 w-4" />
              <span className="text-sm font-light">Recent Art</span>
            </div>
            <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {isLoading ? (
                <div className="px-2 py-1 text-xs text-muted-foreground">
                  Loading...
                </div>
              ) : recentArt?.length ? (
                recentArt.map((art) => (
                  <SidebarMenuSubItem key={art.id} className="w-full">
                    <button className="w-full text-left text-xs hover:bg-muted/50 py-1.5 px-2 rounded-sm">
                      {art.name}
                    </button>
                  </SidebarMenuSubItem>
                ))
              ) : (
                <div className="px-2 py-1 text-xs text-muted-foreground">
                  No recent art
                </div>
              )}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  )
}
