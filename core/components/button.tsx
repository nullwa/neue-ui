'use client'

import { type ButtonHTMLAttributes, type FC } from 'react'

import { cva, tm, type VariantProps } from '@/helpers/tailwind-merge'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'

type ComponentProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof styles> & {
  children?: string
  loading?: boolean
  icon?: IconName
  iconPosition?: 'trailing' | 'leading'
}

const Button: FC<ComponentProps> = ({children, loading = false, icon = undefined, iconPosition = 'leading', variant = 'default', isFancy = false, size = 'sm', radius = 'rounded', className, ...rest}) => {
  const hasText = children && typeof children === 'string' && children.trim().length > 0

  return (
    <button type={'button'} data-slot='button' data-loading={loading || undefined} className={tm(styles({variant, isFancy, size, radius, className}), !hasText && 'px-0')} {...rest}>
      <div>
        <div className={tm('flex items-center justify-between gap-2', iconPosition === 'trailing' && 'flex-row-reverse')}>
          {!loading ? icon && <DynamicIcon name={icon} size={iconSizeMap[size ?? 'sm']}/> : <DynamicIcon name='loader' data-icon='loading' size={iconSizeMap[size ?? 'sm']} className='animate-spin opacity-85'/>}
          {hasText && <span className='first-letter:uppercase'>{children}</span>}
        </div>
      </div>
    </button>
  )
}

Button.displayName = 'Button'

const styles = cva(
  [
    'capitalize contain-content select-none group flex items-center justify-center text-box relative cursor-pointer outline-none transition duration-100 ease-linear',
    'disabled:cursor-not-allowed disabled:text-fg-disabled disabled:bg-disabled disabled:shadow-xs disabled:ring-disabled-subtle',
    'focus-within:outline-2 focus-within:outline-offset-2 ring-1 ring-transparent'
  ],
  {
    variants: {
      variant: {
        default: 'bg-gray-950 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white shadow-xs-skeumorphic',
        outline: 'bg-secondary hover:bg-secondary-hover text-secondary hover:text-secondary-hover border border-secondary',
        error: 'bg-error-solid hover:bg-error-solid-hover text-white shadow-xs-skeumorphic',
        success: 'bg-success-solid hover:bg-success-solid-hover text-white shadow-xs-skeumorphic',
        warning: 'bg-warning-solid hover:bg-warning-solid-hover text-white shadow-xs-skeumorphic',
        brand: 'bg-brand-solid hover:bg-brand-solid-hover text-white shadow-xs-skeumorphic',
        ghost: 'bg-primary hover:bg-primary-hover text-primary',
        'ghost-brand': 'text-brand-700 dark:text-brand-600 bg-brand-100 hover:bg-brand-200 dark:bg-brand-950/50 dark:hover:bg-brand-800/50  border border-brand-300 dark:border-brand-900',
        'ghost-error': 'text-error-700 dark:text-error-600 bg-error-100 hover:bg-error-200 dark:bg-error-950/50 dark:hover:bg-error-800/50  border border-error-300 dark:border-error-900',
        'ghost-success': 'text-success-700 dark:text-success-600 bg-success-100 hover:bg-success-200 dark:bg-success-950/50 dark:hover:bg-success-800/50  border border-success-300 dark:border-success-900',
        'ghost-warning': 'text-warning-700 dark:text-warning-600 bg-warning-100 hover:bg-warning-200 dark:bg-warning-950/50 dark:hover:bg-warning-800/50  border border-warning-300 dark:border-warning-900'
      },
      isFancy: {
        true: 'before:absolute before:inset-px before:border before:border-white/50 before:mask-b-from-0%',
        false: null
      },
      size: {
        sm: 'h-7 min-w-7 px-2 text-sm',
        md: 'h-8 min-w-8 px-3 text-base',
        lg: 'h-9 min-w-9 px-4 text-lg'
      },
      radius: {
        rounded: 'rounded-md before:rounded-[5px]',
        pilled: 'rounded-full before:rounded-full'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      isFancy: false,
      radius: 'rounded'
    }
  }
)

const iconSizeMap: Record<string, number> = {
  sm: 15,
  md: 17,
  lg: 19
}

export { Button }
