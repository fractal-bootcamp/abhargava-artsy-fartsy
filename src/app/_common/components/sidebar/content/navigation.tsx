'use client'

import {
  FileText,
  HomeIcon,
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
    icon: SquareDashedMousePointer,
    label: 'Node Builder',
    href: '/app/node-builder',
  },
  {
    icon: Workflow,
    label: 'Workflows',
    href: '/app/workflows',
  },
  {
    icon: FileText,
    label: 'Quotes',
    href: '/app/quotes',
  },
] as const

export function Navigation() {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Navigation</SidebarGroupLabel>
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
              >
                <Link href={item.href}>
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-light">{item.label}</span>
                </Link>
              </SidebarMenuButton>
            )
          })}
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
