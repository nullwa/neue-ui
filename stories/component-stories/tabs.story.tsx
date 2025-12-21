import type { Meta, StoryObj } from '@storybook/nextjs'
import { Tabs } from '@/core/components/tabs'

import Template from '@/templates/tabs.template.mdx'
import { User } from 'lucide-react'

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
      {label: {title: 'Overview', onClick: () => console.log('test')}, value: 'overview', content: <div className={'h-40 flex items-center justify-center text-tertiary'}>VALUE 1</div>},
      {label: {title: 'Projects', icon: <User/>}, value: 'projects', content: <div className={'h-40 flex items-center justify-center text-tertiary'}>VALUE 2</div>},
      {label: {title: 'Account', disabled: true}, value: 'account', content: <div className={'h-40 flex items-center justify-center text-tertiary'}>VALUE 3</div>},
      {label: {title: 'notifications', count: 4}, value: 'notifications', content: <div className={'h-40 flex items-center justify-center text-tertiary'}>VALUE 4</div>}
    ],
    defaultValue: 'overview',
    size: 'md',
    radius: 'squared',
    variant: 'fill'
  }
}
