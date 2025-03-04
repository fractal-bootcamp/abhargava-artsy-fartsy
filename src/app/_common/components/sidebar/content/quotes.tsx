'use client'

import { ChevronDown, FileText } from 'lucide-react'
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

interface QuoteMenuItem {
  id: string
  name: string
  updatedAt: Date
  createdAt: Date
  status: 'active' | 'completed' | 'draft'
}

const MOCK_QUOTES: QuoteMenuItem[] = [
  {
    id: '1',
    name: 'Pfizer Quote ID: 10131',
    updatedAt: new Date(),
    createdAt: new Date(),
    status: 'active',
  },
]

const RECENT_QUOTES_LIMIT = 3

export function QuoteMenu() {
  // Mock implementation
  const [isLoading, setIsLoading] = useState(true)
  const [recentQuotes, setRecentQuotes] = useState<QuoteMenuItem[]>([])
  const isCollapsed = useSidebarStore((state) => state.isCollapsed)

  useEffect(() => {
    const timer = setTimeout(() => {
      setRecentQuotes(MOCK_QUOTES)
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // tRPC implementation - uncomment when server is sorted out.
  /* 
  const { data: recentQuotes, isLoading } = api.quotes.getRecent.useQuery(
    { limit: RECENT_QUOTES_LIMIT },
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
              <FileText className="h-4 w-4" />
              <span className="text-sm font-light">Recent Quotes</span>
            </div>
            <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {isLoading ? (
                <div className="px-2 py-1 text-xs text-muted-foreground">
                  Loading...
                </div>
              ) : recentQuotes?.length ? (
                recentQuotes.map((quote) => (
                  <SidebarMenuSubItem key={quote.id} className="w-full">
                    <button className="w-full text-left text-xs hover:bg-muted/50 py-1.5 px-2 rounded-sm">
                      {quote.name}
                    </button>
                  </SidebarMenuSubItem>
                ))
              ) : (
                <div className="px-2 py-1 text-xs text-muted-foreground">
                  No recent quotes
                </div>
              )}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  )
}
