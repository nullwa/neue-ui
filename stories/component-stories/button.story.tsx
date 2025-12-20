import type { Meta, StoryObj } from '@storybook/nextjs'
import { Button } from '@/core/components/button'
import { iconNames } from 'lucide-react/dynamic'

import Template from '@/templates/button.template.mdx'

// Storybook metadata
const meta = {
  title: 'core/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: Template
    }
  },
  argTypes: {
    variant: {
      control: {type: 'select'},
      options: ['default', 'error', 'success', 'warning', 'brand', 'ghost', 'outline', 'ghost-brand', 'ghost-error', 'ghost-success', 'ghost-warning'],
      description: 'The variant style of the button.'
    },
    children: {
      control: {type: 'text'},
      description: 'The text to be displayed inside the button.'
    },
    isFancy: {
      control: {type: 'boolean'},
      description: 'Whether to apply a fancy border style to the button.'
    },
    size: {
      control: {type: 'select'},
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button.'
    },
    radius: {
      control: {type: 'radio'},
      options: ['rounded', 'pilled'],
      description: 'The border radius of the button.'
    },
    loading: {
      control: {type: 'boolean'},
      description: 'Whether to show a loading spinner inside the button.'
    },
    icon: {
      control: {type: 'select'},
      options: [...iconNames],
      description: 'The name of the icon to be displayed inside the button.'
    },
    iconPosition: {
      control: {type: 'radio'},
      options: ['leading', 'trailing'],
      description: 'The position of the icon inside the button.'
    },
    className: {
      control: {type: 'text'},
      description: 'Additional tailwind utility classes to apply to the button.'
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'click me',
    isFancy: false,
    size: 'md',
    radius: 'rounded',
    loading: false,
    icon: undefined,
    iconPosition: 'leading'
  }
}
