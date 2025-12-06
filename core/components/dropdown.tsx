'use client'

import { type FC, type ReactNode } from 'react'
import { Combobox as Primitive } from '@base-ui-components/react'

import { tm } from '@/helpers/tailwind-merge'
import { Check, ChevronsUpDown } from 'lucide-react'

type CompoenentProps = {
  data: Item[]
  multiple?: boolean
  align?: 'start' | 'center' | 'end'
}

type Item = {
  label: string | ReactNode
  value: string
  disabled?: boolean
  group?: string
}

const DROPDOWN_ID_INPUT_SELECTION = 'combobox-input-selection'

const DropDown: FC<CompoenentProps> = ({data, multiple = true, align = 'start'}) => {
  return (
    <Primitive.Root items={data} multiple={multiple}>
      <Primitive.Trigger
        className='flex bg-[canvas] h-10 min-w-[12rem] items-center justify-between gap-3 rounded-sm border border-gray-200 pr-3 pl-3.5 text-base text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 data-[popup-open]:bg-gray-100 cursor-default'>
        <Primitive.Value/>
        <Primitive.Icon className='flex'>
          <ChevronsUpDown size={14} className={'text-secondary hover:bg-tertiary rounded-full'}/>
        </Primitive.Icon>
      </Primitive.Trigger>

      <Primitive.Portal>
        <Primitive.Positioner align={align} sideOffset={8} className={'z-9999'}>
          <Primitive.Popup
            aria-label={'Select ...'}
            className={
              'max-h-[24rem] w-[var(--anchor-width)] max-w-[var(--available-width)] origin-[var(--transform-origin)] overflow-hidden rounded-sm bg-primary border border-primary pt-0 text-primary shadow-xs outline-none transition-[transform, scale, opacity] duration-100'
            }>
            <div className='w-full h-[var(--input-container-height)] text-center p-2'>
              <Primitive.Input
                placeholder={'Select...'}
                id={DROPDOWN_ID_INPUT_SELECTION}
                className='h-9 w-full group overflow-hidden flex items-center bg-primary dark:bg-secondary border-2 outline-none text-primary placeholder:text-tertiary/50 px-2 border-primary focus:ring-primary/35 focus:border-ring focus:outline-none'
              />
            </div>

            <Primitive.Empty>No data found.</Primitive.Empty>

            <Primitive.List>
              {(item: Item) => (
                <Primitive.Item value={item} key={item.value} disabled={item.disabled} className={tm('pl-6 pr-2 py-1 cursor-pointer flex items-center gap-2 hover:bg-gray-100', item.disabled && 'opacity-50 cursor-not-allowed')}>
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

export { DropDown }
