'use client'

import { type FC, type ReactNode } from 'react'
import { Tabs as Primitive } from '@base-ui-components/react'

import { cva, tm, type VariantProps } from '@/helpers/tailwind-merge'

export type Tab = {
  label: {
    title: string
    count?: number
    icon?: ReactNode
    onClick?: () => void
    disabled?: boolean
  }
  value: string
  content: ReactNode
}

type ComponentProps = VariantProps<typeof styles> & {
  tabs: Tab[]
  defaultValue: string
}

const Tabs: FC<ComponentProps> = ({tabs, defaultValue, variant = 'fill', radius = 'squared', size = 'md'}) => {
  return (
    <Primitive.Root className={tm('relative w-full h-full')} defaultValue={defaultValue ?? tabs[0]?.value}>
      <Primitive.List className={tm(styles({variant, size, radius}))}>
        {tabs.map((tab) => (
          <Primitive.Tab
            key={tab.value}
            value={tab.value}
            onClick={tab.label.onClick}
            disabled={tab.label.disabled}
            className={tm('group h-6 z-10 capitalize flex items-center justify-center gap-1 px-2 cursor-pointer text-base text-tertiary hover:text-primary data-[active]:text-primary outline-none select-none [&>svg]:size-4 [&>svg]:text-brand-primary', tab.label.disabled && 'opacity-50 text-tertiary hover:text-tertiary')}>
            {tab.label.icon && tab.label.icon}
            {tab.label.title}
            {typeof tab.label.count === 'number' && <span className='flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-solid/50 group-data-[active]:bg-brand-solid text-xs font-medium text-white'>{tab.label.count}</span>}
          </Primitive.Tab>
        ))}
        <Primitive.Indicator className={tm(indicatorStyles({radius}))}/>
      </Primitive.List>
      {tabs.map((tab) => (
        <Primitive.Panel key={tab.value} value={tab.value} className={tm('relative w-full h-full')}>
          {tab.content}
        </Primitive.Panel>
      ))}
    </Primitive.Root>
  )
}

Tabs.displayName = 'Tabs'

const styles = cva(
  ['relative flex items-center gap-1'],
  {
    variants: {
      variant: {
        solid: 'bg-primary border-secondary',
        fill: 'bg-secondary border-secondary'
      },
      size: {
        sm: 'h-7 px-px',
        md: 'h-8 px-0.5',
        lg: 'h-9 px-1'
      },
      radius: {
        none: 'rounded-none border-b',
        squared: 'rounded-md border',
        borderless: ''
      }
    },
    defaultVariants: {
      variant: 'fill',
      size: 'md',
      radius: 'squared'
    }
  })

const indicatorStyles = cva('absolute left-0 transition-all duration-200 ease-in-out bg-primary border border-primary',
  {
    variants: {
      radius: {
        none: 'top-full h-0.5 w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)] -translate-y-1/2 bg-brand-solid border-0',
        squared: 'top-1/2 h-6 w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)] -translate-y-1/2 rounded-sm',
        borderless: ''
      }
    }, defaultVariants: {
      radius: 'squared'
    }
  })

export { Tabs }
