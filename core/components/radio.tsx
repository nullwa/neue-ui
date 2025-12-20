'use client'

import { type FC, type InputHTMLAttributes } from 'react'

import { cva, tm, type VariantProps } from '@/helpers/tailwind-merge'

type ComponentProps = InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof styles> & {
  label?: string
  hint?: string
  bordered?: boolean
  direction?: 'trailing' | 'leading'
}

const Radio: FC<ComponentProps> = ({label, hint, bordered = false, variant = 'brand', disabled = false, direction = 'leading', className, ...rest}) => {
  variant = disabled ? 'secondary' : variant
  return (
    <div className={tm('flex items-center select-none', bordered && 'border border-secondary rounded-md bg-secondary')}>
      <label htmlFor={`${label}-radio-item`} className={tm('w-full flex items-center gap-3 cursor-pointer py-3 px-4', direction === 'leading' ? 'flex-row' : 'flex-row-reverse', disabled && 'cursor-not-allowed opacity-60')}>
        <div className='relative flex items-center justify-center'>
          <input id={`${label}-radio-item`} type='radio' className={tm(styles({variant}), className)} disabled={disabled} {...rest}/>
          <span className={tm('absolute opacity-0 peer-checked:opacity-100 w-1.5 h-1.5 rounded-full bg-white', variant === 'secondary' && 'bg-gray-800')}/>
        </div>
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

Radio.displayName = 'Radio'

const styles = cva('w-4.5 h-4.5 peer cursor-pointer transition-all appearance-none rounded-full shadow-xs border border-2 border-primary outline-none disabled:cursor-not-allowed disabled:text-fg-disabled disabled:bg-disabled disabled:shadow-xs disabled:ring-disabled_subtle',
  {
    variants: {
      variant: {
        brand: 'checked:border-brand-solid checked:bg-brand-solid checked:ring-2 checked:ring-brand/40',
        secondary: 'checked:border-gray-400 checked:bg-gray-300 checked:ring-2 checked:ring-gray-300/40',
        default: 'checked:border-gray-700 checked:bg-gray-600 checked:ring-2 checked:ring-gray-600/40',
        error: 'checked:border-error-solid checked:bg-error-solid checked:ring-2 checked:ring-error/40',
        success: 'checked:border-success-solid checked:bg-success-solid checked:ring-2 checked:ring-green-600/40',
        warning: 'checked:border-warning-solid checked:bg-warning-solid checked:ring-2 checked:ring-yellow-600/40'
      }
    },
    defaultVariants: {
      variant: 'brand'
    }
  }
)

export { Radio }
