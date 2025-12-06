import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '@/core/components/accordion'

import Template from '@/templates/accordion.template.mdx'

// Storybook metadata
const meta: Meta<typeof Accordion> = {
  title: 'core/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: Template
    }
  },
  argTypes: {
    multiple: {
      control: 'boolean',
      description: 'Accordion behavior for expanding items.',
      table: {
        type: {summary: `'True' | 'False'`},
        defaultValue: {summary: 'False'}
      }
    },
    variant: {
      control: 'select',
      options: ['default', 'outline', 'solid'],
      description: 'Visual style of the accordion items.',
      table: {
        type: {summary: `'default' | 'outline' | 'solid'`},
        defaultValue: {summary: 'default'}
      }
    },
    indicator: {
      control: 'select',
      options: ['arrow', 'plus', 'none'],
      description: 'What icon indicator appears on the trigger.',
      table: {
        type: {summary: `'arrow' | 'plus' | 'none'`},
        defaultValue: {summary: 'arrow'}
      }
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the accordion trigger.'
    }
  },
  args: {
    multiple: false,
    variant: 'solid',
    indicator: 'arrow',
    size: 'md'
  }
}

export default meta
type Story = StoryObj<typeof Accordion>

// Default story
export const Default: Story = {
  args: {
    multiple: false,
    variant: 'solid',
    indicator: 'plus',
    items: [
      {
        id: '1',
        title: 'product information',
        content: (
          <div>
            <p>Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.</p>
            <p className='pt-0.5'>Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.</p>
          </div>
        )
      },
      {
        id: '2',
        title: 'shipping details',
        content: (
          <div>
            <p>We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.</p>
            <p className='pt-0.5'>Track your shipment in real-time through our dedicated tracking portal.</p>
          </div>
        )
      },
      {
        id: '3',
        title: 'return policy',
        content: (
          <div>
            <p>We stand behind our products with a comprehensive 30-day return policy. If {'you\'re'} not completely satisfied, simply return the item in its original condition.</p>
            <p>full refunds processed within 48 hours of receiving the returned item.</p>
          </div>
        )
      }
    ],
    size: 'md'
  }
}
