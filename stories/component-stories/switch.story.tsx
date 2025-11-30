import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '@/core/components/switch'

import Template from '@/templates/switch.template.mdx'

// Storybook metadata
const meta = {
  title: 'core/Switch',
  component: Switch,
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
      options: ['default', 'brand', 'error']
    },
    bordered: {control: 'boolean'},
    disabled: {control: 'boolean'},
    radius: {
      control: {type: 'radio'},
      options: ['squared', 'pilled']
    },
    direction: {
      control: {type: 'radio'},
      options: ['leading', 'trailing']
    },
    defaultChecked: {control: 'boolean'}
  }
} satisfies Meta<typeof Switch>
export default meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Accept terms',
    hint: 'You must accept before continuing',
    bordered: false,
    disabled: false,
    radius: 'pilled',
    direction: 'leading',
    defaultChecked: false,
    onCheckedChange: (x) => console.log('toggled', x)
  }
}
