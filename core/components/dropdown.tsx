'use client'

import { type FC, type ReactNode, Fragment, useRef } from 'react'
import { Combobox as Primitive } from '@base-ui-components/react'

import { tm, cva, type VariantProps } from '@/helpers/tailwind-merge'
import { Check, ChevronsUpDown, X } from 'lucide-react'

type ComponentProps = VariantProps<typeof styles> & {
  data: Item[]
  multiple?: boolean
  label: string
  align?: 'start' | 'center' | 'end'
  placeholder?: string
}

type Item = {
  label: string | ReactNode
  value: string
  disabled?: boolean
  group?: string
}

const DROPDOWN_ID_INPUT_SELECTION = 'combobox-input-selection'

const DropDown: FC<ComponentProps> = ({data, multiple = true, label, align = 'start', placeholder = 'Search...'}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  return (
    <Primitive.Root items={data} multiple={multiple}>
      <Primitive.Trigger
        className='flex bg-primary dark:bg-secondary h-9 text-md w-full items-center justify-between gap-3 rounded-sm outline-none border border-primary p-2 text-primary select-none hover:bg-secondary data-[popup-open]:bg-primary dark:data-[popup-open]:bg-secondary cursor-pointer'>
        <div className={'flex-1 text-left'}>
          {
            multiple ?
              <Primitive.Chips ref={containerRef} className='w-full flex flex-wrap items-center gap-0.5'>
                <Primitive.Value>
                  {(items: Item[]) => (
                    <Fragment>
                      {(items ?? []).map((item) => (
                        <Primitive.Chip key={item.value} aria-label={item.value} className='h-6 flex items-center px-1 rounded-full bg-secondary/50 border border-primary text-primary'>
                          <p>{item.label}</p>
                          <Primitive.ChipRemove aria-label='Remove' className='rounded-md flex items-center justify-center text-inherit hover:bg-tertiary cursor-pointer'>
                            <X size={14} className={'text-secondary rounded-full'}/>
                          </Primitive.ChipRemove>
                        </Primitive.Chip>
                      ))}
                    </Fragment>
                  )}
                </Primitive.Value>
              </Primitive.Chips>
              :
              <Primitive.Value/>
          }
        </div>
        <Primitive.Icon className='flex'>
          <ChevronsUpDown size={14} className={'text-secondary hover:bg-tertiary rounded-full'}/>
        </Primitive.Icon>
      </Primitive.Trigger>

      <Primitive.Portal>
        <Primitive.Positioner align={align} sideOffset={4} className={'z-9999'}>
          <Primitive.Popup
            aria-label={label}
            className={'max-h-[24rem] w-[var(--anchor-width)] max-w-[var(--available-width)] origin-[var(--transform-origin)] overflow-hidden rounded-sm bg-primary border border-primary pt-0 text-primary outline-none transition-[transform, scale, opacity] duration-100'}>
            <div className='w-full h-[var(--input-container-height)] text-center'>
              <Primitive.Input
                placeholder={placeholder}
                id={DROPDOWN_ID_INPUT_SELECTION}
                className='h-9 w-full group overflow-hidden flex items-center bg-primary dark:bg-secondary border-b-2 outline-none border-primary text-primary placeholder:text-tertiary/50 px-2 focus:ring-primary/35 focus:border-ring focus:outline-none'
              />
            </div>

            <Primitive.Empty>No data found.</Primitive.Empty>

            <Primitive.List>
              {(item: Item) => (
                <Primitive.Item value={item} key={item.value} disabled={item.disabled} className={tm('p-2 text-md cursor-pointer flex items-center gap-2 hover:bg-tertiary', item.disabled && 'opacity-50 cursor-not-allowed')}>
                  <div className={'flex-1'}>{item.label}</div>
                  <Primitive.ItemIndicator>
                    <Check size={14} className={'text-secondary'}/>
                  </Primitive.ItemIndicator>
                </Primitive.Item>
              )}
            </Primitive.List>
          </Primitive.Popup>
        </Primitive.Positioner>
      </Primitive.Portal>
    </Primitive.Root>
  )
}

DropDown.displayName = 'Dropdown'

const styles = cva([], {
  variants: {},
  defaultVariants: {}
})

export { DropDown }
