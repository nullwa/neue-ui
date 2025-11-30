import { type Meta, type StoryObj } from '@storybook/nextjs'
import { Tooltip } from '@/core/components/tooltip'
import { HelpCircle } from 'lucide-react'

import Template from '@/templates/tooltip.template.mdx'

// Storybook metadata
const meta = {
  title: 'core/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: Template
    }
  },
  argTypes: {
    title: {
      control: {type: 'text'},
      description: 'The main title or label displayed inside the tooltip.',
      table: {
        type: {summary: 'ReactNode'},
        defaultValue: {summary: '—'}
      }
    },
    description: {
      control: {type: 'text'},
      description: 'Optional secondary text displayed below the title inside the tooltip.',
      table: {
        type: {summary: 'ReactNode'},
        defaultValue: {summary: 'undefined'}
      }
    },
    arrow: {
      control: {type: 'boolean'},
      description: 'Whether an arrow should be displayed pointing to the trigger element.',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: 'false'}
      }
    },
    delay: {
      control: {type: 'number', min: 0, step: 50},
      description: 'The delay in milliseconds before the tooltip appears on hover or focus.',
      table: {
        type: {summary: 'number'},
        defaultValue: {summary: '300'}
      }
    },
    placement: {
      control: {type: 'select'},
      options: ['top', 'right', 'bottom', 'left', 'inline-end', 'inline-start'],
      description: 'Controls which side of the trigger element the tooltip will appear on.',
      table: {
        type: {summary: '\'top\' | \'right\' | \'bottom\' | \'left\' | \'inline-end\' | \'inline-start\''},
        defaultValue: {summary: 'top'}
      }
    },
    children: {
      control: false,
      description: 'The element that triggers the tooltip when hovered or focused.',
      table: {
        type: {summary: 'ReactNode'},
        defaultValue: {summary: '—'}
      }
    }
  }
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  name: 'Playground',
  args: {
    title: 'Tooltip title',
    description: 'A short description or hint for the user.',
    arrow: true,
    delay: 300,
    placement: 'top',
    children: <HelpCircle className='h-4.5 w-4.5 cursor-pointer'/>
  }
}
