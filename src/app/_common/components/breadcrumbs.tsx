import { headers } from 'next/headers'
import { Fragment } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '~/components/ui/breadcrumb'
import { SidebarToggleButton } from './breadcrumbs/trigger'
import { generateBreadcrumbs } from './breadcrumbs/utility'

export async function BreadcrumbHeader() {
  // Get the current pathname from headers
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') || '/'

  // Generate breadcrumbs based on the current path
  const breadcrumbs = generateBreadcrumbs(pathname)

  return (
    <header className="flex items-center gap-4 p-4">
      <SidebarToggleButton />
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs.map((crumb, index) => (
            <Fragment key={crumb.href}>
              <BreadcrumbItem>
                {index === breadcrumbs.length - 1 ? (
                  <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={crumb.href}>
                    {crumb.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  )
}
