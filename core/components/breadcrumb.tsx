'use client'

import { type FC, Fragment, type HTMLAttributes, type ReactNode, useMemo } from 'react'
import Link from 'next/link'

import { tm } from '@/helpers/tailwind-merge'
import { getBreadcrumbItems } from '@/helpers/array-of-paths'
import { ChevronRight, MoreHorizontal } from 'lucide-react'

type ComponentProps = HTMLAttributes<HTMLDivElement> & {
  pathname: string
  ellipsis?: number
}

const Breadcrumb: FC<ComponentProps> = ({pathname, ellipsis = 0, className, ...props}) => {
  const items = useMemo(() => getBreadcrumbItems(pathname), [pathname])

  const hideCount = Math.max(0, Math.floor(ellipsis))
  const total = items.length

  let visibleItems = items

  if (hideCount > 0 && total > 2) {
    const middleCount = total - 2
    if (hideCount >= middleCount) visibleItems = [items[0], {label: '__ellipsis__', href: '#'}, items[total - 1]]
    else visibleItems = [items[0], {label: '__ellipsis__', href: '#'}, ...items.slice(1 + hideCount, total)]
  }

  return (
    <nav aria-label='breadcrumb' className={tm('flex items-center text-base select-none', className)} {...props}>
      <ol className='flex flex-wrap items-center gap-1.5 sm:gap-2.5 list-none m-0 p-0'>
        {visibleItems.map((item: { label: ReactNode; href: string }, idx: number) => {
          const isLast = idx === visibleItems.length - 1
          const isEllipsis = item.label === '__ellipsis__'

          return (
            <Fragment key={idx}>
              <li className='inline-flex items-center gap-1.5'>
                {isEllipsis ? (
                  <button type='button' aria-label='Show more breadcrumb items' className='flex h-9 w-9 items-center justify-center text-secondary'>
                    {ellipsis && <MoreHorizontal className='h-4 w-4'/>}
                    <span className='sr-only'>More</span>
                  </button>
                ) : isLast ? (
                  <span aria-current='page' className='text-primary font-semibold'>
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className='hover:text-primary font-semibold transition-colors'>
                    {item.label}
                  </Link>
                )}
              </li>
              {!isLast && (
                <li aria-hidden='true' className='inline-flex items-center text-secondary [&>svg]:h-3.5 [&>svg]:w-3.5'>
                  <ChevronRight/>
                </li>
              )}
            </Fragment>
          )
        })}
      </ol>
    </nav>
  )
}

Breadcrumb.displayName = 'Breadcrumb'

export { Breadcrumb }
