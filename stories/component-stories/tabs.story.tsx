import type { Meta, StoryObj } from '@storybook/nextjs'
import { Tabs } from '@/core/components/tabs'

import Template from '@/templates/tabs.template.mdx'

const meta = {
  title: 'core/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: Template
    }
  },
  argTypes: {
    variant: {
      control: {type: 'select'},
      options: ['solid', 'fill'],
      description: 'Type of Tabs'
    },
    size: {
      control: {type: 'select'},
      options: ['sm', 'md', 'lg'],
      description: 'Size of the tabs component'
    },
    radius: {
      control: {type: 'radio'},
      options: ['none', 'squared', 'borderless'],
      description: 'Radius of the tabs component'
    }
  }
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  args: {
    tabs: [
      {label: 'Overview', value: 'overview', content: <div className={'h-40 flex items-center justify-center text-tertiary'}>VALUE 1</div>},
      {label: 'Projects', value: 'projects', content: <div className={'h-40 flex items-center justify-center text-tertiary'}>VALUE 2</div>},
      {label: 'Account', value: 'account', content: <div className={'h-40 flex items-center justify-center text-tertiary'}>VALUE 3</div>}
    ],
    defaultValue: 'overview',
    size: 'md',
    radius: 'squared',
    variant: 'fill'
  }
}
