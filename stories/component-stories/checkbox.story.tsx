import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@/core/components/checkbox'

import Template from '@/templates/checkbox.template.mdx'

// Storybook metadata
const meta: Meta<typeof Checkbox> = {
  title: 'core/Checkbox',
  component: Checkbox,
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

type Story = StoryObj<typeof Checkbox>

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
