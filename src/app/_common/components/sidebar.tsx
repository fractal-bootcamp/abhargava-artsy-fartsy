import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarSeparator,
} from '~/components/ui/sidebar'
import { Navigation } from './sidebar/content/navigation'

import { ArtMenu } from './sidebar/content/workflows'
import { SidebarUserFooter } from './sidebar/footer/user-footer'
import { SidebarOrgSwitcher } from './sidebar/header/organization-switcher'

export function AppSidebar() {
  return (
    <Sidebar
      variant="floating"
      side="left"
      collapsible="icon"
      className="group"
    >
      <SidebarHeader>
        <SidebarOrgSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <Navigation />
        <SidebarGroup>
          <SidebarGroupLabel>Art</SidebarGroupLabel>
          <ArtMenu />
        </SidebarGroup>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <SidebarUserFooter />
      </SidebarFooter>
    </Sidebar>
  )
}
