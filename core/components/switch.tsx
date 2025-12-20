'use client'

import { type FC } from 'react'
import { Switch as Primitive } from '@base-ui-components/react'
import { cva, tm, type VariantProps } from '@/helpers/tailwind-merge'

type ComponentProps = React.ComponentProps<typeof Primitive.Root> & VariantProps<typeof styles> & {
  label?: string
  hint?: string
  disabled?: boolean
  bordered?: boolean
  direction?: 'trailing' | 'leading'
}

const Switch: FC<ComponentProps> = ({label, hint, bordered = false, variant = 'brand', radius = 'pilled', disabled = false, direction = 'leading', ...rest}) => {
  return (
    <div className={tm('flex items-center select-none', bordered && 'border border-secondary rounded-sm bg-secondary')}>
      <label className={tm('w-full flex items-center gap-3 cursor-pointer py-3 px-4', direction === 'leading' ? 'flex-row' : 'flex-row-reverse', disabled && 'cursor-not-allowed')}>
        <Primitive.Root disabled={disabled} className={tm(styles({variant, radius}))} {...rest}>
          <Primitive.Thumb className='block w-4 h-4 bg-white border border-primary shadow-xs transition-transform duration-200 translate-x-[2px] data-[checked]:translate-x-[19px]'/>
        </Primitive.Root>
        {label && (
          <div className='flex-1 flex flex-col gap-1.5 cursor-pointer'>
            <p className='text-primary first-letter:uppercase font-medium'>{label}</p>
            {hint && <p className='text-tertiary first-letter:uppercase'>{hint}</p>}
          </div>
        )}
      </label>
    </div>
  )
}

Switch.displayName = 'Switch'

const styles = cva('cursor-pointer flex items-center w-10 h-6 rounded-full [&>span]:rounded-full bg-secondary dark:bg-secondary border border-secondary dark:border-primary', {
  variants: {
    variant: {
      default: 'data-[checked]:bg-gray-950 dark:data-[checked]:bg-gray-600',
      brand: 'data-[checked]:bg-brand-solid data-[checked]:border-brand-solid',
      error: 'data-[checked]:bg-error-solid data-[checked]:border-error-solid',
      success: 'data-[checked]:bg-success-solid data-[checked]:border-success-solid',
      warning: 'data-[checked]:bg-warning-solid data-[checked]:border-warning-solid'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

export { Switch }
