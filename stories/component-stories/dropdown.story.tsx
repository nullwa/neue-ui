import type { Meta, StoryObj } from '@storybook/nextjs'
import { DropDown } from '@/core/components/dropdown'

import Template from '@/templates/dropdown.template.mdx'
import { ChevronsUpDown } from 'lucide-react'

// Storybook metadata
const meta = {
  title: 'core/DropDown',
  component: DropDown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: Template
    }
  }
} satisfies  Meta<typeof DropDown>

export default meta
type Story = StoryObj<typeof DropDown>

export const Default: Story = {
  args: {
    data: [
      {value: 'fruit-orange', label: 'Orange', disabled: false, group: 'Fruits'},
      {value: 'fruit-strawberry', label: 'Strawberry', disabled: false, group: 'Fruits'},
      {value: 'fruit-watermelon', label: 'Watermelon', disabled: true, group: 'Fruits'},
      {value: 'veg-pepper', label: 'Bell pepper', disabled: false, group: 'Vegetables'},
      {value: 'veg-spinach', label: 'Spinach', disabled: false, group: 'Vegetables'},
      {value: 'veg-zucchini', label: 'Zucchini', disabled: false, group: 'Vegetables'}
    ]

  }
}
