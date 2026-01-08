'use client'

import { type FC } from 'react'
import { cva, tm, type VariantProps } from '@/utils/tailwind-merge'

import { Button as Primitive } from '@base-ui/react'

type Props = Primitive.Props & VariantProps<typeof buttonStyle> & {}

const Button: FC<Props> = ({variant, size, ...rest}) => {
  return <Primitive data-slot={'button'} className={tm(buttonStyle({variant, size}))} {...rest} />
}

Button.displayName = 'Button'

const buttonStyle = cva([], {
  variants: {
    variant: {
      default: []
    },
    size: {
      sm: '',
      md: '',
      lg: ''
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'md'
  }
})

export { Button }