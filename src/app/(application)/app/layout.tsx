import { BreadcrumbHeader } from '~/app/_common/components/breadcrumbs'
import { AppSidebar } from '~/app/_common/components/sidebar'
import { SidebarCollapseController } from '~/app/_common/hooks/collapse-controller'
import { SidebarProvider } from '~/components/ui/sidebar'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen dark:bg-gray-950 dark:text-white">
      <SidebarCollapseController />
      <SidebarProvider>
        <AppSidebar />
        <div className="flex flex-col flex-1">
          <BreadcrumbHeader />
          <div className="p-4">{children}</div>
        </div>
      </SidebarProvider>
    </div>
  )
}
