'use client'

import { type FC, Fragment, useRef } from 'react'
import { Combobox as Primitive, Avatar } from '@base-ui-components/react'

import { tm, cva, type VariantProps } from '@/helpers/tailwind-merge'
import { Check, ChevronsUpDown, X } from 'lucide-react'

type ComponentProps = React.ComponentProps<typeof Primitive.Root> & VariantProps<typeof styles> & {
  data: Item[]
  multiple?: boolean
  label: string
  align?: 'start' | 'center' | 'end'
  placeholder?: string
  grouped?: boolean
}

export type Item = {
  label: { title: string; summary?: string; avatar?: string }
  value: string
  disabled?: boolean
  group?: string
}

const DROPDOWN_ID_INPUT_SELECTION = 'combobox-input-selection'

const DropDown: FC<ComponentProps> = ({data, multiple = true, label = 'Select...', align = 'start', placeholder = 'Search...', grouped = false, ...rest}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (
    <Primitive.Root items={data} multiple={multiple} {...rest}>
      <Primitive.Trigger
        className='flex bg-primary dark:bg-secondary min-h-9 text-md w-full items-center justify-between gap-3 rounded-sm outline-none border border-primary p-2 text-primary select-none hover:bg-secondary data-[popup-open]:bg-primary dark:data-[popup-open]:bg-secondary cursor-pointer'>
        <div className={'flex-1 text-left'}>
          {
            multiple ?
              <Primitive.Chips ref={containerRef} className='w-full flex flex-wrap items-center gap-0.5'>
                <Primitive.Value>
                  {(items: Item[]) => (
                    <Fragment>
                      {(items && items.length > 0) ? (items).map((item) => (
                        <Primitive.Chip key={item.value} aria-label={item.value} className='flex items-center px-0.5 py-px gap-1 rounded-full bg-secondary/50 border border-primary text-primary'>
                          <Avatar.Root data-slot='avatar' className={tm('select-none relative')}>
                            <div className={'overflow-hidden shrink-0 flex items-center justify-center cursor-pointer size-5 rounded-full'}>
                              <Avatar.Image data-slot='avatar-image' src={item.label.avatar} className='rounded-none'/>
                              <Avatar.Fallback data-slot='avatar-fallback' className={tm('bg-quaternary text-secondary flex size-full items-center justify-center text-xs')}>
                                {item.label.title[0]}
                              </Avatar.Fallback>
                            </div>
                          </Avatar.Root>
                          <span className={'text-sm h-full'}>{item.label.title}</span>
                          <Primitive.ChipRemove aria-label='Remove' className='rounded-md flex items-center justify-center text-inherit hover:bg-tertiary cursor-pointer'>
                            <X size={12} className={'text-secondary rounded-full'}/>
                          </Primitive.ChipRemove>
                        </Primitive.Chip>
                      )) : <p className={'text-tertiary/50'}>{label}</p>}
                    </Fragment>
                  )}
                </Primitive.Value>
              </Primitive.Chips>
              :
              <Primitive.Value>
                {(item: Item) => item ? item.label.title : <p className={'text-tertiary/50'}>{label}</p>}
              </Primitive.Value>
          }
        </div>

        <Primitive.Clear
          nativeButton={false}
          className={'text-secondary hover:bg-tertiary rounded-full cursor-pointer'}
          render={(props) => <X {...props} size={14} className={'text-secondary'}/>}
        />

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
                className='h-9 w-full group overflow-hidden flex items-center bg-primary dark:bg-secondary border-b border-primary outline-none text-primary placeholder:text-tertiary/50 px-2 focus:ring-primary/35 focus:border-ring focus:outline-none'
              />
            </div>

            <Primitive.Empty className={'flex items-center justify-center p-2'}>No data found.</Primitive.Empty>

            <Primitive.List>
              {(item: Item) => (
                <Primitive.Item value={item} key={item.value} disabled={item.disabled} className={tm('p-2 text-md cursor-pointer flex items-center gap-2 hover:bg-tertiary', item.disabled && 'opacity-50 cursor-not-allowed')}>
                  <div className={'flex-1 flex items-center gap-2'}>
                    <Avatar.Root data-slot='avatar' className={tm('select-none relative')}>
                      <div className={'overflow-hidden shrink-0 flex items-center justify-center cursor-pointer size-8 rounded-full'}>
                        <Avatar.Image data-slot='avatar-image' src={item.label.avatar} className='rounded-none'/>
                        <Avatar.Fallback data-slot='avatar-fallback' className={tm('bg-quaternary text-secondary flex size-full text-md items-center justify-center')}>
                          {item.label.title[0]}
                        </Avatar.Fallback>
                      </div>
                    </Avatar.Root>
                    <div className='flex flex-col items-start'>
                      <p>{item.label.title}</p>
                      {item.label.summary && <p className='text-sm text-tertiary'>{item.label.summary}</p>}
                    </div>
                  </div>
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
