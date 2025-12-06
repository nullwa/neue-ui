'use client'

import { type FC, type ReactNode } from 'react'

import { tm } from '@/helpers/tailwind-merge'
import { Tooltip as Primitive } from '@base-ui-components/react'

interface ComponentProps {
  title: ReactNode
  description?: ReactNode
  children: ReactNode
  arrow?: boolean
  delay?: number
  placement?: 'top' | 'right' | 'bottom' | 'left' | 'inline-end' | 'inline-start'
}

const Tooltip: FC<ComponentProps> = ({title, description, children, arrow = false, delay = 300, placement = 'top'}) => {
  return (
    <Primitive.Provider delay={delay}>
      <Primitive.Root>
        <Primitive.Trigger>
          <button
            type='button'
            className={tm(
              'group relative flex h-max w-max cursor-pointer flex-col items-center gap-2 text-fg-quaternary outline-hidden transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover disabled:text-fg-disabled'
            )}>
            {children}
          </button>
        </Primitive.Trigger>

        <Primitive.Portal>
          <Primitive.Positioner side={placement} align='center' sideOffset={6}>
            <Primitive.Popup
              data-slot='tooltip-content'
              className={tm(
                'select-none z-50 flex max-w-xs flex-col items-start gap-0.5 rounded-sm bg-primary-solid px-3 will-change-transform shadow-xs-skeumorphic',
                description ? 'py-3' : 'py-2',
                'data-[state=delayed-open]:animate-in data-[state=closed]:animate-out',
                'data-[state=delayed-open]:fade-in data-[state=closed]:fade-out',
                'data-[side=top]:slide-in-from-bottom-0.5 data-[side=bottom]:slide-in-from-top-0.5',
                'data-[side=left]:slide-in-from-right-0.5 data-[side=right]:slide-in-from-left-0.5'
              )}>
              <span className='text-md font-medium text-white'>{title}</span>
              {description && <span className='text-sm text-tooltip-supporting-text'>{description}</span>}
            </Primitive.Popup>
            {arrow && (
              <Primitive.Arrow
                data-slot='tooltip-arrow'
                className={tm('z-50 data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180')}>
                <svg width='20' height='10' viewBox='0 0 20 10' fill='none'>
                  <path
                    className={'fill-bg-primary-solid'}
                    d='M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V9H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z'/>
                  <path
                    className={'fill-bg-primary-solid'}
                    d='M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z'/>
                </svg>
              </Primitive.Arrow>
            )}
          </Primitive.Positioner>
        </Primitive.Portal>
      </Primitive.Root>
    </Primitive.Provider>
  )
}

Tooltip.displayName = 'Tooltip'

export { Tooltip }
