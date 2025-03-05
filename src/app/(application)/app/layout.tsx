import { BreadcrumbHeader } from '~/app/_common/components/breadcrumbs'
import { AppSidebar } from '~/app/_common/components/sidebar'
import { SidebarCollapseController } from '~/app/_common/hooks/collapse-controller'
import MatrixBackground from '~/components/matrix'
import { SidebarProvider } from '~/components/ui/sidebar'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen dark:bg-gray-950 dark:text-white">
      <MatrixBackground
        textColor="#0f0"
        backgroundColor="#000"
        opacity={0.1}
        fontSize={14}
        density={20}
        timeout={50}
        respectTheme={true}
      />
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
