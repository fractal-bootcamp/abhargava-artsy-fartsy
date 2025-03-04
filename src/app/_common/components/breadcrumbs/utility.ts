export type Breadcrumb = {
  label: string
  href: string
}

export function generateBreadcrumbs(pathname: string): Breadcrumb[] {
  if (!pathname) return []
  // Remove any query parameters or hashes
  const cleanPath = pathname?.split('?')[0]?.split('#')[0]

  // Split the path into segments and remove empty strings
  const segments = cleanPath?.split('/').filter(Boolean) || []
  // Generate breadcrumbs array
  return segments.map((segment, index) => {
    // Create the href by joining all segments up to current
    const href = '/' + segments.slice(0, index + 1).join('/')
    
    // Handle dynamic route segments (those in square brackets)
    const label = segment
      .replace(/^\[(.*)\]$/, '$1') // Remove square brackets
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
    
    return { label, href }
  })
}