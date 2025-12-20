'use client'

import { type FC } from 'react'
import { cva, tm, type VariantProps } from '@/helpers/tailwind-merge'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'

type ComponentProps = VariantProps<typeof styles> & {
  text?: string
  count?: number
  icon?: IconName
  removable?: boolean
  onRemove?: () => void
  onClick?: () => void
}

const Badge: FC<ComponentProps> = ({text, icon, count, removable = false, variant = 'default', radius = 'squared', onRemove, onClick}) => {
  return (
    <div className={tm(styles({variant, radius}))} onClick={onClick} aria-label={text ?? 'badge'}>
      {icon && <DynamicIcon name={icon} size={14} aria-hidden/>}
      {text && <span className='text-sm'>{text}</span>}
      {typeof count === 'number' && <span className='text-sm font-medium'>{count}</span>}
      {removable && (
        <button
          type='button'
          onClick={(e) => {
            e.stopPropagation()
            onRemove?.()
          }}
          aria-label='Remove badge'
          className='cursor-pointer rounded-full hover:bg-black/10 transition'>
          <DynamicIcon name='x' size={12}/>
        </button>
      )}
    </div>
  )
}

Badge.displayName = 'Badge'

const styles = cva('select-none flex items-center gap-1 px-2 py-0.5 font-medium text-xs cursor-pointer transition-colors hover:opacity-85 active:opacity-70', {
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
    radius: {
      pilled: 'rounded-full',
      squared: 'rounded-md'
    }
  },
  defaultVariants: {
    variant: 'default',
    radius: 'squared'
  }
})

export { Badge }
