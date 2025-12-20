import type { Meta, StoryObj } from '@storybook/react'
import { Radio } from '@/core/components/radio'

import Template from '@/templates/radio.template.mdx'

// Storybook metadata
const meta: Meta<typeof Radio> = {
  title: 'core/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: Template
    }
  },
  args: {
    label: 'Accept terms',
    hint: 'You must accept before continuing'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'brand', 'secondary', 'error', 'success', 'warning']
    },
    bordered: {control: 'boolean'},
    disabled: {control: 'boolean'},
    direction: {
      control: {type: 'radio'},
      options: ['leading', 'trailing']
    }
  }
}
export default meta

type Story = StoryObj<typeof Radio>

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Accept terms',
    hint: 'You must accept before continuing',
    bordered: false,
    disabled: false,
    direction: 'leading'
  }
}
