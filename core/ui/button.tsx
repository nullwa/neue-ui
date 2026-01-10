'use client'

import { type FC } from 'react'
import { cva, tm, type VariantProps } from '@/core/utils/tailwind-merge'

import { Button as Primitive } from '@base-ui/react'

/*  type  */
type Props = Primitive.Props & VariantProps<typeof buttonStyle> & {}

const Button: FC<Props> = ({variant = 'default', size = 'md', isFancy = false, rounded = 'default', className, ...rest}) => {
  return <Primitive data-slot={'button'} className={tm(buttonStyle({variant, size, rounded, isFancy, className}))} {...rest} />
}

Button.displayName = 'Button'

const buttonStyle = cva(
  [
    'capitalize select-none group inline-flex items-center justify-center text-box relative cursor-pointer outline-none transition duration-100 ease-linear whitespace-wrap',
    'disabled:cursor-not-allowed disabled:text-fg-disabled disabled:bg-disabled disabled:shadow-xs disabled:ring-disabled-subtle',
    'focus-within:outline-2 focus-within:outline-offset-2 ring-1 ring-transparent'
  ], {
    variants: {
      variant: {
        default: ['bg-gray-950 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white shadow-xs-skeumorphic'],
        outline: ['bg-secondary hover:bg-secondary-hover text-secondary hover:text-secondary-hover border border-primary'],
        error: ['bg-error-solid hover:bg-error-solid-hover text-white shadow-xs-skeumorphic'],
        success: ['bg-success-solid hover:bg-success-solid-hover text-white shadow-xs-skeumorphic'],
        warning: ['bg-warning-solid hover:bg-warning-solid-hover text-white shadow-xs-skeumorphic'],
        brand: ['bg-brand-solid hover:bg-brand-solid-hover text-white shadow-xs-skeumorphic'],
        ghost: ['bg-primary hover:bg-primary-hover text-primary']
      },
      size: {
        sm: 'h-6 min-w-6 px-1.5 text-xs',
        md: 'h-7 min-w-7 px-2 text-sm',
        lg: 'h-8 min-w-8 px-2.5 text-base'
      },
      isFancy: {
        true: 'before:absolute before:inset-px before:border before:border-white/50 before:mask-b-from-0%',
        false: null
      },
      rounded: {
        default: 'rounded-sm',
        none: 'rounded-none'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      isFancy: false,
      rounded: 'default'
    },
    compoundVariants: [
      {isFancy: true, rounded: 'default', class: 'before:rounded-[3px]'},
      {isFancy: true, rounded: 'none', class: 'before:rounded-none'}
    ]
  }
)

export { Button }