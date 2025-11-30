'use client'

import { type FC, type InputHTMLAttributes, type ReactNode } from 'react'

import { cva, tm, type VariantProps } from '@/helpers/tailwind-merge'
import { DynamicIcon, type IconName, iconNames } from 'lucide-react/dynamic'

type ComponentProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & VariantProps<typeof styles> & {
  addon?: string | IconName | ReactNode
  onValidateInput?: () => {}
}

const Input: FC<ComponentProps> = ({placeholder = 'placeholder', addon = undefined, onValidateInput, direction = 'left', variant = 'default', size = 'md', radius = 'squared', className, ...rest}) => {
  const renderAddon = () => {
    if (!addon) return null

    // If addon is a valid IconName
    if (typeof addon === 'string' && iconNames.includes(addon as IconName)) {
      return (
        <span
          onClick={onValidateInput}
          className={tm('flex items-center justify-center text-secondary bg-tertiary', size === 'sm' && 'h-8 w-8', size === 'md' && 'h-9 w-9', size === 'lg' && 'h-10 w-10', direction === 'right' && 'cursor-pointer hover:bg-quaternary')}>
          <DynamicIcon name={addon as IconName} size={size === 'lg' ? 16 : 14} className='text-secondary'/>
        </span>
      )
    }

    // If addon is a string (text)
    if (typeof addon === 'string') {
      return <div className={tm('flex items-center justify-center text-secondary font-normal px-2 bg-tertiary h-full capitalize', size === 'sm' ? 'text-sm' : 'text-md')}>{addon}</div>
    }

    // If addon is a ReactNode
    if (typeof addon === 'object') {
      return addon
    }

    return null
  }

  return (
    <div className={tm(styles({variant, radius, size, direction, className}))}>
      {renderAddon()}
      <input placeholder={placeholder} {...rest} />
    </div>
  )
}

Input.displayName = 'Input'

const styles = cva(
  ['group overflow-hidden flex items-center bg-primary dark:bg-secondary border-2 shadow-xs', '[&>input]:pear [&>input]:h-full [&>input]:w-full [&>input]:outline-none [&>input]:text-primary [&>input]:border-0 [&>input]:bg-transparent [&>input]:placeholder:text-tertiary/50 [&>input]:px-2'],
  {
    variants: {
      variant: {
        default: 'border-primary focus-within:ring-primary/35 focus-within:border-ring focus-within:outline-none',
        error: 'border-error',
        success: 'border-success-600',
        warning: 'border-warning-600'
      },
      size: {
        sm: '[&>input]:placeholder:text-sm focus-within:ring-2 h-8',
        md: '[&>input]:placeholder:text-md focus-within:ring-3 h-9',
        lg: '[&>input]:placeholder:text-md focus-within:ring-3 h-10'
      },
      radius: {
        squared: 'rounded-xs',
        pilled: 'rounded-full'
      },
      direction: {
        left: 'flex-row',
        right: 'flex-row-reverse'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      radius: 'squared'
    }
  }
)

export { Input }
