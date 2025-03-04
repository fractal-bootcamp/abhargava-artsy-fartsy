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
import { WorkflowMenu } from './sidebar/content/workflows'
import { SidebarUserFooter } from './sidebar/footer/user-footer'
import { SidebarOrgSwitcher } from './sidebar/header/organization-switcher'

export function AppSidebar() {
  return (
    <Sidebar
      variant="floating"
      side="left"
      collapsible="icon"
      className="group retro-terminal"
    >
      <SidebarHeader className="retro-terminal-header">
        <SidebarOrgSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <Navigation />
        <SidebarGroup className="retro-terminal-group mt-4 p-2">
          <SidebarGroupLabel className="retro-terminal-accent retro-terminal-group-label">
            Recent Art
          </SidebarGroupLabel>
          <WorkflowMenu />
        </SidebarGroup>
      </SidebarContent>
      <SidebarSeparator className="retro-terminal-separator" />
      <SidebarFooter className="retro-terminal-footer">
        <SidebarUserFooter />
      </SidebarFooter>
    </Sidebar>
  )
}
