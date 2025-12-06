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
    'capitalize contain-content select-none group flex items-center justify-center text-box relative cursor-pointer outline-none transition duration-100 ease-linear focus-within:outline-2 focus-within:outline-offset-2',
    'disabled:cursor-not-allowed disabled:text-fg-disabled disabled:bg-disabled disabled:shadow-xs disabled:ring-disabled_subtle'
  ],
  {
    variants: {
      variant: {
        default: 'bg-fg-primary text-bg-primary shadow-xs-skeumorphic ring-1 ring-transparent ring-inset hover:bg-fg-secondary_hover data-loading:bg-fg-secondary_hover',
        outline: 'bg-secondary text-primary shadow-xs-skeumorphic ring-1 ring-primary ring-inset hover:bg-primary_hover data-loading:bg-primary_hover',
        error: 'bg-error-solid text-white shadow-xs-skeumorphic ring-1 ring-transparent ring-inset hover:bg-error-700 dark:hover:bg-error-500 data-loading:bg-error-700 dark:data-loading:bg-error-500',
        success: 'bg-success-solid text-white shadow-xs-skeumorphic ring-1 ring-transparent ring-inset hover:bg-success-700 dark:hover:bg-success-500 data-loading:bg-success-700 dark:data-loading:bg-success-500',
        warning: 'bg-warning-solid text-white shadow-xs-skeumorphic ring-1 ring-transparent ring-inset hover:bg-warning-700 dark:hover:bg-warning-500 data-loading:bg-warning-700 dark:data-loading:bg-warning-500',
        brand: 'bg-brand-solid text-white shadow-xs-skeumorphic ring-1 ring-transparent ring-inset hover:bg-brand-solid_hover data-loading:bg-brand-solid_hover',
        ghost: 'bg-primary text-primary ring-1 ring-transparent ring-inset hover:bg-secondary_hover',
        'outline-brand': 'bg-brand-primary text-brand-primary shadow-xs-skeumorphic',
        'outline-error': 'bg-error-primary text-error-primary shadow-xs-skeumorphic',
        'outline-success': 'bg-success-primary text-success-primary shadow-xs-skeumorphic',
        'outline-warning': 'bg-warning-primary text-warning-primary shadow-xs-skeumorphic'
      },
      isFancy: {
        true: 'before:absolute before:inset-px before:border before:border-white/50 before:mask-b-from-0%',
        false: null
      },
      size: {
        sm: 'h-8 min-w-8 px-3 text-sm',
        md: 'h-9 min-w-9 px-4 text-md',
        lg: 'h-10 min-w-10 px-5 text-lg'
      },
      radius: {
        rounded: 'rounded-sm before:rounded-[1px]',
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
  sm: 16,
  md: 18,
  lg: 20
}

export { Button }
