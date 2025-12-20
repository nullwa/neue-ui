'use client'

import { type ComponentProps as Props, createContext, type FC, type ReactNode } from 'react'
import { Accordion as Primitive } from '@base-ui-components/react'

import { cva, tm, type VariantProps } from '@/helpers/tailwind-merge'
import { ChevronDown, Plus } from 'lucide-react'

type Variant = 'default' | 'outline' | 'solid' | null
type Indicator = 'arrow' | 'plus' | 'none'

type Item = {
  id: string
  title: string | ReactNode
  content: string | ReactNode
}

type ComponentProps = Props<typeof Primitive.Root> & VariantProps<typeof styles> & {
  indicator?: Indicator
  multiple?: boolean
  items: Item[]
}

// --- Context ---
const AccordionContext = createContext<{ variant: Variant; indicator: Indicator }>({
  variant: 'default',
  indicator: 'arrow'
})

// --- Accordion Component ---
const Accordion: FC<ComponentProps> = ({variant = 'solid', indicator = 'arrow', size = 'md', multiple = false, items, ...rest}) => {
  return <AccordionContext.Provider value={{variant, indicator}}>
    <Primitive.Root data-slot='accordion' className='w-full flex flex-col gap-3' multiple={multiple} {...rest}>
      {items.map(({id, title, content}) => (
        <Primitive.Item key={id} value={id} data-slot='accordion-item'>
          <Primitive.Header>
            <Primitive.Trigger data-slot='accordion-trigger' className={tm(styles({variant, size}), 'group transition-colors relative')}>
              {/* TITLE */}
              <span className='text-start'>{title}</span>
              {/* INDICATOR */}
              {indicator !== 'none' && (indicator === 'plus' ? (<Plus className='size-4 shrink-0 transition-all group-data-[panel-open]:rotate-45'/>) : (
                <ChevronDown className='size-4 shrink-0 transition-transform group-data-[panel-open]:rotate-180'/>))}
            </Primitive.Trigger>
          </Primitive.Header>
          {/* PANEL — uses Base UI built-in animation */}
          <Primitive.Panel data-slot='accordion-content' className='h-[var(--accordion-panel-height)] overflow-hidden transition-[height] ease-out data-[starting-style]:h-0 data-[ending-style]:h-0'>
            <div className='p-2 text-base text-secondary'>
              {content}
            </div>
          </Primitive.Panel>
        </Primitive.Item>
      ))}
    </Primitive.Root>
  </AccordionContext.Provider>

}

Accordion.displayName = 'Accordion'

const styles = cva('cursor-pointer w-full flex items-center text-base text-primary font-medium justify-between gap-2 py-1 px-2 capitalize', {
    variants: {
      variant: {
        default: 'border-b border-secondary rounded-none',
        outline: 'border border-secondary rounded-md',
        solid: 'border border-secondary bg-secondary/80 rounded-md'
      },
      size: {
        sm: 'min-h-7',
        md: 'min-h-8',
        lg: 'min-h-9'
      }
    },
    defaultVariants: {
      variant: 'solid',
      size: 'md'
    }
  }
)

export { Accordion }
