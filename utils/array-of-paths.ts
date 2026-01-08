'use client'

const getBreadcrumbItems = (pathname: string): { label: string, href: string }[] => {
  const parts = pathname.split('/').filter(Boolean) // remove empty strings
  const items = [{label: 'Home', href: '/'}] // always start with Home

  let pathAccumulator = ''
  parts.forEach((part) => {
    pathAccumulator += `/${part}`
    // Optional: you can prettify part names like 'base-ui' → 'Base UI'
    const label = part.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    items.push({label, href: pathAccumulator})
  })

  return items
}

export { getBreadcrumbItems }