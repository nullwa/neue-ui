'use client'

import { type FC, type InputHTMLAttributes } from 'react'

import { cva, tm, type VariantProps } from '@/helpers/tailwind-merge'
import { Check } from 'lucide-react'

type ComponentProps = InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof styles> & {
  label?: string
  hint?: string
  bordered?: boolean
  direction?: 'trailing' | 'leading'
}

const Checkbox: FC<ComponentProps> = ({label, hint, bordered = false, variant = 'brand', disabled = false, direction = 'leading', className, ...rest}) => {
  variant = disabled ? 'secondary' : variant
  return (
    <div className={tm('flex items-center select-none', bordered && 'border border-secondary rounded-sm bg-secondary')}>
      <label htmlFor={`${label}-checking-item`} className={tm('w-full flex items-center gap-3 cursor-pointer py-3 px-4', direction === 'leading' ? 'flex-row' : 'flex-row-reverse', disabled && 'cursor-not-allowed')}>
        <div className={tm('relative flex items-center justify-center')}>
          <input id={`${label}-checking-item`} type='checkbox' className={tm(styles({variant, className}))} disabled={disabled} {...rest} />
          <Check className={tm('absolute opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none size-3.5', variant === 'secondary' ? 'text-black' : 'text-white')}/>
        </div>
        {label && (
          <div className={tm('flex-1 flex flex-col gap-1.5 cursor-pointer', disabled && 'cursor-not-allowed opacity-60')}>
            <p className='text-primary first-letter:uppercase font-medium'>{label}</p>
            {hint && <p className='text-tertiary first-letter:uppercase'>{hint}</p>}
          </div>
        )}
      </label>
    </div>
  )
}

Checkbox.displayName = 'Checkbox'

const styles = cva(
  ['border border-2 border-primary w-4.5 h-4.5 peer cursor-pointer transition-all appearance-none rounded-md outline-none', 'disabled:cursor-not-allowed disabled:bg-disabled disabled:border-disabled disabled:text-fg-disabled'],
  {
    variants: {
      variant: {
        brand: 'checked:bg-brand-solid checked:border-brand-900',
        secondary: 'checked:bg-gray-300 checked:border-gray-500',
        default: 'checked:bg-gray-600 checked:border-gray-800',
        error: 'checked:bg-error-solid checked:border-error-800',
        success: 'checked:bg-success-solid checked:border-success-800',
        warning: 'checked:bg-warning-solid checked:border-warning-800'
      }
    },
    defaultVariants: {
      variant: 'brand'
    }
  }
)

export { Checkbox }
