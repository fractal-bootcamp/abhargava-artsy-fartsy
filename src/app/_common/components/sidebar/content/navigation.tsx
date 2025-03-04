'use client'

import {
  FileText,
  HomeIcon,
  Paintbrush,
  SquareDashedMousePointer,
  Workflow,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '~/components/ui/sidebar'

const navigationItems = [
  {
    icon: HomeIcon,
    label: 'Home',
    href: '/app/dashboard',
  },
  {
    icon: Paintbrush,
    label: 'Recent Art',
    href: '/app/recent-art',
  },
] as const

export function Navigation() {
  const pathname = usePathname()

  return (
    <SidebarGroup className="retro-terminal-group p-2">
      <SidebarGroupLabel className="retro-terminal-accent retro-terminal-group-label">
        Navigation
      </SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem>
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <SidebarMenuButton
                key={item.href}
                asChild
                isActive={isActive}
                tooltip={item.label}
                className={isActive ? 'retro-terminal-accent' : ''}
              >
                <Link href={item.href} className="retro-terminal-border">
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-mono">{item.label}</span>
                </Link>
              </SidebarMenuButton>
            )
          })}
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
